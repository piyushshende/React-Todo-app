import React, { useState, useRef } from "react";
import PrintTodo from "./PrintTodo";
function Todo() {
    const [value, setValue] = useState();
    const [lot, setLot] = useState([]);
    const text = useRef(null);
    function handleInput() {
        setValue(text.current.value);
    }
    function handleSubmit(e) {
        console.log(value);
        if (value !== '') {
            setLot([...lot, value]);
        }
        e.preventDefault();
    }
    function deleteItem(e,data) {
        // lot.filter((index) => index !== e);
        // console.log(lot);
        const newList = lot.filter((item)=>item!==data);
        setLot(newList);
        console.log(newList);
        e.preventDefault();

    }
    return (
        <div className="todolist">
            <form onSubmit={handleSubmit}>
                <input type="text" ref={text} onChange={handleInput} />
                <button>Submit</button>
            </form>
            <PrintTodo todoList={lot} deleteItem={deleteItem} />
        </div>
    );
}
export default Todo;