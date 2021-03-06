import React, { useState, useRef } from 'react'

const TodoForm = (props) => {
    const task = useRef();
    const [error, setError] = useState("");

    const handleTodoSubmit = (e) => {
        e.preventDefault();

        setError("");
        if (task.current.value.length < 0) {
          setError("Please enter a task!");
          return;
        }

        props.onAdd(task.current.value);
    };

    return (
        <div id="todo-form" className="mt-6 mx-auto sm:max-w-md max-w-max">
          <form onSubmit={handleTodoSubmit}>
            <div className="w-full mb-3 flex">
              <label htmlFor="id_task" className="py-2 px-3 rounded-l inline-block bg-gray-200">Task: </label>
              <input
                ref={task} 
                type="text"
                id="id_task" 
                className="border w-full py-2 px-3 focus:outline-none rounded-r focus:border-gray-600 border-gray-300" />
            </div>

            <button className="w-full rounded-md py-1 bg-black text-white hover:bg-gray-800">Add</button>
            {
              error &&
              <div className="text-red-600">{error}</div>
            }
          </form>
        </div>
    )
}

export default TodoForm
