import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Router>
    );
};

export default App;