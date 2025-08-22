import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import SafeZonePage from './pages/SafeZonePage';
import ProfilePage from './pages/ProfilePage';
import Navbar from './components/Navbar';
import SOSButton from './components/SOSButton';
import MapScreen from './components/MapScreen';
import Chatbot from './components/Chatbot';
import DiscreetMode from './components/DiscreetMode';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <SOSButton />
                <MapScreen />
                <Chatbot />
                <DiscreetMode />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/safe-zone" component={SafeZonePage} />
                    <Route path="/profile" component={ProfilePage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;