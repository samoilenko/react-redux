import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';

class CatForm extends React.Component {
    render() {
        const boxes = this.makeCheckBoxes();
        return (
            <div>
                <form>
                    <TextInput
                        name="name"
                        label="name"
                        value={this.props.cat.name}
                        onChange={this.props.onChange}
                    />

                    <TextInput
                        name="breed"
                        label="breed"
                        value={this.props.cat.breed}
                        onChange={this.props.onChange}
                    />

                    <TextInput
                        name="weight"
                        label="weight"
                        value={this.props.cat.weight}
                        onChange={this.props.onChange}
                    />
                    <TextInput
                        name="temperament"
                        label="temperament"
                        value={this.props.cat.temperament}
                        onChange={this.props.onChange}
                    />

                    <input
                        type="submit"
                        disabled={this.props.saving}
                        className="btn btn-primary"
                        onClick={this.props.onSave} />
                </form>
            </div>
        );
    }
}

CatForm.propTypes = {
    cat: PropTypes.object.isRequired,
};
