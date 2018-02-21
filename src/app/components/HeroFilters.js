import React, {Component} from 'react'
import Checkbox from './Checkbox';


class HeroFilters extends Component {
    render() {
        const attrs = ['Strength', 'Agility', 'Intelligence'];
        const checkBoxes = attrs.map(attribute => {
            return (
                <label>
                    <Checkbox
                        fieldName={attribute}
                        key={attribute}
                        clickHandler={this.props.clickHandler}
                        rolesCheckboxes={false}
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