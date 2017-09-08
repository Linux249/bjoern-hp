import React, { Component } from 'react';
import AppStyle from './style/App'
import Header from './components/Header'
import Body from './style/Body'
import { HashRouter } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <HashRouter>
                <AppStyle>
                    <Header />

                    <Body>
                        <p className="App-intro">

                        </p>
                    </Body>
                </AppStyle>
            </HashRouter>
        );
    }
}

export default App;
