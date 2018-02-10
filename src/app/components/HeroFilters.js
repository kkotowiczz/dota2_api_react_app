import React, {Component} from 'react'
import Checkbox from './Checkbox';


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
            </div>
        )
    }
}

export default HeroFilters