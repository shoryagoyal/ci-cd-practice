import React, { useState } from "react";

import ToDoList from "./ToDoList";
import AddToDo from "./AddToDo";

const Body = () => {
    const [toDos, setToDos] = useState([]);

    function addToDo(data) {
        setToDos((oldArray) => [...oldArray, data]);
    }
    function deleteToDo(indexOfToDoToDelete) {
        setToDos((oldArray) => {
            return oldArray.filter((val, i) => i != indexOfToDoToDelete);
        });
    }
    console.log(toDos);
    return (
        <div>
            <AddToDo addToDoFun={addToDo} />
            <ToDoList toDosList={toDos} deleteToDoFun={deleteToDo} />
        </div>
    );
};

export default Body;
