import React, {Component} from 'react';
import HeroCard from './HeroCard'
class Heroes extends Component {
    state = {
        heroesList: []
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
                return {
                    heroesList: data
                }
            });
            data.map(hero => {
                fetch(`${REQ_URL}/api/heroes/${hero.id}/matches`, REQ_OPTIONS).then(res => res.json()).then(heroMatches => console.log(heroMatches))
            })
        })
    };
    render() {
        return(
            <div>
                {
                    this.state.heroesList.map(hero => {
                        return (
                            <HeroCard
                                key={hero.id}
                                avatarURL={`https://api.opendota.com${hero.img}`}
                                name={hero.localized_name}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default Heroes;