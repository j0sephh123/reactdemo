import { Map, List } from 'immutable'
import {
  TOGGLE_MODAL,
  CLOSE_MODAL,
} from '../actions/actions'

const initialModal = Map({
  active: false,
  updateType: null,
  hero: null,
  oldValues: List(),
  newValues: List(),
})

export default function (state = initialModal, action) {
  switch (action.type) {
    case TOGGLE_MODAL: 
      console.log(action.payload)
      return initialModal
        .set('active', true)
        .set('hero', action.payload.hero)
        .set('updateType', action.payload.updateType);
    case CLOSE_MODAL:
      return initialModal;
    default:
      return state;
  }
}