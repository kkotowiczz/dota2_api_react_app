import React from 'react'

const CardFront = props => {
    const attributes = ['str', 'agi', 'int'];
    return (
        <div className="cardFront">
            <img src={props.avatarURL} className="avatarImg" />
            <figcaption>{props.name}</figcaption>
            <div className="attributesRow">
                {
                    attributes.map((attr, index) => {
                        return (
                            <div
                                className={props.mainAttr === attr ? "prim attr" : "attr"}
                                key={index}
                            >
                                <img src={`../assets/images/${attr}.png`} />
                                {props[attr]}
                            </div>
                        )
                    })
                }
            </div>
     </div>
    )
};


export default CardFront