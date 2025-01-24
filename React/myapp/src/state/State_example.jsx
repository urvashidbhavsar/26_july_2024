import React from "react";

class State_example extends React.Component {
    constructor() {
        super();
        this.state = {
            word: "Hello world"
        }
    }
    // create a method for call value
    handleEvent = () => {
        this.setState({ word: "Welcome" })
    }

    render() {
        return (
            <>
                <button onClick={this.handleEvent}>Click</button>
                <p>{this.state.word}</p>
            </>
        )
    }
}

export default State_example;