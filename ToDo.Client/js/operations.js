const testData = [
    { ItemId: '1', UserId: '1', Title: 'title1', Description: 'descr1' },
    { ItemId: '2', UserId: '1', Title: 'title2', Description: 'descr2' },
    { ItemId: '3', UserId: '1', Title: 'title3', Description: 'descr3' },
    { ItemId: '4', UserId: '1', Title: 'title4', Description: 'descr4' },
];

const ItemsList = (props) => (
    <div>
        {testData.map(item => <ToDoItem {...item} />)}
    </div>
);

class ToDoItem extends React.Component {
    render() {
        const item = this.props;
        return (
            <div className="to-do-items">
                <table class="table">
                    <tr>
                        <td>{item.Title}</td>
                        <td>{item.Description}</td>
                        <td><input class='myclass' type='button' value='Remove' /></td>
                        <td><input class='myclass' type='button' value='Edit' /></td>
                    </tr>
                </table>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="header">{this.props.Title}</div>
                <div>New Element</div>
                <label>Title</label>
                <input type="text" name="item" className="title" />
                <label>Description</label>
                <input type="text" name="item" className="description" />
                <button className="btn-add-item">Add</button> 
                <ItemsList />
            </div>
        );
    }
}

ReactDOM.render(
    <App title="To Do List" />,
    document.getElementById('operations'),
);