import React, { useState } from 'react';

function ColorPicker() {
    const [selectedColor, setSelectedColor] = useState('#000000');

    const handleChange = (e) => {
        setSelectedColor(e.target.value);
    };

    return (
        <div className='m-10 align-middle'>
            <input
                type='color'
                onChange={handleChange}
            />
            <div style={{ width: '200px', height: '100px', backgroundColor: selectedColor }}>
            </div>
        </div>
    );
}

export default ColorPicker;
