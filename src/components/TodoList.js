import React from 'react'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'
import { IoRemoveCircleOutline } from 'react-icons/io5'
import noTodoIllustration from '../assets/images/no-todo.png'

const TodoList = (props) => {

  return (
      <div id="todos" className="my-8 mx-auto sm:max-w-md max-w-xs">
        {
          props.todos.length > 0 ?  ( 
            <ul className="w-full">
            {
              props.todos.map(todo => {
                return (
                  <li key={todo.id} 
                    className={`flex justify-between hover:shadow-md p-3 mb-4 border shadow ${todo.is_completed && "bg-green-50"} rounded-md`}>
                    {todo.task}
                    <div className="flex items-center">
                      <button className="focus:outline-none" onClick={(e) => props.onComplete(todo.id, !todo.is_completed)}>
                        <IoCheckmarkCircleOutline 
                          className="hover:text-green-600 inline text-2xl text-green-800 mr-1" 
                          />
                      </button>
                      <button className="focus:outline-none" onClick={(e) => props.onDelete(todo.id)}>
                        <IoRemoveCircleOutline className="hover:text-red-600 inline text-2xl text-red-800 mr-1" />
                      </button>
                    </div>
                  </li>
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
