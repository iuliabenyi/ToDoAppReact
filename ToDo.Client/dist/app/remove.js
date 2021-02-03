import React, { useState } from "react";
export const Remove = (props) => {
    const [toDoID, setToDoID] = useState(0);
    let HandleOnClick = () => {
        props.onDeleteClick(toDoID);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { onClick: HandleOnClick }, "Remove")));
};
