import React, {Component} from 'react';
import Dropdown from 'react-dropdown-multiselect'
class RoleSelector extends Component {
    state = {
        selected: [{ value: 'two', label: 'Two'}]
    }
    _onSelect = (option) => {
        console.log('You selected ', option.label)
        this.setState({selected: option})
    }
    render() {
        const options = [
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },
            {
                type: 'group', name: 'group1', items: [
                    { value: 'three', label: 'Three' },
                    { value: 'four', label: 'Four' }
                ]
            },
            {
                type: 'group', name: 'group2', items: [
                    { value: 'five', label: 'Five' },
                    { value: 'six', label: 'Six' }
                ]
            }
        ]

        let defaultOption = this.state.selected
        return (
            <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
        )
    }

}

export default RoleSelector