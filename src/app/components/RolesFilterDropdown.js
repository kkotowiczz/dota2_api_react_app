import React, {Component} from 'react'
import FaAngleRight from 'react-icons/lib/fa/angle-right'
import Checkbox from './Checkbox'
class RolesFilterDropdown extends Component {
    state = {
        isDropdownActive: false
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
                        { this.state.isDropdownActive && this.props.roles.map(role => {
                            return (
                            <Checkbox
                                fieldName={role}
                                key={role}
                                roleCheckboxes={true}
                            >
                            </Checkbox>)
                        })}
                    </div>
                </div>
        )
    }
}

export default RolesFilterDropdown;