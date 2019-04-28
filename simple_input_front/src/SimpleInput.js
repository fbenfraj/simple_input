import React from "react";

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
        alert(this.state.value)
    }

    render() {
        return(
        <form onSubmit={this.handleSubmit}>
            <input value={this.state.value} onChange={this.handleChange}/>
            <button>OK</button>
        </form>
        );
    }
}