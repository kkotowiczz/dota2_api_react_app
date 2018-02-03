import React, {Component} from 'react';
import HeroCard from './HeroCard';
import Checkbox from './Checkbox';
import SearchBar from './SearchBar'

class Heroes extends Component {
    state = {
        heroesList: [],
        filteredAttributes: ['str', 'agi', 'int'],
        searchedTerm: ''
    };
    componentDidMount() {
        this.fetchData();
    };
    clickHandler = e => {
        const abbrAttr = e.target.value.substr(0, 3).toLowerCase();
        let filteredArray;
        if(!e.target.checked)
            filteredArray = this.state.filteredAttributes.filter(attr => attr !== abbrAttr);
        else
            filteredArray = this.state.filteredAttributes.concat(abbrAttr);
        this.setState(() => {
            return {
                filteredAttributes: filteredArray
            }
        })
    };
    searchBarChangeHandler = e => {
      let searchTerm = e.target.value.trim();
        if(searchTerm) {
            this.setState(() => {
                return {searchedTerm: searchTerm}
            })
        }
    };

    fetchData = () => {
        const REQ_URL = `https://api.opendota.com`;
        const REQ_OPTIONS = {
            method: "GET",
            mode: "cors"
        };
        fetch(`${REQ_URL}/api/heroStats`, REQ_OPTIONS).then(res => res.json()).then(data => {
            this.setState((prevState, props) => {
                return {heroesList: data}
            });
        })
    };
    appendHeroList = () => {
        return this.state.heroesList
            .map(hero => {
                if(this.state.filteredAttributes.indexOf(hero.primary_attr) > -1 && hero.localized_name.indexOf(this.state.searchedTerm) > -1) {
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
                }
            })
        };
    render() {
        const attrs = ['Strength', 'Agility', 'Intelligence'];
        const heroList = this.appendHeroList();
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
                    <SearchBar
                        searchBarChangeHandler={this.searchBarChangeHandler}
                    />
                </div>
                {heroList}
            </div>
        )
    }
}

export default Heroes;

