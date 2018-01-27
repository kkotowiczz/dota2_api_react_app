import React from 'react';
const HeroCard = props => {
    const attributes = ['str', 'agi', 'int']
    const REQ_URL = `https://api.opendota.com`;
    const REQ_OPTIONS = {
        method: "GET",
        mode: "cors"
    };
    const handleClick = () => {
        let heroData;
        fetch(`${REQ_URL}/api/heroes/${props.id}/matches`, REQ_OPTIONS)
            .then(res => res.json())
            .then(heroMatches => {
                heroData = heroMatches.map(match => ({kills: match.kills, deaths: match.deaths, assists: match.assists}))
                    .reduce((acc, val) => ({kills: acc.kills + val.kills, deaths: acc.deaths + val.deaths, assists: acc.assists + val.assists}))
                console.log(heroData, props.id, props.name)
            })
    };
    return (
      <div className='heroCard' >
          <div className="heroCardWrapper" onClick={handleClick}>
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
      </div>
    );
};

export default HeroCard;