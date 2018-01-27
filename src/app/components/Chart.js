import React, {Component} from "react";
import * as d3 from 'd3'
import * as topoJSON from 'topojson'

class Chart extends Component {
    state = {
        worldData: [],
    };

    projection() {
        return d3.geoMercator()
            .scale(100)
            .translate([800/2, 450/2])
    };
    color () {
        return d3.scaleThreshold()
            .domain([4250, 4000, 3750, 3500, 3250, 3000, 2750, 2500])
            .range(["rgb(247,251,255)", "rgb(222,235,247)", "rgb(198,219,239)", "rgb(158,202,225)", "rgb(107,174,214)", "rgb(66,146,198)","rgb(33,113,181)","rgb(8,81,156)","rgb(8,48,107)","rgb(3,19,43)"])
    }

    componentDidMount() {
        fetch("https://unpkg.com/world-atlas@1/world/110m.json")
            .then(res => {
                if(res.status !== 200) {
                    console.log(`There was a problem: ${res.status}`)
                    return
                }
                res.json().then(worldData => {
                    this.setState({
                        worldData: topoJSON.feature(worldData, worldData.objects.countries).features
                    })
                }).then(worldData => {

                })
            })

    }
    componentDidUpdate () {
        console.log(this.props.data)
       this.props.data.country_mmr.map(d => console.log(parseInt(d.avg)))
    }
    render() {
        return (
            <svg width={800} height={450} viewBox="0 0 800 450">
                <g className="countries">
                    {
                        this.state.worldData.map((d,i) => (
                            <path
                                key={`path-${i}`}
                                d={d3.geoPath().projection(this.projection())(d)}
                                className="country"
                                fill={(d, i) => this.color(parseInt(d.avg))}
                            />
                        ))
                    }
                </g>
                <g className="markers">

                </g>
            </svg>
        )
    }

}


export default Chart;