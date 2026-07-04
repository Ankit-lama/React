import react, { useState } from 'react';
import './index.css';
function ColorPicker() {
    const [color, setColor] = useState('#ffffff');

    const handleColorChange = (event) => {
        setColor(event.target.value);
    }

    return (
        <div className="color-picker">
            <h1>Color Picker</h1>
            <div className="color-display" style={{ backgroundColor: color }}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select Color:</label>
            <input type='color' value={color} onChange={handleColorChange} />
        </div>
    );
}
export default ColorPicker;