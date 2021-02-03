import React from "react";
export const App = (props) => {
    return (React.createElement("div", { className: "to-do-items" },
        React.createElement("table", null,
            React.createElement("tr", null,
                React.createElement("td", null, "aaaa"),
                React.createElement("td", null, "bbbb"),
                React.createElement("td", null,
                    React.createElement("input", { type: 'button', value: 'Remove' })),
                React.createElement("td", null,
                    React.createElement("input", { type: 'button', value: 'Edit' }))))));
};
