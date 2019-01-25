import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import * as catActions from '../../actions/catActions';
import CatList from './CatList';
import {Link, Route, Switch} from "react-router-dom";
import CatPage from "./CatPage";
import NewCatPage from "./NewCatPage";

class CatsPage extends React.Component {
    render() {
        return (
            <div className="col-md-12">
                <h1>
                    Cats
                    <Link to={'/cats/new'} className={"btn btn-primary"}>cat</Link>
                </h1>
                <Route
                    exact
                    path={this.props.match.path}
                    render={() => <h3>Please select a cat.</h3>}
                />
                <div className="col-md-4">
                    <CatList cats={this.props.cats} match={this.props.match}/>
                </div>

                <Switch>
                <Route exact path={`${this.props.match.path}/new`} component={NewCatPage} />
                <Route path={`${this.props.match.path}/:id`} component={CatPage} />
                </Switch>
            </div>
        );
    }
}

CatsPage.propTypes = {
    cats: PropTypes.array.isRequired,
};

function mapStateToProps(state, ownProps) {
    return {
        cats: state.cats,
    }
}

export default connect(mapStateToProps)(CatsPage);
