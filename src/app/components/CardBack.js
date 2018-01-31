import React from 'react'
import * as d3 from 'd3'

const CardBack = props => {
    return (
        <div className="cardBack">
            {
                Object.keys(props.stats).map(attr => <p key={attr}>{attr}: {props.stats[attr]/100}</p>)
            }
            <p>KDA: {((props.stats.kills + props.stats.assists) / props.stats.deaths).toFixed(2)}</p>
        </div>
    )
};


export default CardBack