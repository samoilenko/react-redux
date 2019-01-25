import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import HobbyList from './hobbyList';
import {bindActionCreators} from 'redux';
import * as catActions from '../../actions/catActions';
import CatForm from './CatForm';

class CatPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            cat: this.props.cat,
            catHobbies: this.props.catHobbies,
            checkBoxHobbies: this.props.checkBoxHobbies,
        };
        this.updateCatState = this.updateCatState.bind(this);
        this.updateCatHobbies = this.updateCatHobbies.bind(this);
        this.saveCat = this.saveCat.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    saveCat(event) {
        event.preventDefault();
        this.props.actions.updateCat(this.state.cat);
    }

    updateCatHobbies(event) {
        const cat = this.state.cat;
        const hobbyId = parseInt(event.target.value);
        const hobby = this.state.checkBoxHobbies.filter(hobby => hobby.id === hobbyId)[0];
        const checked = !hobby.checked;
        hobby['checked'] = checked;

        if (checked) {
            cat.hobby_ids.push(hobby.id)
        } else {
            cat.hobby_ids.splice(cat.hobby_ids.indexOf(hobby.id));
        }

        this.setState({cat: cat});
    }

    updateCatState(event) {
        const field = event.target.name;
        const cat = this.state.cat;
        cat[field] = event.target.value;
        return this.setState({cat: cat});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (this.props.cat.id !== nextProps.cat.id) {
            this.setState({
                cat: nextProps.cat,
                catHobbies: nextProps.catHobbies,
            });
        }

        if (this.props.checkBoxHobbies.length < nextProps.checkBoxHobbies.length) {
            this.setState({
                catHobbies: nextProps.catHobbies,
                checkBoxHobbies: nextProps.checkBoxHobbies,
            });
        }

    }

    toggleEdit() {
        this.setState({isEditing: !this.state.isEditing})
    }

    render() {
        if (this.state.isEditing) {
            return (
                <div>
                    <h1>edit a cat</h1>
                    <CatForm
                        cat={this.state.cat}
                        hobbies={this.state.checkBoxHobbies}
                        onSave={this.saveCat}
                        onChange={this.updateCatState}
                        onHobbyChange={this.updateCatHobbies}
                    />
                </div>
            )
        }

        return (
            <div className="col-md-8">
                <h1>{this.state.cat.name}</h1>
                <p>breed: {this.state.cat.breed}</p>
                <p>weight: {this.state.cat.weight}</p>
                <p>temperament: {this.state.cat.temperament}</p>
                <HobbyList hobbies={this.state.catHobbies} />
                <button onClick={this.toggleEdit} className="btn btn-primary">edit</button>
            </div>
        );
    }
}

CatPage.propTypes = {
    cat: PropTypes.object.isRequired,
    catHobbies: PropTypes.array.isRequired,
    checkBoxHobbies: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
};

function collectHobbies(hobbies, cat) {
    return hobbies.filter(hobby => {
        if (cat.hobby_ids.filter(hobbyId => hobbyId === hobby.id).length > 0){
            return true;
        }

        return false;
    });
}

function mapStateToProps(state, ownProps) {
    const stateHobbies = [...state.hobbies];
    let checkBoxHobbies = [];
    let cat = {name: '', bread: '', weight: '', temperament: '', hobby_ids: []};
    let catHobbies = [];
    const catId = parseInt(ownProps.match.params.id);

    if (catId && state.cats.length > 0 && state.hobbies.length > 0) {
        cat = Object.assign({}, state.cats.find(cat => cat.id === catId));

        if (cat && cat.id && cat.hobby_ids.length > 0) {
            checkBoxHobbies = hobbiesForCheckBoxes(stateHobbies, cat);
            catHobbies = collectHobbies(state.hobbies, cat);
        } else {
            checkBoxHobbies = hobbiesForCheckBoxes(stateHobbies);
        }
    }

    return {cat: cat, catHobbies: catHobbies, checkBoxHobbies: checkBoxHobbies};
}

function hobbiesForCheckBoxes(hobbies, cat=null) {
    return hobbies.map(hobby => {
        hobby['checked'] = cat && cat.hobby_ids.filter(hobbyId => hobbyId === hobby.id).length > 0;

        return hobby;
    });
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(catActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CatPage);
