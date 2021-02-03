import React, { useState, useEffect } from "react";

export const App: React.FunctionComponent<{}> = (props) => {

    const [myData, setMyData] = useState({ ItemId: 1, UserId: "1", Title = "aaaa", Description = "" });

    return (
        <div>The data: { myData.Description} </div>
    );
}
