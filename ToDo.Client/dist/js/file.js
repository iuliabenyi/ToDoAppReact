import React, { useState } from "react";
export const App = (props) => {
    const [myData, setMyData] = useState({ ItemId: 1, UserId: "1", Title = "aaaa", Description = "" });
    return (React.createElement("div", null,
        "The data: ",
        myData.Description,
        " "));
};
