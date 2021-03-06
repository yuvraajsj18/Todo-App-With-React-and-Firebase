import React, { useEffect, useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { db } from '../firebase'
import { useAuth } from '../context/AuthContext'

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const { currentUser } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = "Todo App";
        setError("");

        const getTodos = async () => {
            try {
                const todosFromServer = await fetchTodos(currentUser.uid);
                setTodos(todosFromServer);
                setLoading(false);
            } catch (e) {
                setError("Oops! an error occured, please try again.");
                console.error(e.message);
            }
        };

        getTodos();
    }, [currentUser.uid]); 

    const fetchTodos = async (userId) => {
        const todoCollectionRef = db.collection('todos');
        const todosSnapshot = await todoCollectionRef.where("author", "==", userId).get();

        const todosFromServer = [];
        todosSnapshot.forEach(todo => todosFromServer.push({...todo.data(), id:todo.id}));

        return todosFromServer;
    }

    const addTodoDatabase = async (todo) => {
        const todoCollectionRef = db.collection('todos');
        const todoDocRef = await todoCollectionRef.add(todo);
        return todoDocRef.id;
    }

    const addTodo = async (task) => {
        let newTodo = {
            task: task,
            is_completed: false,
            author: currentUser.uid,
        };

        try {
            const todoId = await addTodoDatabase(newTodo);
            newTodo = {...newTodo, id: todoId};

            setTodos(prevTodos => [...prevTodos, newTodo]);
        } catch (e) {
            setError("Oops! an error occured, please try again.")
            console.log(e.message);
        }
    };

    const setTodoIsCompleted = async (todoId, isCompleted) => {
        await db.collection('todos').doc(todoId).update({
            is_completed: isCompleted,
        })

        setTodos(todos.map(todo => {
            return (
                todo.id === todoId ?
                {...todo, is_completed: isCompleted} :
                todo
            );
        }));
    };

    const deleteTodo = async (todoId) => {
        await db.collection("todos").doc(todoId).delete();

        setTodos(todos.filter(todo => todo.id !== todoId));
    }

    return (
        <main>
            <TodoForm onAdd={addTodo}/>
            
            {
                error &&
                <div className="sm:max-w-md max-w-xs mx-auto my-6 flex justify-center bg-red-100 text-red-900 hover:shadow-md p-3 mb-4 border shadow rounded-md">{error}</div>
            }

            {
                !loading &&
                <TodoList todos={todos} onComplete={setTodoIsCompleted} onDelete={deleteTodo}/>
            }
        </main>
    )
}

export default Todo
