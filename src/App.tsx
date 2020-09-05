import React from 'react';
import Autocomplete from "./components/Autocomplete/Autocomplete";

import './App.css';

function App() {
  return (
    <div className="App">
        <h1>States Autocomplete</h1>
        <p>Try typing in a state!</p>
        <Autocomplete/>
    </div>
  );
}

export default App;
