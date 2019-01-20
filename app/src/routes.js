import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// import App from './components/App';
// import HomePage from './components/home/HomePage';
import CatsPage from './components/cats/CatsPage';
// import CatPage from './components/cats/CatPage';

function HomePage() {
    return (
        <div>
            <h2>HomePage</h2>
        </div>
    );
}

export default () => (
<Router>
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


        <Switch>
            <Route path="/" exact component={HomePage}/>
            {/*<Route path="/cats/:id" component={CatPage}/>*/}
            <Route path="/cats" component={CatsPage}/>
        </Switch>
    </div>
</Router>
);
