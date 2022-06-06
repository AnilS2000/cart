
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import "./styles.css";


<link rel="stylesheet" href="mystyle.css" />
function App() {
    var rs = 4000000000
    const [value, setValue] = useState(0);
    const subvalue = () => {
        if (value - 1 < 0)
        setValue(value - 1);
    }
    const addvalue = () => {
        setPrice(value + 1);
    }
    return (
        <>
            <div className="text">
                <h1>{rs - value* 70}</h1>
            </div>
            <div className="image">
                <div>
                    <div>
                        <img
                            src="https://m.media-amazon.com/images/I/61pj9OP0IQL._SX522_.jpg" />
                    </div>
                    <div class="text">
                        <h3>60rs</h3>
                        <button onClick={() => subvalue()}>-</button>
                        <input type="number" value={value} />
                        <button onClick={() => addvalue()}>+</button>
                    </div>
                </div>



            </div>
        </>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
