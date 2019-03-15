import React, {Component} from 'react';
import {} from 'immutable';
import {connect} from 'react-redux';
import styled from '@emotion/styled';

class Modal extends Component {
  render() {
    return (
    <div>
      modal
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

export default connect(mapStateToProps, mapDispatchToProps)(Modal);