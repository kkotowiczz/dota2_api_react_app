import React, {Component} from 'react';
import HeroCard from './HeroCard'
class Heroes extends Component {
    state = {
        heroesList: []
    };
    boundFunc = () => {
        const REQ_URL = `https://api.opendota.com`;
        const REQ_OPTIONS = {
            method: "GET",
            mode: "cors"
        };
        fetch(`${REQ_URL}/api/heroStats`, REQ_OPTIONS).then(res => res.json()).then(data => {
            this.setState((prevState, props) => {
                return {
                    heroesList: data
                }
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
                            />
                        )
                    })
                }
                <button onClick={this.boundFunc}>klik </button>
            </div>
        )
    }
}

export default Heroes;