import React, { useState, useEffect } from "react";
import DemoService from "./Services/DemoService";
import { ToDoItem } from "./Model/ToDoItem";

interface IEditProps {
    onEditClick: (title: string, descr: string, itemid: number) => void;
    itemid: number;
}

export const Edit: React.FunctionComponent<IEditProps> = (props) => {
    const [toDoTitle, setToDoTitle] = useState("");
    const [toDoDescr, setToDoDescr] = useState("");


    let HandleOnClick = () => {
        props.onEditClick(toDoTitle, toDoDescr, props.itemid);
    }

    return (
        <>
            <td>
                <label>Title</label>
                <input type="text" name="item" className="title" id="titleE" value={toDoTitle} onChange={(event) => { setToDoTitle(event.target.value); }} />
            </td>
            <td>
                <label>Description</label>
                <input type="text" name="item" className="description" id="descrE" value={toDoDescr} onChange={(event) => { setToDoDescr(event.target.value); }} />
            </td>
            <button onClick={HandleOnClick}>Edit</button>
        </>
    );
}