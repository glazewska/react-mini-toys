import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function() {
    const numberA = parseInt(prompt('Insert a number'));
    const operation = prompt('Insert operation');
    const numberB = parseInt(prompt('Insert a number'));

    function calculate(numberA, numberB, operation) {
        switch (operation) {
            case '+':
                return <h1>{numberA + numberB}</h1>;
                break;
            case '-':
                return <h2>{numberA - numberB}</h2>;
                break;
            case '*':
                return <h1>{numberA * numberB}</h1>;
                break;
            case '/':
                return <h2>{numberA / numberB}</h2>;
                break;
            default:
                return <h3>Something went wrong</h3>
        }
    }

    ReactDOM.render(calculate(numberA, numberB, operation),
        document.getElementById('app'));

});
