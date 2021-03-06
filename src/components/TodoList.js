import React, { useState } from 'react'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'
import { IoRemoveCircleOutline } from 'react-icons/io5'
import noTodoIllustration from '../assets/images/no-todo.png'

const TodoList = (props) => {
  const [error, setError] = useState({});

  const handleTodoComplete = async (todoId, isCompleted) => {
    setError({});
    try {
      await props.onComplete(todoId, isCompleted);
    }
    catch (e) {
      setError({message: "Oops! Something went wrong, please try again.", todoId:todoId});
      console.log(e.message);
    }
  }

  const handleTodoDelete = async (todoId) => {
    setError({});
    try {
      await props.onDelete(todoId);
    }
    catch (e) {
      setError({message: "Oops! Something went wrong, please try again.", todoId:todoId});
      console.log(e.message);
    }
  }

  return (
      <div id="todos" className="my-8 mx-auto sm:max-w-md max-w-xs">
        {
          props.todos.length > 0 ?  ( 
            <ul className="w-full">
            {
              props.todos.map(todo => {
                return (
                  <div key={todo.id}>
                  <li
                    className={`flex justify-between hover:shadow-md p-3 mb-4 border shadow ${todo.is_completed && "bg-green-50"} rounded-md`}>
                    {todo.task}
                    <div className="flex items-center">
                      <button className="focus:outline-none" onClick={(e) => handleTodoComplete(todo.id, !todo.is_completed)}>
                        <IoCheckmarkCircleOutline 
                          className="hover:text-green-600 inline text-2xl text-green-800 mr-1" 
                          />
                      </button>
                      <button className="focus:outline-none" onClick={(e) => handleTodoDelete(todo.id)}>
                        <IoRemoveCircleOutline className="hover:text-red-600 inline text-2xl text-red-800 mr-1" />
                      </button>
                    </div>
                  </li>
                  {
                    error.message && error.todoId === todo.id &&
                    <div className="text-red-600 -mt-4 mb-4 ml-1">{error.message}</div>
                  }
                  </div>
                )
              })
            }
            </ul>
          )
          : (
            <>
              <div className="flex justify-center bg-red-100 text-red-900 hover:shadow-md p-3 mb-4 border shadow rounded-md">
                You haven't added any todo yet!
              </div>
              <img src={noTodoIllustration} alt="No Todos"/>
            </>
          )
        }
      </div>
    )
}

export default TodoList
