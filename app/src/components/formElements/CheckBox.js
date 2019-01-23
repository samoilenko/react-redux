import React from 'react';
import propTypes from 'prop-types';

class CheckBox extends React.Component {
    render() {
        return (
            <div className="field">
                <div>
                    <label>{this.props.item.name}</label>
                    <input
                        type="checkbox"
                        name={this.props.item.name}
                        value={this.props.item.id}
                        checked={this.props.item.checked}
                        onChange={this.props.handleChange}/>
                </div>
            </div>
        );
    }
}

CheckBox.propTypes = {
    item: propTypes.object.isRequired,
    handleChange: propTypes.func.isRequired,
};

export default CheckBox;
