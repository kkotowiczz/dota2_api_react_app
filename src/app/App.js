import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar'
import Heroes from './components/Heroes'


const App = () => {
    return (
        <div id="appWrapper">
            <Navbar
            />
            <Heroes
            />
        </div>

    )
};

ReactDOM.render(<App />, document.getElementById('app'));