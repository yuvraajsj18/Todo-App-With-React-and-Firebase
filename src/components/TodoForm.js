import React, { useRef } from 'react'

const TodoForm = () => {
    const text = useRef();

    const handleTodoSubmit = (e) => {
        e.preventDefault();

        
    };

    return (
        <div id="todo-form" className="mt-6 mx-auto sm:max-w-md max-w-max">
          <form onSubmit={handleTodoSubmit}>
            <div className="w-full mb-3 flex">
              <label htmlFor="id_text" className="py-2 px-3 rounded-l inline-block bg-gray-200">Task: </label>
              <input
                ref={text} 
                type="text" 
                className="border w-full py-2 px-3 focus:outline-none rounded-r focus:border-gray-600 border-gray-300" />
            </div>
      
            <button className="w-full rounded-md py-1 bg-black text-white hover:bg-gray-800">Add</button>
          </form>
        </div>
    )
}

export default TodoForm