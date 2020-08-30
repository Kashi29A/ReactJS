import React, { Component } from 'react';

class Kashi extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name:  "Kashi"
        }
    }

    handler() {
       
    }

    render() {
        return (
            <div>
                <input onChange={() => this.handler} value={this.state.name} />

                <p>{this.state.name}</p>
            </div>

        )
    }
}

export default Kashi;

