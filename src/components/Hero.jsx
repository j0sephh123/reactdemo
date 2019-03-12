import React from "react";
import styled from '@emotion/styled'

const Button = styled.button`
  color: hotpink;
`


export default function Hero({ hero }) {

  let collapsed = hero.get('collapsed');
  console.log(collapsed);

  return (
    <div className="box">
      <Button>Button</Button>
      <p
      >Collapsed: {hero.get("collapsed") ? "true" : "false"}</p>
      <p>Hero: {hero.get("name")}</p>
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
    </div>
  );
}
