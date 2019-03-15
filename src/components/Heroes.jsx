import React, { Component } from "react";
import { connect } from "react-redux";
import { 
  toggleCollapsedHero, 
  removeHero, 
  updateHeroDispatcher 
} from "../actions/action";
import { getRandomColor } from "../lib";
import Hero from "./Hero";
import styled from "@emotion/styled";
import Modal from "./Modal";

class Heroes extends Component {
  state = {
    headerColor: "#000",
  };

  render() {
    const { heroes, toggleCollapsedHero, removeHero, updateHeroDispatcher } = this.props;

  

    const HeroesHeader = styled.div`
      cursor: pointer;
      color: ${this.state.headerColor};
    `;

    const collapseHero = heroArg => {
      let id = heroArg.get("id");
      toggleCollapsedHero(id);
    };

    const renderHeroes = heroes.map(hero => {
      return (
        <Hero
          key={hero.get("id")}
          hero={hero}
          collapseHero={() => collapseHero(hero)}
          removeHero={() => removeHero(hero.get("id"))}
          updateHero={() => updateHeroDispatcher({
            id: hero.get('id'),
            updateType: 'update_name',
            newValue: 'hello',
          })}
          carret={hero.get('collapsed') ? 'down' : 'up'}
        />
      )
    });

    return (
      <div className="column is-10 is-offset-1 box">
        <Modal />
        <HeroesHeader
          onClick={() => this.setState({ headerColor: getRandomColor() })}
          className="is-size-3 has-text-weight-semibold has-text-centered">
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
    updateHeroDispatcher: ({id, updateType, newValue}) => dispatch(updateHeroDispatcher({id, updateType, newValue})),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Heroes);
