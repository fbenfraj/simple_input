import React from "react";
import axios from "axios";

export class SimpleInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event) {
        // alert(this.state.value);
        console.log("handleSubmit call");
        axios.post("http://localhost:8080/input", { value: this.state.value }).then(res => {
            console.log("New input sent!")
        });
    }

    render() {
        return(
        <div>
            <input value={this.state.value} onChange={this.handleChange}/>
            <button onClick={this.handleSubmit}>OK</button>
        </div>
        );
    }
}