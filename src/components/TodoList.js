import React from 'react'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'
import { IoRemoveCircleOutline } from 'react-icons/io5'

const TodoList = () => {
    return (
        <div id="todos" className="my-8 mx-auto sm:max-w-md max-w-xs">
          <ul className="w-full">
            <li className="flex justify-between hover:shadow-md p-3 mb-4 border shadow rounded-md">
              Task 1
              <div className="flex items-center">
                <button>
                  <IoCheckmarkCircleOutline className="inline text-2xl text-green-800 mr-1" />
                </button>
                <button>
                  <IoRemoveCircleOutline className="inline text-2xl text-red-800 mr-1" />
                </button>
              </div>
            </li>
          </ul>
        </div>
    )
}

export default TodoList
