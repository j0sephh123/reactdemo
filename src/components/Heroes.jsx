import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleCollapsedHero } from "../actions/action";
import { getRandomColor } from "../lib";
import Hero from "./Hero";
import styled from "@emotion/styled";

class Heroes extends Component {
  state = {
    headerColor: "#000",
  };

  render() {
    const { heroes, toggleCollapsedHero } = this.props;

    const HeroesHeader = styled.div`
      cursor: pointer;
      color: ${this.state.headerColor};
    `;

    const heroClicked = heroArg => {
      let id = heroArg.get("id");
      toggleCollapsedHero(id);
    };

    // up and down
    const carret = `fas fa-2x fa-caret-down`;

    const renderHeroes = heroes.map(hero => (
      <Hero
        carret={carret}
        heroClicked={() => heroClicked(hero)}
        hero={hero}
        key={hero.get("id")}
      />
    ));

    

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
    toggleCollapsedHero: id => dispatch(toggleCollapsedHero(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Heroes);
