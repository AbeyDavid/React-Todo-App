import React, { Component } from "react";

export default class messageApp extends Component {
    state = {message:''};
    display = (e) => {
      this.setState({message:e.target.value})  
    };
    render() {
        return (
            <div>
                <input onChange={this.display}></input>
                <h1>Hello {this.state.message}</h1>
            </div>
        );
    }
}
