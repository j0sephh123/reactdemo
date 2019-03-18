import React, { Component } from "react";
import {} from "immutable";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import { closeModal, updateHero } from "../actions/actions";
import Modal from 'react-modal';

const FormContent = styled.div``;

const OldValues = styled.div``;

const customStyles = {
  content : {
    top                   : '10%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width: '80%',
    display: 'flex',
  }
};

Modal.setAppElement('#root')

class MyModal extends Component {
  state = {
    name: "",
    attribute: "",
  };

  onChange = e => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };

  updateHeroHandler = () => {
    console.log(this.state.name, this.state.attribute)
    this.props.updateHero({
      id: 1,
      updateType: 'update_hero',
      newValues: {
        name: this.state.name,
        attribute: this.state.attribute
      },
    })
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
          {hero.get('name')}
          <OldValues>
            <p>
              name: {hero.get('name')}
            </p>
            <p>
              attribute: {hero.get('attribute')}
            </p>
          </OldValues>
          <div>
            <div className="field">
              <p className="control">
                <input 
                  name="name"
                  className="input" 
                  type="text" 
                  value={this.state.name}
                  placeholder="name"
                  onChange={this.onChange}
                  />
              </p>
            </div>
            <select
              value={this.state.attribute}
              className="select"  
              name="attribute"
              onChange={this.onChange}>
              <option value="str">Strength</option>
              <option value="agi">Agility</option>
              <option value="int">Intelligence</option>
            </select>
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
