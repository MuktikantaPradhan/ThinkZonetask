import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [phoneno, setphoneno] = useState('');


  const handleChange = (e) => {
    setName(e.target.value);
  }
  const handlephonenoChange = (e) => {
    setphoneno(e.target.value);
  }

  const handleSubmit = (e) => {
    if (phoneno == "") {
      alert("phone no is incorrect")

    }
    else {
      alert('A form was submitted with Name:"' + name +
      '" , phoneno :"'+phoneno +'" ');
    }
    e.preventDefault();
  }


    return (

      <div className="App">
        <header className="App-header">
          <form onSubmit={(e) => { handleSubmit(e) }}>

            <label >
              Name:
            </label><br />
            <input type="text"  required onChange={(e) => { handleChange(e) }} /> <br />

            <label >
              PhoneNo:
            </label><br />
            <input type="text"  required onChange={(e) => {   handlephonenoChange (e) }} /><br />

            <input type="submit" value="Submit" />


          </form>
        </header>
      </div>

    );
  }
  export default App;
