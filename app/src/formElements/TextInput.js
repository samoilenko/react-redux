import React from 'react';

import propTypes from 'prop-types';


const TextInput = ({name, onChange, placeholder, value}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <input
                    type="text"
                />

            </div>
        </div>
    );
};
