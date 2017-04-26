import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function() {
    function clock() {

    const time = new Date().toLocaleTimeString();

        ReactDOM.render(
            <div>
            <span></span>
            <h1>{time}</h1>
        </div>, document.getElementById('app'));
    }

    setInterval(clock, 1000);
    clock();
});
