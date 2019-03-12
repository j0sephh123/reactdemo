import React, { Component } from "react";
import { connect } from "react-redux";
import Hero from "./Hero";

class Heroes extends Component {
  render() {
    const { heroes } = this.props;

    const renderHeroes = heroes.map(hero => (
      <Hero 
        hero={hero} 
        key={hero.get("id")} />
    ));

    return (
      <div className="column is-6 is-offset-3 box">
        <div className="is-size-3 has-text-weight-semibold has-text-centered">
          Heroes
        </div>
        {renderHeroes}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    heroes: state.heroes.get("heroes")
  };
}

function mapDispatchToProps(state) {
  return {
    name: "no actions here yet"
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Heroes);
