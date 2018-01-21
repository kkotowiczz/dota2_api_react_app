import React, {Component} from 'react';
import {GoogleCharts} from 'google-charts'
import ReactDOM from 'react-dom'

class Chart extends Component {

    componentDidUpdate(prevProps) {
        if(this.props.data !== prevProps) {
            console.log(this.props.data.country_mmr.rows);
            GoogleCharts.load(this.drawChart)
        }

    }
    drawChart = () => {
        const geoChartOptions = {
            region: 'world',
            resolution: 'countries',
        };

        const geoChartData =  GoogleCharts.api.visualization.arrayToDataTable([
            ['Country', 'Average MMR', 'Players count'],
            ["PL", 10, 100],
            ["US", 200, 300]
        ]);
        const geoChart = new GoogleCharts.api.visualization.GeoChart(document.getElementsByTagName('body')[0]);
        geoChart.draw(geoChartData, geoChartOptions)
    };
    render() {
        return (
            <div id="chart">s</div>
        )
    }
}


export default Chart;