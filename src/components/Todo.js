import React, { useEffect, useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const Todo = () => {
    const [todos, setTodos] = useState({});

    useEffect(() => {
        document.title = "Todo App";
    }); 

    return (
        <main>
            <TodoForm />
            <TodoList />
        </main>
    )
}

export default Todo
