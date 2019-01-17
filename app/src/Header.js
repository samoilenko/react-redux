import React from 'react';
import { NavLink, BrowserRouter as Router, Route } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h2>HomePage</h2>
        </div>
    );
}
function CatsPage() {
    return (
        <div>
            <h2>CatsPage</h2>
        </div>
    );
}

const Header = () => {
    return (
        <Router>
            <nav>
                <NavLink to="/" activeClassName="active">Home</NavLink>
                {" | "}
                <NavLink to="/cats" activeClassName="active">Cats</NavLink>

                <Route path="/" exact component={HomePage}/>
                <Route path="/cats" component={CatsPage} />
            </nav>
        </Router>
    );
};

export default Header;
