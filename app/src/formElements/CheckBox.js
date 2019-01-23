import React from 'react';
import propTypes from 'prop-types';

class CheckBox extends React.Component {
    render() {
        return (
            <div>
                <label>{this.props.item.name}</label>

            </div>
        );
    }
}