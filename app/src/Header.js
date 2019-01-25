import React from 'react';
import { NavLink, Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CatsPage from './components/cats/CatsPage';
import NewCatPage from './components/cats/NewCatPage';
import CatPage from "./components/cats/CatPage";


function HomePage() {
    return (
        <div>
            <h2>HomePage</h2>
        </div>
    );
}

const Header = () => {
    return (
        <Router>
            <nav>
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                {" | "}
                <NavLink to="/cats" activeClassName="active">Cats</NavLink>
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/cats" component={CatsPage} />
                </Switch>
            </nav>
        </Router>
    );
};

export default Header;
