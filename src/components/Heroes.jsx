import React, {Component} from 'react'
import {} from 'immutable';
import {connect} from 'react-redux'

class Heroes extends Component {
  render() {

    const {heroes} = this.props;
    //console.log(heroes.first())


    const renderHeroes = heroes.map((hero) => {
      return (
        <div 
          key={hero.get('id')}
          className="box">
          <p>Hero: {hero.get('name')}</p>
          <p>Type: {hero.get('type')}</p>
          <p>Games played:</p>
          <ul>
            {hero.get('games').map((game) => (
              <li className="box" key={game.get('id')}>
                <p>Status: {game.get('status')}</p>  
                <p>Comment: {game.get('comment')}</p>  
              </li>
            ))}
          </ul>
        </div>
      )
    })

    return (
    <div className="column is-6 is-offset-3 box">
      <div className="has-text-weight-semibold has-text-centered">Test123</div>
      {renderHeroes}
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    heroes: state.mainReducer.get('heroes'), 
  }
}

function mapDispatchToProps(state) {
  return {
    name: 'nothign here',
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Heroes);