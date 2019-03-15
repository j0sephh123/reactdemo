import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleCollapsedHero, removeHero } from "../actions/action";
import { getRandomColor } from "../lib";
import Hero from "./Hero";
import styled from "@emotion/styled";

class Heroes extends Component {
  state = {
    headerColor: "#000",
  };

  render() {
    const { heroes, toggleCollapsedHero, removeHero } = this.props;

    const HeroesHeader = styled.div`
      cursor: pointer;
      color: ${this.state.headerColor};
    `;

    const collapseHero = heroArg => {
      let id = heroArg.get("id");
      toggleCollapsedHero(id);
    };

    // const removeHero = heroArg => {
    //   let id = heroArg.get("id");
    //   // console.log();
    //   console.log('remove hero', id)
    // }

    const renderHeroes = heroes.map(hero => {
      return (
        <Hero
          key={hero.get("id")}
          hero={hero}
          collapseHero={() => collapseHero(hero)}
          removeHero={() => removeHero(hero.get("id"))}
          carret={hero.get('collapsed') ? 'down' : 'up'}
        />
      )
    });

    

    return (
      <div className="column is-10 is-offset-1 box">
        <HeroesHeader
          onClick={() => this.setState({ headerColor: getRandomColor() })}
          className="is-size-3 has-text-weight-semibold has-text-centered"
        >
          Heroes
        </HeroesHeader>
        {renderHeroes}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    heroes: state.heroes,
  };
}

function mapDispatchToProps(dispatch) {
  
  

  return {
    toggleCollapsedHero: id => dispatch(toggleCollapsedHero(id)),
    removeHero: id => dispatch(removeHero(id)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Heroes);
