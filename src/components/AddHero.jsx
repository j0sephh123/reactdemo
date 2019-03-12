import React, {Component} from 'react';
import {} from 'immutable';
import {connect} from 'react-redux';
import styled from '@emotion/styled';

const color = 'hotpink'

const Button = styled.div`
  color: ${color};
  cursor: pointer;
`


class Heroes extends Component {
  render() {
    return (
    <div className="column is-6 is-offset-3 box">
      <div className="has-text-weight-semibold has-text-centered">
      <Button>Add hero with emotion</Button>
      </div>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    heroes: 1
  }
}

function mapDispatchToProps(state) {
  return {
    name: 'nothign here',
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Heroes);