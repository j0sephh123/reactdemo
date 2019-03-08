import {Map, List} from 'immutable'

const heroes = [
  Map({id: 1, name: 'lina', type: 'int', games: List([
    Map({id: '1-1', status: 'win', comment: ' what ?'}),
    Map({id: '1-2', status: 'loss', comment: '?????'}),
    Map({id: '1-3', status: 'loss', comment: 'wtf'}),
  ])}),
  Map({id: 2, name: 'panda', type: 'str', games: List([
    Map({id: '2-1', status: 'loss', comment: 'zxczc f ?'}),
    Map({id: '2-2', status: 'loss', comment: 'sdv vxcv'}),
    Map({id: '2-3', status: 'loss', comment: 'w efwef w'}),
  ])}),
  Map({id: 3, name: 'riki', type: 'agi', games: List([
    Map({id: '3-1', status: 'win', comment: ' just imba ?'}),
    Map({id: '3-2', status: 'win', comment: ' 1 11 '}),
    Map({id: '3-3', status: 'win', comment: '3 23r23r'}),
  ])}),
];

const initialState = {
  heroes: List(heroes),
  bool: false,
  filter: 'all',
};

export default function(state = Map(initialState), action) {
  switch (action.type) {
    // case 'GET_ITEMS':
    //   return {
    //     ...state,
    //     profile: action.payload,
    //     loading: false,
    //   };
    default:
      
      return state;
  }
}