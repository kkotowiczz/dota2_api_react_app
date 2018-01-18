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
      </div>
    );
};

export default HeroCard;