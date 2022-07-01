import React from 'react';
import axios from 'axios';
import './App.css';
import Api from './Components/Api';
import FetchA from './Components/FetchA';
import FetchB from './Components/FetchB';
import FetchC from './Components/FetchC';

function App() {
  return (
    <>
    
    <Api />
    <hr />
    <FetchA />
    <hr />
    <FetchB />
    <hr />
    <FetchC />
    
    </>
    
  );
}

export default App;
