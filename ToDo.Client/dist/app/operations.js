import React, { useState } from "react";
export const Add = (props) => {
    const [toDoTitle, setToDoTitle] = useState("");
    const [toDoDescr, setToDoDescr] = useState("");
    let HandleOnClick = () => {
        props.onAddClick(toDoTitle, toDoDescr);
    };
    //HandleOnClick = HandleOnClick.bind(this);
    return (React.createElement(React.Fragment, null,
        React.createElement("label", null, "Title"),
        React.createElement("input", { type: "text", name: "item", className: "title", id: "title", value: toDoTitle, onChange: (event) => { setToDoTitle(event.target.value); } }),
        React.createElement("label", null, "Description"),
        React.createElement("input", { type: "text", name: "item", className: "description", id: "descr", value: toDoDescr, onChange: (event) => { setToDoDescr(event.target.value); } }),
        React.createElement("div", null, "New Element"),
        React.createElement("button", { onClick: HandleOnClick }, "Add")));
};
