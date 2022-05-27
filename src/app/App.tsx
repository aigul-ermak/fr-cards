import React from 'react';
import './App.css';
import {AllRoutes} from '../components/allRoutes/AllRoutes';
import {Header} from '../components/header/Header';

function App() {
    return (
        <div className="App">
            <Header/>
            <AllRoutes/>
        </div>
    );
}

export default App;
