import React, { useState, useEffect } from "react";
import DemoService from "./Services/DemoService";
import { ToDoItem } from "./Model/ToDoItem";

interface IDeleteProps {
    onDeleteClick: (itemid:number) => void;
}

export const Remove: React.FunctionComponent<IDeleteProps> = (props) => {
    const [toDoID, setToDoID] = useState(0);

    let HandleOnClick = () => {
        props.onDeleteClick(toDoID);
    }
    
    return (
        <>
            <button onClick={HandleOnClick}>Remove</button>
        </>
    );
}