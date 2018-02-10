import React, {Component} from 'react'
import FaAngleDown from 'react-icons/lib/fa/angle-down'
class RolesFilterDropdown extends Component {
    state = {
        roles: [1, 2, 3],
        isDropdownActive: false
    }
    handleWrapperClick = () => {
        this.setState(() => {
            return {isDropdownActive: !this.state.isDropdownActive}
        })
    }
    render() {
        return (
            <div id="rolesFilterWrapper" onClick={this.handleWrapperClick}>
                <FaAngleDown/>
                { this.state.isDropdownActive && this.state.roles.map(role => <div>{role}</div>)}
            </div>
        )
    }
}

export default RolesFilterDropdown;