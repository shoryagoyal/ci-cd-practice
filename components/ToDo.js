import React, { useCallback, useState } from "react";

const ToDo = (props) => {
    const { index, val } = props;
    const [newTitle, setNewTitle] = useState("");
    const [editFormVisibility, setEditFormVisibility] = useState(false);
    return (
        <div className="border mb-2 flex justify-between w-[70%] ml-[15%] p-2">
            <div className="flex">
                <div className="mr-2">{val}</div>
                <div>
                    {editFormVisibility ? (
                        <>
                            <input
                                type="text"
                                placeholder="new Value"
                                className="border"
                                value={newTitle}
                                onChange={(e) => {
                                    setNewTitle(e.target.value);
                                }}
                            ></input>
                            <button onClick={() => {}}>Update</button>
                        </>
                    ) : (
                        ""
                    )}
                </div>
            </div>
            <div className="flex">
                <button
                    className="border rounded mr-2"
                    onClick={() => {
                        setEditFormVisibility(!editFormVisibility);
                    }}
                >
                    Edit
                </button>
                <button
                    className="border rounded"
                    onClick={() => {
                        props.deleteToDoFun(index);
                    }}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ToDo;
