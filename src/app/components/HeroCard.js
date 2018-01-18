import React from 'react';


const HeroCard = props => {
    return (
      <div>
        <div className='heroAvatar'>
            <img src={props.avatarURL} />
        </div>
      </div>
    );
};

export default HeroCard;