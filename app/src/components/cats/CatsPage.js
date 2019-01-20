import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import * as catActions from '../../actions/catActions';
import CatList from './CatList';
import {Route} from "react-router-dom";
import CatPage from "./CatPage";

class CatsPage extends React.Component {
    render() {
        return (
            <div className="col-md-12">
                <h1>Cats</h1>
                <Route
                    exact
                    path={this.props.match.path}
                    render={() => <h3>Please select a cat.</h3>}
                />
                <div className="col-md-4">
                    <CatList cats={this.props.cats} match={this.props.match}/>
                </div>

                <Route path={`${this.props.match.path}/:id`} component={CatPage} />
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
