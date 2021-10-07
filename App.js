import './App.css';
import React, { useState } from 'react';
import Todo from './components/todo';

function App() {
    return (
        <div className="App">
            <p className="title">Enter your todo's of the day here:</p>
            <div className="container" >
                <Todo />
            </div>
        </div>
    );
}

export default App;