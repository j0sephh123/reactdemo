import React from "react";
import styled from '@emotion/styled';
import { useSpring, animated } from 'react-spring';

export default function Hero({ hero, heroClicked }) {
  const HeroContainer = styled.div`
  `;

  const HeroBody = styled.div`
    display: ${hero.get('collapsed') ? 'none' : 'block'}
  `;

  const HeroTitle = styled.p`
    cursor: pointer;
  `;

  console.log(useSpring)

  return (
    <HeroContainer className="box">
      <div 
        style={{display: 'flex',}}
        className="level">
        <div 
          className="level-left">
          <HeroTitle 
            onClick={heroClicked}
            className="title">Hero: {hero.get("name")}
          </HeroTitle>
        </div>
        <div className="level-right">
          <button className="button">Remove</button>
        </div>
      </div>

      <HeroBody>
        <p>Type: {hero.get("type")}</p>
        <p>Games played:</p>
        <ul>
          {hero.get("games").map(game => (
            <li className="box" key={game.get("id")}>
              <p>Status: {game.get("status")}</p>
              <p>Comment: {game.get("comment")}</p>
            </li>
          ))}
        </ul>
      </HeroBody>
    </HeroContainer>
  );
}
