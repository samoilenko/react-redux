import React from 'react';

import propTypes from 'prop-types';


// const TextInput = ({name, onChange, /*placeholder, */label, value}) => {
class TextInput extends React.Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.name}>{this.props.label}</label>
                ----{this.props.value}=====
                <div className="field">
                    <input
                        type="text"
                        name={this.props.name}
                        className="form-control"
                        placeholder={this.props.label}
                        value={this.props.value}
                        onChange={this.props.onChange}/>
                </div>
            </div>
        );
    }
};

TextInput.propTypes = {
    name: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    // placeholder: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    value: propTypes.string,

};


export default TextInput;
