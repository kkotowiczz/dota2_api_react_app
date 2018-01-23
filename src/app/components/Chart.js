import React, {Component} from "react";
import * as d3 from 'd3'
import * as topoJSON from 'topojson'

class Chart extends Component {
    createChart () {
        let width = 900;
        let height = 600;

        let projection = d3.geoMercator();

        let svg = d3.select("#svgContainer").append("svg")
            .attr("width", width)
            .attr("height", height);
        let path = d3.geoPath()
            .projection(projection);
        let g = svg.append("g");

        d3.json("https://unpkg.com/world-atlas@1.1.4/world/110m.json", (error, topology) => {
            g.selectAll("path")
                .data(topoJSON.feature(topology, topology.objects.countries)
                    .features)
                .enter()
                .append("path")
                .attr("d", path)
        });
    }
    componentDidMount() {
        this.createChart()
    }

    render() {
        return (
            <div id="svgContainer">
            </div>
        )
    }
}


export default Chart;