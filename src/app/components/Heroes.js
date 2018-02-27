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
    clickHandler = e => {
        const abbrAttr = e.target.value.substr(0, 3).toLowerCase();
        let filteredAttrArray;
        if(!e.target.checked)
            filteredAttrArray = this.state.filteredAttributes.filter(attr => attr !== abbrAttr);
        else
            filteredAttrArray = this.state.filteredAttributes.concat(abbrAttr);
        this.setState(() => {
            return {
                filteredAttributes: filteredAttrArray
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
    roleFilter = e => {
       let filteredRolesArr;
       if(!e.target.checked)
           filteredRolesArr = this.state.selectOptions.filter(role => role !== e.target.value)
        else
            filteredRolesArr = this.state.selectOptions.concat(e.target.value);
       this.setState(() => {
           return {selectOptions: filteredRolesArr}
       })
    }

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
                        <HeroFilters clickHandler={this.clickHandler} />
                    </form>
                    <SearchBar searchBarChangeHandler={this.searchBarChangeHandler} />
                </div>
                <RolesFilterDropdown roleFilter={this.roleFilter} />
                {heroList}
            </div>
        )
    }
}

export default Heroes;

