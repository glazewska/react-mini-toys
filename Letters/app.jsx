import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function() {

    class TextTyper extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                currText: this.props.text.substr(0, 1),
                counter: 2
            };
        }

        componentDidMount() {
            this.intervalId = setInterval(() => {
                this.setState({
                    counter: this.state.counter + 1,
                    currText: this.props.text.substr(0, this.state.counter)
                });

            }, 400);
        }

        render() {
            return <h1>
                {this.state.currText}
            </h1>;
        }

        componentWillUnmount() {
            clearInterval(this.intervalId);
        }
    }

    class App extends React.Component {
        render() {
            return <TextTyper text="This is fun!"/>;
        }
    }

    ReactDOM.render(
        <App/>, document.getElementById('app'));
});
