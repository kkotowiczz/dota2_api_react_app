import React from 'react';


const HeroCard = props => {
    const REQ_URL = `https://api.opendota.com`;
    const REQ_OPTIONS = {
        method: "GET",
        mode: "cors"
    };

    const handleClick = () => {
        fetch(`${REQ_URL}/api/heroes/${props.id}/matches`, REQ_OPTIONS)
            .then(res => res.json())
            .then(heroMatches => {
                const heroData = heroMatches.map(match => ({kills: match.kills, deaths: match.deaths, assists: match.assists}))
                    .reduce((acc, val) => ({kills: acc.kills + val.kills, deaths: acc.deaths + val.deaths, assists: acc.assists + val.assists}))
                console.log(heroData)
            })
    };

    return (
      <div className='heroCard' >
          <div className="heroCardWrapper" onClick={handleClick}>
              <img src={props.avatarURL} className="avatarImg" />
              <figcaption>{props.name}</figcaption>
              <div className='attributesRow'>
                  <div className={props.mainAttr === 'str' ? "prim attr" : "attr"}>
                      <img src="../assets/images/Strength_Icon.png" />
                      {props.str}
                  </div>
                <div className={props.mainAttr === 'agi' ? "prim attr" : "attr"}>
                    <img src="../assets/images/Agility_Icon.png" />
                    {props.agi}
                </div>
                <div className={props.mainAttr === 'int' ? "prim attr" : "attr"}>
                    <img src="../assets/images/Intelligence_Icon.png" />
                    {props.int}
                </div>
              </div>
          </div>
      </div>
    );
};

export default HeroCard;