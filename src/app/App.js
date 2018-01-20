import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar'
import Heroes from './components/Heroes'
import CountryStats from './components/CountryStats'


const App = () => {
    return (
        <div id="appWrapper">
            <Navbar
            />
            <CountryStats />
        </div>

    )
};

ReactDOM.render(<App />, document.getElementById('app'));