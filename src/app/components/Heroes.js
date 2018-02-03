import React, {Component} from 'react';
import HeroCard from './HeroCard';
import Checkbox from './Checkbox';

class Heroes extends Component {
    state = {
        heroesList: [],
        filteredAttributes: ['str', 'agi', 'int']
    };

    componentDidMount() {
        this.fetchData();
    };

    clickHandler = e => {
        console.log(e.nativeEvent.target.value, e.target.checked, 'from parent');
        let filteredArray;
        if(!e.target.checked) {
            filteredArray = this.state.filteredAttributes.filter(attr => attr !== e.target.value)
        } else {
            filteredArray = this.state.filteredAttributes.concat(e.target.value)
        }
        this.setState(() => {
            return {
                filteredAttributes: filteredArray
            }
        })
    };
    fetchData = () => {
        const REQ_URL = `https://api.opendota.com`;
        const REQ_OPTIONS = {
            method: "GET",
            mode: "cors"
        };
        fetch(`${REQ_URL}/api/heroStats`, REQ_OPTIONS).then(res => res.json()).then(data => {
            console.log(data);
            this.setState((prevState, props) => {
                return {heroesList: data}
            });

        })
    };
    appendHeroList = () => {
        return this.state.heroesList.map(hero => {
            return (
                <HeroCard
                    key = {hero.id}
                    id = {hero.id}
                    avatarURL = {`https://api.opendota.com${hero.img}`}
                    name = {hero.localized_name}
                    str = {hero.base_str}
                    agi = {hero.base_agi}
                    int = {hero.base_int}
                    mainAttr = {hero.primary_attr}
                />
            )
        })
    };
    render() {
        const attrs = ['str', 'agi', 'int'];
        const checkBoxes = attrs.map(attribute => {
            return (
                <label>
                    <Checkbox
                        attrName={attribute}
                        key={attribute}
                        clickHandler={this.clickHandler}
                    />
                </label>
            )
        });
        return(
            <div id="heroesWrapper">
                <div id="heroFilter">
                    <form id="attributeSelector">
                        {checkBoxes}
                    </form>
                    <input id="heroSearch" type="text"/>
                </div>
                {this.appendHeroList()}
            </div>
        )
    }
}

export default Heroes;

