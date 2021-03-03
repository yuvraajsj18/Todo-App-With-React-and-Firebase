import React, { useEffect, useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { db } from '../firebase'
import { useAuth } from '../context/AuthContext'

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const { currentUser } = useAuth();

    useEffect(() => {
        document.title = "Todo App";
        
        const getTodos = async () => {
            const todosFromServer = await fetchTodos(currentUser.uid);
            setTodos(todosFromServer);
        };

        getTodos();
    }, [currentUser.uid]); 

    const fetchTodos = async (userId) => {
        const todoDocRef = db.collection('todos');
        const todosSnapshot = await todoDocRef.where("author", "==", userId).get();

        const todosFromServer = [];
        todosSnapshot.forEach(todo => todosFromServer.push({...todo.data(), id:todo.id}));

        return todosFromServer;
    }

    return (
        <main>
            <TodoForm />
            <TodoList todos={todos}/>
        </main>
    )
}

export default Todo
