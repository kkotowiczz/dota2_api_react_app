import React from 'react'
import * as d3 from 'd3'

const CardBack = props => {
    return (
        <div className="cardBack">
            {props.stats.kills}
            {props.stats.deaths}
            {props.stats.assists}
        </div>
    )
};


export default CardBack