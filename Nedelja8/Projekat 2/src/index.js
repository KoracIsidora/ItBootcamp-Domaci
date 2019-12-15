import React, { useState, useEffect, preventDefault } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const people = [
    "First Person +123 456789789",
    "Second Person +456 896123456",
    "Third Person +475 479878978",
    "John Doe +465 456461234",
    "Jane Doe +565 655456789"
];


function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [searchPhone, setSearchPhone] = useState('');
    const [searchPhoneResults, setPhoneResults] = useState([]);
    const [errorMess, setErrorMess] = useState('');
    const [phoneNum, setPhoneNum] = useState('');

    const handleChange = event => {
        setSearchTerm(event.target.value);
        console.log(searchTerm);
    };

    const handlePhone = (e) => {
        setSearchPhone(e.target.value);
        console.log(searchPhone);
    };

    useEffect(() => {
        const results = people.filter(person =>
            person.includes(searchTerm)
        );
        setSearchResults(results);
    }, [searchTerm]);

    useEffect(() => {
        const res = people.filter(item =>
            item.includes(searchPhone));
        setPhoneResults(res);
    }, [searchPhone]);

    const handleClick = (e) => {
        e.preventDefault();
        let text = searchTerm.trim();
        let num = searchPhone.trim();

        if (text == '' && num == '') {
            setErrorMess('*Please fill required fields!')
            return;
        } else if (text != '' && num == '') {
            setErrorMess('*Please insert your phone!')
            return;
        } else if (num.charAt(0) != '+' || num.length <= 12) {
            setPhoneNum('Please enter number as following: +xxx xxxxxxxxx');
            setErrorMess('');
            return;
        }

        let x = false;

        for (let i = 0; i < people.length; i++) {
            if (people[i].includes(searchTerm)) {
                if(window.confirm(`Are you sure you want to change ${searchTerm}'s phone?`)){
                    people[i] = searchTerm + ' ' + searchPhone;
                    x = true;
                    console.log(people)
                    break;
                }
                
            }
        }

        if (x == false) {
            people.push(searchTerm, searchPhone);
        }

        setSearchTerm('');
        setSearchPhone('');
        setErrorMess('');
        setPhoneNum('');
        return;
    }

    return (
        <div className="App">
            <h1>Register</h1>
            <form>
                <label>Add name: </label>
                <input
                    type="text"
                    placeholder="Name and Surname"
                    value={searchTerm}
                    onChange={handleChange}
                />
                <p>*this field is required</p>
                <label>Add phone: </label>
                <input
                    type="text"
                    placeholder="ex. +xxx xxxxxxxxx"
                    value={searchPhone}
                    onChange={handlePhone}
                />
                <p>*this field is required</p>
                <button onClick={handleClick}>Add</button>
            </form>
            <strong>{errorMess}</strong>
            <br />
            <strong>{phoneNum}</strong>
            <ul>
                {searchResults.map(item => (
                    <li key={Math.random()}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

