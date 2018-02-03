import React, {Component} from 'react';

class Checkbox extends Component {
    state = {
        checked: true
    };
    handleCheckBoxClick = e => {
        this.setState(() => {
            return {checked: !this.state.checked}
        });
    };
    render() {
        return (
            <div>
                {this.props.attrName}
                <input
                    type="checkbox"
                    name="attr"
                    value={this.props.attrName}
                    onClick={this.props.clickHandler}
                    onChange={this.handleCheckBoxClick}
                    checked={this.state.checked}
                />
            </div>
        )
    }
}

export default Checkbox