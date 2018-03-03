import React, {Component} from 'react';
import HeroCard from './HeroCard';
import SearchBar from './SearchBar'
import HeroFilters from './HeroFilters'
import RolesFilterDropdown from './RolesFilterDropdown'

class Heroes extends Component {
    state = {
        heroesList: [],
        filteredAttributes: ['str', 'agi', 'int'],
        searchedTerm: '',
        selectOptions: [],
    };
    componentWillMount() {
        this.fetchData();
    };
    clickHandler = (type, e) => {
        const checkboxValue = type === 'attr' ? e.target.value.substr(0, 3).toLowerCase() : e.target.value;
        let filteredArray;
        const arrayToFilter = type === 'attr' ? 'filteredAttributes' : 'selectOptions';
        if(!e.target.checked)
            filteredArray = this.state[arrayToFilter].filter(val => val !== checkboxValue);
        else
            filteredArray = this.state[arrayToFilter].concat(checkboxValue);
        this.setState(() => {
            return {
                [arrayToFilter]: filteredArray
            }
        })
    };
    searchBarChangeHandler = e => {
      let searchTerm = e.target.value.trim();
        if(searchTerm) {
            this.setState(() => {
                return {searchedTerm: searchTerm}
            })
        } if(!searchTerm) {
            this.setState(() => {
                return {searchedTerm: ''}
            })
        }
    };

    fetchData = () => {
        const selectOptionsArray = [];
        const REQ_URL = `https://api.opendota.com`;
        const REQ_OPTIONS = {
            method: "GET",
            mode: "cors"
        };
        fetch(`${REQ_URL}/api/heroStats`, REQ_OPTIONS).then(res => res.json()).then(data => {
            this.setState((prevState, props) => {
                return {heroesList: data}
            });
            data.map(hero => hero.roles.map(role => {
                if (selectOptionsArray.indexOf(role) === -1)
                    selectOptionsArray.push(role)
            }));
            this.setState(() => {
                return {selectOptions: selectOptionsArray}
            });
            console.log(this.state.selectOptions)
        })
    };
    appendHeroList = () => {
        let searchTerm = this.state.searchedTerm.toLowerCase();
        const {filteredAttributes, selectOptions} = this.state;
        return this.state.heroesList
            .map(hero => {
                if(filteredAttributes.indexOf(hero.primary_attr) > -1 && hero.localized_name.toLowerCase().indexOf(searchTerm) > -1 && hero.roles.every(role => selectOptions.indexOf(role) > -1)) {
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
        const heroList = this.appendHeroList();
        return(
            <div id="heroesWrapper">
                <div id="heroFilter">
                    <form id="attributeSelectorWrapper">
                        <HeroFilters clickHandler={e => this.clickHandler('attr', e)} />
                    </form>
                    <SearchBar searchBarChangeHandler={this.searchBarChangeHandler} />
                </div>
                <RolesFilterDropdown clickHandler={e => this.clickHandler('role', e)} />
                {heroList}
            </div>
        )
    }
}

export default Heroes;

