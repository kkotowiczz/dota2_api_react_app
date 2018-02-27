import React, {Component} from 'react'
import FaAngleRight from 'react-icons/lib/fa/angle-right'
import Checkbox from './Checkbox'
class RolesFilterDropdown extends Component {
    state = {
        isDropdownActive: false,
        rolesList: ["Carry", "Escape", "Nuker", "Initiator", "Durable", "Disabler", "Jungler", "Support", "Pusher"]
    };
    handleWrapperClick = () => {
        this.setState(() => {
            return {isDropdownActive: !this.state.isDropdownActive}
        })
    }
    render() {
        return (
            <div id="dropdown">Roles<FaAngleRight onClick={this.handleWrapperClick}/>
                    <div id="rolesFilterWrapper">
                        { this.state.isDropdownActive && this.state.rolesList.map(role => {
                            return (
                            <Checkbox
                                fieldName={role}
                                key={role}
                                rolesCheckboxes={true}
                                roleFilter={this.props.roleFilter}
                            />)
                        })}
                    </div>
                </div>
        )
    }
}

export default RolesFilterDropdown;