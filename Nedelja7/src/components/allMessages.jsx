import React, { Component } from 'react';
import Message from './message';

class AllMessages extends Component {
    constructor() {
        super();
        this.state = { messages: [] };
        this.getAllMessages();
    }

    getAllMessages() {
        fetch('https://coetus.herokuapp.com/api/message')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({ messages: json});
            }
        )

    }

    render() {
        return (
            <div>
                {
                    JSON.stringify(this.state.messages.data)
                }
            </div>
        )
    }
}

export default AllMessages;