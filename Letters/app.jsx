import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function() {

    class Letters extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                currentText: this.props.text.substr(0, 1),
                counter: 2
            };
        }

        componentDidMount() {
            this.intervalId = setInterval(() => {
                this.setState({
                    counter: this.state.counter + 1,
                    currentText: this.props.text.substr(0, this.state.counter)
                });
            }, 300);
        }

        render() {
            return <h1>
                {this.state.currentText}
            </h1>;
        }

        componentWillUnmount() {
            clearInterval(this.intervalId);
        }
    }

    class App extends React.Component {
        render() {
            return <Letters text='This is such a fun!'/>;
        }
    }

ReactDOM.render(
    <App/>, document.getElementById('app'));

});
