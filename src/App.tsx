import React from 'react';
import './App.css';
import AppShellMantine from "./Components/AppShell/AppShellMantine";
import {
    NavigationProgress,

} from '@mantine/nprogress';
import {Button} from '@mantine/core';

function App() {
    return (
        <>
            < NavigationProgress/>
            <AppShellMantine/>
        </>
    );
}

export default App;
