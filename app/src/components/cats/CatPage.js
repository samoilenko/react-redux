import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import HobbyList from './hobbyList';

class CatPage extends React.Component {
    render() {
        return (
            <div className="col-md-8 col-md-offset-2">
                <h1>{this.props.cat.name}</h1>
                <p>breed: {this.props.cat.breed}</p>
                <p>weight: {this.props.cat.weight}</p>
                <p>temperament: {this.props.cat.temperament}</p>
                <HobbyList hobbies={this.props.catHobbies} />
            </div>
        );
    }
}

CatPage.propTypes = {
    cat: PropTypes.object.isRequired,
    catHobbies: PropTypes.array.isRequired,
};

function collectHobbies(hobbies, cat) {
    return hobbies.filter(hobby => {
        if (cat.hobby_ids.filter(hobbyId => hobbyId === hobby.id)){
            return true;
        }

        return false;
    });
}

function mapStateToProps(state, ownProps) {
    let cat = {name: '', bread: '', weight: '', temperament: '', hobby_ids: []};
    let catHobbies = [];
    const catId = ownProps.params.id;
    if (state.cats.length > 0 && state.hobbies.length > 0) {
        cat = Object.assign({}, state.cats.find(cat => cat.id === catId));
        if (cat.hobby_ids.length > 0) {
            catHobbies = collectHobbies(state.hobbies, cat);
        }
    }

    return {cat: cat, catHobbies: catHobbies};
}

export default connect(mapStateToProps)(CatPage);
