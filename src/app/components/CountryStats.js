// https://api.opendota.com/api/distributions / country_mmr

import React, {Component} from "react";
import * as d3 from 'd3';

class CountryStats extends Component {
    state = {
      countriesList: []
    };

    componentWillMount() {
        const REQ_URL = 'https://api.opendota.com/api/distributions';
        const REQ_OPT = {
            method: "GET",
            mode: "cors"
        };
        fetch(REQ_URL, REQ_OPT).then(res => res.json()).then(countriesData => {
            console.log(countriesData);
            this.setState(() => {
                return {countriesList: countriesData}
            });
            countriesData.country_mmr.rows.map(country => {

            })
        })

    }
    componentDidUpdate() {
        d3.select("#chart1").selectAll("p").data(this.state.countriesList.country_mmr.rows).enter().append("p").text((d, i) => JSON.stringify(d, undefined, 2))
    }
    createChart = () => {

    };

    render() {
        return (
            <div>
                <div id="chart1">

                </div>
            </div>
        )
    }
}


export default CountryStats;