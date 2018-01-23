// https://api.opendota.com/api/distributions / country_mmr

import React, {Component} from "react";
import Chart from './Chart'

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

    }
    createChart = () => {

    };

    render() {
        return (
            <div>
                <div id="chart1">
                    <Chart id="innerChart"
                        data={this.state.countriesList}
                           fill={""}
                    />
                </div>
            </div>
        )
    }
}


export default CountryStats;