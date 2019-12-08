import React from "react";

const Message = (props) => {
    const message = props.message;
    return (<li>{message.messages_data}</li>)
}

export default Message;