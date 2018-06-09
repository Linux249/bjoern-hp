import React, { Component } from 'react';
import AppStyle from './style/App'
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './style/Body'
import { HashRouter, Route } from 'react-router-dom'
import Home from './pages/Home'
import Bilder from './pages/Bilder'
import Ausstellungen from './pages/Ausstellungen'
import Bjoern from './pages/Bjoern'
import Kontakt from './pages/Kontakt'

class App extends Component {
    render() {
        return (
            <HashRouter>
                <AppStyle>
                    <Header />

                    <Body>
                        <Route exact path='/' component={Home}/>
                        <Route  path='/bilder' component={Bilder}/>
                        <Route  path='/ausstellungen' component={Ausstellungen}/>
                        <Route  path='/björn' component={Bjoern}/>
                        <Route  path='/kontakt' component={Kontakt}/>
                    </Body>

                    <Footer />
                </AppStyle>
            </HashRouter>
        );
    }
}

export default App;
