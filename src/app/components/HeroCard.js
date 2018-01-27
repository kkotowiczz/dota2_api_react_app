import React from 'react';


const HeroCard = props => {
    const REQ_URL = `https://api.opendota.com`;
    const REQ_OPTIONS = {
        method: "GET",
        mode: "cors"
    };
    let heroDataContainer = [];
    const handleClick = () => {
       return fetch(`${REQ_URL}/api/heroes/${props.id}/matches`, REQ_OPTIONS)
            .then(res => res.json())
            .then(heroMatches => {
                heroMatches.map(hero => {
                    heroDataContainer.push({
                        kills: hero.kills,
                        deaths: hero.deaths,
                        assists: hero.assists
                    })
                })
                console.log(heroDataContainer)
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