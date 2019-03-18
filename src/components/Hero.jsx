import React from "react";
import styled from '@emotion/styled';

export default function Hero({ hero, collapseHero, removeHero, toggleModal, carret }) {
  const HeroContainer = styled.div`
  `;

  const HeroBody = styled.div`
    display: ${hero.get('collapsed') ? 'none' : 'block'}
  `;

  const HeroTitle = styled.p`
    cursor: pointer;
    margin-left: 0.6rem;
  `;

  const CarretDown = styled.i`
    cursor: pointer;
  `;

  return (
    <HeroContainer className="box">
      <div 
        style={{display: 'flex',}}
        className='level'>
        <div 
          className='level-left'>
          <CarretDown 
            onClick={collapseHero}
            className={'fas fa-2x fa-caret-' + carret}>
          </CarretDown>
          <HeroTitle
            className="title">
            {hero.get("attribute") === 'str' ? <i className="fas fa-sm fa-fist-raised"></i> : null}
            {hero.get("attribute") === 'agi' ? <i className="fas fa-sm fa-dragon"></i> : null}
            {hero.get("attribute") === 'int' ? <i className="fas fa-sm fa-book"></i> : null}
            Hero: {hero.get("name")}
          </HeroTitle>
        </div>
        <div className="level-right">
          <button
            onClick={toggleModal} 
            className="button">Edit all values
          </button>
          <button
            onClick={removeHero} 
            className="button">Remove
          </button>
        </div>
      </div>

      
        <HeroBody>
          <p>Games played:</p>
          <ul>
            {hero.get("games").size !== 0 ? hero.get("games").map(game => (
              <li className="box" key={game.get("id")}>
                <p>Status: {game.get("status")}</p>
                <p>Comment: {game.get("comment")}</p>
              </li>
            )) : 'no games with this hero'}
          </ul>
        </HeroBody>


    </HeroContainer>
  );
}
