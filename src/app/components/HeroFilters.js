import React, {Component} from 'react'
import Checkbox from './Checkbox';
import SearchBar from './SearchBar';


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
                    <select>
                        {this.props.options.map(option => <option value={option}>{option}</option>)}
                    </select>
                </div>
        )
    }
}

export default HeroFilters