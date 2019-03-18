import React, { Component } from "react";
import {} from "immutable";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import { closeModal, updateHero } from "../actions/actions";
import Modal from 'react-modal';
import Input from '../elements/Input'
import Select from '../elements/Select'

const FormContent = styled.div``;

const OldValues = styled.div``;

const customStyles = {
  content : {
    top                   : '30%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width: '80%',
  }
};

Modal.setAppElement('#root')

class MyModal extends Component {
  state = {
    name: "",
    attribute: "str",
  };

  onChange = e => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };

  updateHeroHandler = () => {
    this.props.updateHero({
      id: 1,
      updateType: 'update_hero',
      newValues: {
        name: this.state.name,
        attribute: this.state.attribute
      },
    })
    this.props.closeModal()
  }

  

  render() {
    const { modal, closeModal, updateHero } = this.props;
    const hero = modal.get("hero") !== null ? modal.get("hero") : null;

    if(hero !== null) {
      return (
        <Modal
          isOpen={modal.get('active') ? true : false}
          onRequestClose={closeModal}
          style={customStyles}>
          <p className="title is-2">{hero.get('name')}</p>
          <div>
            <Input
              name="name"
              onChange={this.onChange}
              value={this.state.name}
            />
            <Select 
              name="attribute"
              onChange={this.onChange}
              value={this.state.attribute}
            />
          </div>
          <button 
            onClick={() => this.updateHeroHandler()} 
            className="button is-link">
            Update
          </button>
        </Modal>
    )} else {
      return null
    } 
  }
}

function mapStateToProps(state) {
  return {
    modal: state.modal
  };
}

function mapDispatchToProps(dispatch) {
  return {
    closeModal: () => dispatch(closeModal()),
    updateHero: ({ id, updateType, newValues }) =>
      dispatch(updateHero({ id, updateType, newValues }))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyModal);
