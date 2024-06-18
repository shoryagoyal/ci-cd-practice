import React from "react";

import ToDo from "./ToDo";

const ToDoList = (props) => {
    return (
        <div>
            {props.toDosList.map((val, index) => (
                <ToDo
                    val={val}
                    index={index}
                    key={index}
                    deleteToDoFun={props.deleteToDoFun}
                />
            ))}
        </div>
    );
};

export default ToDoList;
