import './App.css';
import Header from './header.js'
import MainPage from "./MainPage.js";
import Eyes from './Eyes.js'
import Meditation from './Meditation.js'
import Warmup from './Warmup.js'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useState, useEffect } from 'react';

const auth = getAuth();




function App() {
    const [userDisplayName, setUserDisplayName] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is logged in
                // console.log('User is logged in:', user);
                setUserDisplayName(user.displayName);
            } else {
                // User is not logged in
                // console.log('User is not logged in');
                setUserDisplayName(null);

            }
        });

        return () => {

            unsubscribe();
        };
    }, []);

    return (
        <div className="App">
            <Header userDisplayName={userDisplayName} />
            <MainPage id="mainPage" />
            <Meditation id="meditation" />
            <Eyes id="eyes" />
            <Warmup id="warmup" />

        </div>
    );
}

export default App;
