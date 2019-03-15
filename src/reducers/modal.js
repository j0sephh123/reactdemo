import { Map, List } from 'immutable'
import {
  TOGGLE_MODAL,
  CLOSE_MODAL,
} from '../actions/action'

const initialModal = Map({
  active: false,
  type: null,
  id: null,
  oldValues: List(),
  newValues: List(),
})

export default function (state = initialModal, action) {
  switch (action.type) {
    case TOGGLE_MODAL: 
      return initialModal.set('active', true);
    case CLOSE_MODAL:
      return initialModal;
    default:
      return state;
  }
}