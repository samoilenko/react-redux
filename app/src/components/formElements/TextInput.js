import React from 'react';

import propTypes from 'prop-types';


const TextInput = ({name, onChange, /*placeholder, */label, value}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <input
                    type="text"
                    name={name}
                    className="form-control"
                    placeholder={label}
                    value={value}
                    onChange={onChange}/>
            </div>
        </div>
    );
};

TextInput.propTypes = {
    name: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    // placeholder: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    value: propTypes.string,

};

TextInput.defaultProps = {
    value: '',
};


export default TextInput;
