import React, {Component} from "react";
import * as d3 from 'd3'
import * as topoJSON from 'topojson'

class Chart extends Component {
    state = {
        worldData: []
    };
    projection() {
        return d3.geoMercator()
            .scale(100)
            .translate([800/2, 450/2])
    }
    componentDidMount() {
        fetch("https://unpkg.com/world-atlas@1/world/110m.json")
            .then(res => {
                if(res.status !== 200) {
                    console.log(`There was a problem: ${res.status}`)
                    return
                }
                res.json().then(worldData=> {
                    this.setState({
                        worldData: topoJSON.feature(worldData, worldData.objects.countries).features
                    })
                })
            })
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
                            />
                        ))
                    }
                </g>
            </svg>
        )
    }
}


export default Chart;