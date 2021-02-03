const testData = [
    { ItemId: '1', UserId: '1', Title: 'title1', Description: 'descr1' },
    { ItemId: '2', UserId: '1', Title: 'title2', Description: 'descr2' },
    { ItemId: '3', UserId: '1', Title: 'title3', Description: 'descr3' },
    { ItemId: '4', UserId: '1', Title: 'title4', Description: 'descr4' },
];
const ItemsList = (props) => (React.createElement("div", null, testData.map(item => React.createElement(ToDoItem, Object.assign({}, item)))));
class ToDoItem extends React.Component {
    render() {
        const item = this.props;
        return (React.createElement("div", { className: "to-do-items" },
            React.createElement("table", { class: "table" },
                React.createElement("tr", null,
                    React.createElement("td", null, item.Title),
                    React.createElement("td", null, item.Description),
                    React.createElement("td", null,
                        React.createElement("input", { class: 'myclass', type: 'button', value: 'Remove' })),
                    React.createElement("td", null,
                        React.createElement("input", { class: 'myclass', type: 'button', value: 'Edit' }))))));
    }
}
class App extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement("div", { className: "header" }, this.props.Title),
            React.createElement("div", null, "New Element"),
            React.createElement("label", null, "Title"),
            React.createElement("input", { type: "text", name: "item", className: "title" }),
            React.createElement("label", null, "Description"),
            React.createElement("input", { type: "text", name: "item", className: "description" }),
            React.createElement("button", { className: "btn-add-item" }, "Add"),
            React.createElement(ItemsList, null)));
    }
}
ReactDOM.render(React.createElement(App, { title: "To Do List" }), document.getElementById('operations'));
