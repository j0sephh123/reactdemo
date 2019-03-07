const initialState = {
  items: [
    {id: 1, name: 'lina', type: 'int'},
    {id: 2, name: 'panda', type: 'str'},
    {id: 3, name: 'riki', type: 'agi'},
  ],
  bool: false,
  filter: 'all',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GET_ITEMS':
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}