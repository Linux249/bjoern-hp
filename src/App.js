import React, { Component } from 'react';
import AppStyle from './style/App'
import Header from './style/Header'
import Body from './style/Body'

class App extends Component {
    render() {
        return (
            <AppStyle className="App">
                <Header className="App-header">
                    <div>Title</div>
                    <div>Menü</div>
                </Header>
                <Body>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                </Body>
            </AppStyle>
        );
    }
}

export default App;
