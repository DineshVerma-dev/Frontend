import React, { useState } from 'react';

function Six() {
    const [change, setChange] = useState("red");

    const bgChanger = (color) => {
        setChange(color);
        document.body.style.backgroundColor = color;
    };

    return (
        <div  className='flex justify-center align-middle m-10'>
            <div>
                <button onClick={() => bgChanger("red")}>Red</button>
            </div>
            <div>
                <button onClick={() => bgChanger("blue")}>Blue</button>
            </div>
            <div>
                <button onClick={() => bgChanger("green")}>Green</button>
            </div>
        </div>
    );
}

export default Six;
