import React, { useState, useEffect } from "react";
import DemoService from "./Services/DemoService";
import { ToDoItem } from "./Model/ToDoItem";
import { Add } from "./add";
import { Remove } from "./remove";
import { Edit } from "./edit";

interface IAddProps {
    onAddClick: (title: string, descr: string) => void;
}

export const Add: React.FunctionComponent<IAddProps> = (props) => {
    const [toDoTitle, setToDoTitle] = useState("");
    const [toDoDescr, setToDoDescr] = useState("");

    let HandleOnClick = () => {
        props.onAddClick(toDoTitle, toDoDescr);
    }

    //HandleOnClick = HandleOnClick.bind(this);


    return (

        <>
            <label>Title</label>
            <input type="text" name="item" className="title" id="title" value={toDoTitle} onChange={(event) => { setToDoTitle(event.target.value); }} />
            <label>Description</label>
            <input type="text" name="item" className="description" id="descr" value={toDoDescr} onChange={(event) => { setToDoDescr(event.target.value); }} />

            <div>New Element</div>
            <button onClick={HandleOnClick}>Add</button>
        </>
    );
}