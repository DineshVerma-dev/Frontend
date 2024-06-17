import React, { useState } from 'react';

function Four() {
    const [input, setInput] = useState("");
    const [update, setUpdate] = useState(null);

    const handleUpdate = () => {
        setUpdate(input);
    };

    return (
        <div>
            <h1>ToDo functionality</h1>
            <input
                type='text'
                onChange={(e) => setInput(e.target.value)}
            />
            <div>
                Current Input: {input}
            </div>
            <ul>
                <li>
                    <button onClick={handleUpdate}>Click to Update</button>
                </li>
            </ul>
            <div>
                {update !== null ? (
                    <div>
                        Updated Value: {update}
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

export default Four;

