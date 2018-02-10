import React, {Component} from 'react'
import FaAngleDown from 'react-icons/lib/fa/angle-down'
import DropdownOption from './DropdownOption'
class RolesFilterDropdown extends Component {
    state = {
        roles: [1, 222, 3],
        isDropdownActive: false
    }
    handleWrapperClick = () => {
        this.setState(() => {
            return {isDropdownActive: !this.state.isDropdownActive}
        })
    }
    render() {
        return (
            <div id="rolesFilterWrapper" >
                <div onClick={this.handleWrapperClick}>Dropdown menu <FaAngleDown/></div>
                { this.state.isDropdownActive && this.state.roles.map(role => <DropdownOption name={role} key={role}></DropdownOption>)}
            </div>
        )
    }
}

export default RolesFilterDropdown;