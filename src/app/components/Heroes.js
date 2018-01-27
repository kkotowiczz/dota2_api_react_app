import React, {Component} from 'react';
import HeroCard from './HeroCard'
class Heroes extends Component {
    state = {
        heroesList: [],
    };
    componentDidMount() {
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
            data.map(hero => {

            })
        })
    };


    render() {
        return(
            <div id="heroesWrapper">
                {
                    this.state.heroesList.map(hero => {
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
                }
            </div>
        )
    }
}

export default Heroes;

