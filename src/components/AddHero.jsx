import React, {Component} from 'react'
import {} from 'immutable';
import {connect} from 'react-redux'

class Heroes extends Component {
  render() {
    return (
    <div className="column is-6 is-offset-3 box">
      <div className="has-text-weight-semibold has-text-centered">
        Add hero
      </div>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    heroes: state.heroes.get('heroes'), 
  }
}

function mapDispatchToProps(state) {
  return {
    name: 'nothign here',
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Heroes);