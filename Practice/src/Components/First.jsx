import React, { useState } from 'react'

function First() {
    const [istoggle, setIstoogle] = useState(false)
    const handleSubmit = () => {
        setIstoogle(!istoggle)
    }
    const items = ["item1", "item2", "item3", "item4", "items5"]
    return (
        <>
            <div>
                <ul>
                    {items.map((items, index) => {
                        return <li key={index}>
                            {items}
                        </li>
                    })}
                </ul>

            </div>
            <div >
                <label>
                    <input
                        type='checkbox'
                        onChange={handleSubmit}
                    />
                    <p> {istoggle ? "on" : "off"}</p>
                </label>
            </div>

        </>
    )
}

export default First
