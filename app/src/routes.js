import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// import App from './components/App';
// import HomePage from './components/home/HomePage';
import CatsPage from './components/cats/CatsPage';
import CatPage from './components/cats/CatPage';

function HomePage() {
    return (
        <div>
            <h2>HomePage</h2>
        </div>
    );
}

export default () => (
<Router>
    <Switch>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/cats">Cats</Link>
                </li>
            </ul>

            <hr />

            <Route path="/" exact component={HomePage}/>
            <Route path="/cats" component={CatsPage}>
                <Route path="cats/:id" component={CatPage}/>
            </Route>
        </div>
    </Switch>
</Router>
);
