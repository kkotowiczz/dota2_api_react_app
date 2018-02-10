import React, {Component} from 'react'
import FaCircleO from 'react-icons/lib/fa/circle-o'
import FaCheckCircle from 'react-icons/lib/fa/check-circle'
class DropdownOption extends Component {
    state = {
        isRoleActive: true
    };
    handleRoleToggle = e => {
        this.setState(() => {
            return {isRoleActive: !this.state.isRoleActive}
        })
    };
    render() {
        return (
            <div onClick={this.handleRoleToggle} className={(this.state.isRoleActive && "roleActive") + " heroFilteredRole"}>
                <div>{this.state.isRoleActive ? <FaCheckCircle /> : <FaCircleO/>}</div>
                <div>{this.props.name}</div>
            </div>
        )
    }
}

export default DropdownOption