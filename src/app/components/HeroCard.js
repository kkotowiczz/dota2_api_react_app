import React from 'react';


const HeroCard = props => {
    return (
      <div>
        <div className='heroAvatar'>
            <figure>
            <img src={props.avatarURL} className="avatarImg" />
            <figcaption>{props.name}</figcaption>
            </figure>
        </div>
          <div className="attributesRow">
              <div className="strAttr">
                  <img src="../assets/images/Strength_Icon.png" />
                  {props.str}
              </div>
            <div className="agiAttr">
                <img src="../assets/images/Agility_Icon.png" />
                {props.agi}
            </div>
            <div className="intAttr">
                <img src="../assets/images/Intelligence_Icon.png" />
                {props.int}
            </div>
          </div>
      </div>
    );
};

export default HeroCard;