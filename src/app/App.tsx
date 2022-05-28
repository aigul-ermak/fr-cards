import React from 'react';
import {AllRoutes} from '../components/allRoutes/AllRoutes';
import {Header} from '../components/header/Header';

// @ts-ignore
import s from './App.module.css'

function App() {
    return (
        <div className={s.App}>
            <Header/>
            <AllRoutes/>
        </div>
    );
}

export default App;
