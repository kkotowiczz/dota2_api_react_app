// https://api.opendota.com/api/distributions / country_mmr

import React, {Component} from "react";
import d3 from 'd3';

class CountryStats extends Component {
    state = {
      countriesList: []
    };

    componentDidMount() {
        const REQ_URL = 'https://api.opendota.com/api/distributions';
        const REQ_OPT = {
            method: "GET",
            mode: "cors"
        };
        fetch(REQ_URL, REQ_OPT).then(res => res.json()).then(countriesData => {
            this.setState(() => {
                return {countriesList: countriesData}
            });
            countriesData.country_mmr.rows.map(country => {

            })
        })
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}


export default CountryStats;