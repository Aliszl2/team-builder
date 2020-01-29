import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./components/Form"
function App() {

  const [memberToEdit, setMemberToEdit]=useState({})
  
  function handleEdit(event) {
    event.preventDefault();
    // e.persist();
    console.log(`edit was clicked:${event}`);
        };

  return (
    <div className="App">
      <Form memberToEdit={memberToEdit} handleEdit={handleEdit}/>
    </div>
  );
}

export default App;
