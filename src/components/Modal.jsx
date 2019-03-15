import React, {Component} from 'react';
import {} from 'immutable';
import {connect} from 'react-redux';
import styled from '@emotion/styled';
import { closeModal, updateHero } from '../actions/actions';

 const ModalContent = styled.div`
 background-color: #fefefe;
 margin: auto;
 padding: 20px;
 border: 1px solid #888;
 width: 80%;
 display: flex;
 justify-content: space-between;
`

const FormContent = styled.div``

const OldValues = styled.div``

const Close = styled.div`
 cursor: pointer;
`

let ModalRemaining = `position: fixed; 
  z-index: 1; 
  padding-top: 100px; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
`

class Modal extends Component {
  state = {
    name: '',
    attribute: '',
  }

  componentDidMount() {
    window.addEventListener('keydown', (e) => {
      if(e.keyCode === 27) {
        this.props.closeModal();
      }
    })
  }

  onChange = (e) => {
    const name = e.target.name;
    this.setState({[name]: e.target.value});
  }

  render() {
    const { modal, closeModal, updateHero } = this.props;
    const hero = (modal.get('hero') !== null ? modal.get('hero') : null)
    
    const Modal = styled.div `
      display: ${modal.get('active') ? 'block' : 'none'}; 
      ${ModalRemaining}
    `;

    if(hero){
      return (
        <Modal>
          <ModalContent>
            <OldValues>
              <p>
                name: {hero.get('name')}
              </p>
              <p>
                attribute: {hero.get('attribute')}
              </p>
            </OldValues>
            <FormContent>
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
              <div className="field">
                <p className="control">
                  <input 
                    name="attribute"
                    className="input" 
                    type="text" 
                    value={this.state.attribute}
                    placeholder="attribute"
                    onChange={this.onChange}
                    />
                </p>
              </div>
            </FormContent>
            <button 
              onClick={() => updateHero({
                id: 1,
                updateType: 'update_hero',
                newValue: 'hello',
              })} 
              className="button is-link">
              Update
            </button>
          </ModalContent>
        </Modal>
      )
    } else {
      return null;
    }
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
    updateHero: ({id, updateType, newValue}) => dispatch(updateHero({id, updateType, newValue})),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);