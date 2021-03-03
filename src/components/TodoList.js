import React from 'react'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'
import { IoRemoveCircleOutline } from 'react-icons/io5'

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
                      <button className="focus:outline-none">
                        <IoCheckmarkCircleOutline 
                          className="hover:text-green-600 inline text-2xl text-green-800 mr-1" 
                          />
                      </button>
                      <button className="focus:outline-none">
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
            <div className="flex justify-center bg-red-100 text-red-900 hover:shadow-md p-3 mb-4 border shadow rounded-md">
              No Todos
            </div>
          )
        }
      </div>
    )
}

export default TodoList
