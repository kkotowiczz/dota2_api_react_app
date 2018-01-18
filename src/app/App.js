import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar'


const App = () => {
    return (
        <div>
            <Navbar
                id="nav"
                prop1='wiem'
            />
        </div>

    )
};

ReactDOM.render(<App />, document.getElementById('app'));