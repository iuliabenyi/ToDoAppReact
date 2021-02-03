import React, { useState, useEffect } from "react";
import { Operations } from "./operations";

export const App: React.FunctionComponent<{}> = (props) => {

    const [myData, setMyData] = useState({ ItemId: 1, UserId: "1", Title: "", Description: ""});

    return (
        <>
            <Operations />
          </>
    );
}


