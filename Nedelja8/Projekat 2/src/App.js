import React, { useState } from 'react';
import './App.css';
import InputForm from './components/input-form';
import InputList from './components/input-list';
import {data} from '../src/data';


const App = (props) => {
  const [state, setState] = useState([]);
  const addItem = (text) => {
    let tmp = [...state];
    console.log(tmp);
    tmp.push({ state: text });
    setState(tmp);
    console.log(tmp);
    setState('');
  }


  return (
    <div className="App">
      <InputForm addItem={addItem}></InputForm>
      <InputList inputs={data}></InputList>
    </div>
  );

}

export default App;
