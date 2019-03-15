import React, {Component} from 'react';
import {} from 'immutable';
import {connect} from 'react-redux';
import styled from '@emotion/styled';
import { closeModal } from '../actions/action';


class Modal extends Component {

  shouldComponentUpdate() {
    return true;
  } 


  render() {

    const { modal, closeModal } = this.props;
    const display = modal.get('active') ? 'block' : 'none';
    

    /* The Modal (background) */
    const Modal = styled.div `
      display: ${display}; 
      position: fixed; 
      z-index: 1; 
      padding-top: 100px; 
      left: 0;
      top: 0;
      width: 100%; 
      height: 100%; 
      overflow: auto; 
      background-color: rgb(0,0,0); 
      background-color: rgba(0,0,0,0.4); 
    `;

    /* Modal Content */
    const ModalContent = styled.div`
      background-color: #fefefe;
      margin: auto;
      padding: 20px;
      border: 1px solid #888;
      width: 80%;
    `

    /* The Close Button */
    const Close = styled.span`
      float: right;
    `

    return (
      <Modal
        onClick={closeModal}>
        <ModalContent>
          <Close 
            onClick={closeModal}>
            <i className="fas fa-times fa-lg"></i>
          </Close>
          <p>Text in modal</p>
        </ModalContent>
      </Modal>
    )
  }
}

function mapStateToProps(state) {
  return {
    modal: state.modal,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    closeModal: () => dispatch(closeModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);