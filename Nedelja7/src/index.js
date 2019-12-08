import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import InputForm from './components/inputForm';
import '../src/style.css';
import AllMessages from './components/allMessages';

const App = () => {
  const [text, setIndex] = useState('');
  const addItem = ()=>{
    console.log('helo');
    setIndex(text);
  }


  return (
    <div>
      <InputForm addItem={addItem} />
      <AllMessages />
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'));