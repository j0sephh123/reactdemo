import React, {Component} from 'react';
import {} from 'immutable';
import {connect} from 'react-redux';
import styled from '@emotion/styled';
import { closeModal, updateHero } from '../actions/actions';


class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hero: null,
    }
  }

  


  render() {

    const { modal, closeModal, updateHero } = this.props;
    const display = modal.get('active') ? 'block' : 'none';
    
    console.log(modal.get('hero'))

    

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
      display: flex;
      justify-content: space-between;
    `

    const FormContent = styled.div`

    `

    const OldValues = styled.div`

    `

    /* The Close Button */
    const Close = styled.div`
      cursor: pointer;
    `

    return (
      <Modal>
        <ModalContent>
          <OldValues>
            nothing here
            {/* Old value: {null && hero.get('name')} */}
          </OldValues>
          <FormContent>
            <div className="field has-addons">
              <p className="control">
                <input className="input" type="text" />
              </p>
              <p className="control">
                <button 
                  onClick={() => updateHero({
                    id: 1,
                    updateType: 'update_hero',
                    newValue: 'hello',
                  })} 
                  className="button is-link">
                  Update
                </button>
              </p>
            </div>

          </FormContent>
          <Close 
            onClick={closeModal}>
            <i className="fas fa-times fa-lg"></i>
          </Close>
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
    updateHero: ({id, updateType, newValue}) => dispatch(updateHero({id, updateType, newValue})),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);