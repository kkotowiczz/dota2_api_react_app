import React, {Component} from 'react'
import Checkbox from './Checkbox';
import RoleSelector from './RoleSelector'

class HeroFilters extends Component {
    render() {
        const attrs = ['Strength', 'Agility', 'Intelligence'];
        const checkBoxes = attrs.map(attribute => {
            return (
                <label>
                    <Checkbox
                        attrName={attribute}
                        key={attribute}
                        clickHandler={this.props.clickHandler}
                    />
                </label>
            )
        });
        return (
            <div id="attributeSelector">
                {checkBoxes}
                <select onChange={this.props.handleRoleChange}>
                    <option defaultValue value="">All roles</option>
                    {this.props.roles.map(role => <option value={role}>{role}</option>)}
                </select>
                <RoleSelector/>
            </div>
        )
    }
}

export default HeroFilters