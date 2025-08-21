import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';
import SOSButton from './components/SOSButton';
import MapScreen from './components/MapScreen';
import Chatbot from './components/Chatbot';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <SOSButton />
                <MapScreen />
                <Chatbot />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/about" component={AboutPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;