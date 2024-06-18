import React, { useState } from 'react'

function Five() {

    const [input, setInput] = useState("")
    const [todos, settodos] = useState([])

    const addtodo = () => {
        if (input.trim() !== '') {
            settodos([...todos, input]);
            setInput('');
        }
    }
    const removeTodo = (index) => {
        const updatetodo = todos.filter((_, i) => i !== index)
        settodos(updatetodo)
    }
    return (
        <div className='flex justify-center align-middle m-10'>
            <input
                type='text' onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={addtodo}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo} <button onClick={() => removeTodo(index)}>Remove</button>

                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Five
