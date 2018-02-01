import React, {Component} from 'react';

class Checkbox extends Component {
    state = {
        checked: true
    };
    render() {
        return (
            <div>
                {this.props.attrName}
                <input type="checkbox" name="attr" value={this.props.attrName} onChange={this.handleCheckBoxChange} checked={this.state.checked}/>
            </div>
        )
    }
}

export default Checkbox