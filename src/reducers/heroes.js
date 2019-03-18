import { Map, List } from 'immutable'
import {
  TOGGLE_COLLAPSED_HERO,
  REMOVE_HERO,
  UPDATE_HERO,
} from '../actions/actions'

const heroes = List([
  Map({
    id: 1,
    name: 'lina',
    attribute: 'int',
    collapsed: true,
    games: List([
      Map({
        id: '1-1',
        status: 'win',
        comment: ' what ?'
      }),
      Map({
        id: '1-2',
        status: 'loss',
        comment: '?????'
      }),
      Map({
        id: '1-3',
        status: 'loss',
        comment: 'wtf'
      }),
    ])
  }),
  Map({
    id: 2,
    name: 'panda',
    attribute: 'str',
    collapsed: true,
    games: List([
      Map({
        id: '2-1',
        status: 'loss',
        comment: 'zxczc f ?'
      }),
      Map({
        id: '2-2',
        status: 'loss',
        comment: 'sdv vxcv'
      }),
      Map({
        id: '2-3',
        status: 'loss',
        comment: 'w efwef w'
      }),
    ])
  }),
  Map({
    id: 3,
    name: 'riki',
    attribute: 'agi',
    collapsed: true,
    games: List([
      Map({
        id: '3-1',
        status: 'win',
        comment: ' just imba ?'
      }),
      Map({
        id: '3-2',
        status: 'win',
        comment: ' 1 11 '
      }),
      Map({
        id: '3-3',
        status: 'win',
        comment: '3 23r23r'
      }),
    ])
  }),
]);

// const initialState = {
//   heroes: List(heroes),
//   bool: false,
//   filter: 'all',
// };

export default function (state = heroes, action) {
  switch (action.type) {
    case TOGGLE_COLLAPSED_HERO:
      return state.map(item => {
        if (item.get('id') === action.payload) {
          return item.set('collapsed', !item.get('collapsed'));
        }
        return item;
      });
    case REMOVE_HERO: 
      return state.filter(item => item.get('id') !== action.payload);
    case UPDATE_HERO:
      const { id, updateType, newValues } = action.payload;
      console.log('update hero reducer', action.payload)
      if(updateType === 'update_hero') {
        
        return state.map(item => {
          if (item.get('id') === id) {
            return (
              item.set('name', newValues.name),
              item.set('attribute', newValues.attribute)
            )
          }
          return item;
        });
      }

      
      //return state;
      //return state.set('id', id).set('updateType', updateType);

      break;
    default:
      return state;
  }
}