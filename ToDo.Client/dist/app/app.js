import React, { useState } from "react";
import { Operations } from "./operations";
export const App = (props) => {
    const [myData, setMyData] = useState({ ItemId: 1, UserId: "1", Title: "", Description: "" });
    return (React.createElement(React.Fragment, null,
        React.createElement(Operations, null)));
};
