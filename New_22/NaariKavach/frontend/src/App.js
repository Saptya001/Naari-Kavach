import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import SafeZone from './pages/SafeZone';
import Navbar from './components/Navbar';
import './styles/styles.css';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/safezone" component={SafeZone} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;