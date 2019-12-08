import React, { useState, preventDefault } from 'react';

const InputForm = (props) => {
    const [newItem, setNewItem] = useState('');
    const [newUsername, setUsername] = useState('');

    const handleInput = e => {
        setNewItem(e.target.value);
        e.preventDefault();
    }

    const handleUsername = e => {
        setUsername(e.target.value);
        e.preventDefault();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addItem(newItem)
        setNewItem('');
    }

    // const setUserInput = e => {
    //     e.preventDefault();
    //     props.addUser(newUsername);
    //     setUsername('');
    // }

    return (
        <div>
            <h1>Coetus Chat Room</h1>
            <form >
                <label>Add Username:</label>
                <input type="text" name="username"
                    id="usernam"
                    onInput={handleUsername}
                    value={newUsername} placeholder ='username'
                />
                <button>Add</button>
            </form>
            <form onSubmit = {handleSubmit}>

                <label>Add message:</label>
                <input type="text" name="item"
                    id="item"
                    onInput={handleInput}
                    value={newItem} placeholder='message'
                />
                <button>Add</button>
            </form>
            <button>My Messages</button>
        </div>
    );
}

export default InputForm;