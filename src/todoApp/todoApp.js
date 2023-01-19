import React, { Component } from "react";
import "./todoApp.css";

export default class todoApp extends Component {
    state = { todolist: [], string: "" };
    savetodo = (e) => {
        this.setState({ string: e.target.value });
    };
    todoarray = () => {
        this.setState({
            todolist: [...this.state.todolist, { data: this.state.string, isdone: false }],
            string: "",
        });
    };
    completed = (index) => {
        let newData = [...this.state.todolist];
        newData[index].isdone = !newData[index].isdone;
        this.setState({
            todolist: newData,
        });
    };
    deleteItem = (index) => {
        const newList = [...this.state.todolist];
        newList.splice(index, 1);
        this.setState({
            todolist: newList,
        });
    };
    render() {
        return (
            <div className="main">
                <div class="ui right labeled left icon input">
                    <input onChange={this.savetodo} type="text" placeholder="Enter Todo" value={this.state.string}></input>
                    <button onClick={this.todoarray} disabled={this.state.string.length === 0} style={{ marginLeft: 25 }}>
                        Save Todo
                    </button>
                </div>
                <ol className="list">
                    {this.state.todolist.map((row, index) => (
                        <li>
                            <div className="listItem">
                                <div>
                                    {!row.isdone ? row.data : <del>{row.data}</del>}
                                </div>
                                <div>
                                    {row.isdone ? (
                                        <a>
                                            <i onClick={() => this.deleteItem(index)} class="window close icon"></i>
                                        </a>
                                    ) : null}

                                    <a onClick={() => this.completed(index)} style={{ marginLeft: 25 }}>
                                        {!row.isdone?<i class="thumbs up icon"></i>:<i class="check circle icon"></i>}
                                    </a>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        );
    }
}
