import React, { useState } from 'react'
import './App.css'
import ClockApp from './components/ClockApp';
import PassGen from './components/PassGen';


const App = () => {

    return (
        <>
        <PassGen />
        <ClockApp />
        </>
    )
}

export default App
