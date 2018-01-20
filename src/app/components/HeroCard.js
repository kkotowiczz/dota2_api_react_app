import React from 'react';


const HeroCard = props => {
    return (
      <div className='heroCard'>
        <div className='heroAvatar'>
            <figure>
            <img src={props.avatarURL} className="avatarImg" />
            <figcaption>{props.name}</figcaption>
            </figure>
        </div>
          <div className={'attributesRow'}>
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
    );
};

export default HeroCard;