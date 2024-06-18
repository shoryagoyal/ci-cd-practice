import React, { useState } from "react";

const AddToDo = (props) => {
    const [toDoTitle, setToDoTitle] = useState("");
    return (
        <div>
            <input
                type="text"
                value={toDoTitle}
                onChange={(e) => {
                    setToDoTitle(e.target.value);
                }}
                className="border"
            ></input>
            <button
                onClick={() => {
                    props.addToDoFun(toDoTitle);
                }}
                className="border"
            >
                Add ToDo
            </button>
        </div>
    );
};

export default AddToDo;
