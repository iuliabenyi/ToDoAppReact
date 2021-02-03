import React, { useState } from "react";
export const Edit = (props) => {
    const [toDoTitle, setToDoTitle] = useState("");
    const [toDoDescr, setToDoDescr] = useState("");
    let HandleOnClick = () => {
        props.onEditClick(toDoTitle, toDoDescr, props.itemid);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("td", null,
            React.createElement("label", null, "Title"),
            React.createElement("input", { type: "text", name: "item", className: "title", id: "titleE", value: toDoTitle, onChange: (event) => { setToDoTitle(event.target.value); } })),
        React.createElement("td", null,
            React.createElement("label", null, "Description"),
            React.createElement("input", { type: "text", name: "item", className: "description", id: "descrE", value: toDoDescr, onChange: (event) => { setToDoDescr(event.target.value); } })),
        React.createElement("button", { onClick: HandleOnClick }, "Edit")));
};
