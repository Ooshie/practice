import React, { useState } from "react";


const App = () => {
    const [list, setList] = useState(["egg", "bread", "rice"]);
    const [input, setInput] = useState("");
    const handleInput = (event) => {
        setInput(event.target.value);
    };
    const addInput = () => {
        setList([...list, input]);
        setInput("");
    };
    
    return (
        <div>
            <h1>Grocery List</h1>
            <input type = "text" placeholder = "Add an item to the list" value={input} onChange={handleInput}/>
            <button onClick = {addInput}>Add</button>
            <div>
                {list.map((item) => {
                        return(<h2>{item}</h2>);
                    })}
            </div>
        </div>
    );
};

export default App;