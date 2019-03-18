export const TOGGLE_COLLAPSED_HERO = 'TOGGLE_COLLAPSED_HERO';
export const REMOVE_HERO = 'REMOVE_HERO';
export const UPDATE_HERO = 'UPDATE_HERO';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const ADD_HERO = 'ADD_HERO';

// export const getItems = () => {
//   return {
//     type: 'GET_ITEMS',
//     payload: {
//       name: 'ivan',
//       age: 22,
//     }
//   };
// };

export function toggleCollapsedHero(id) {
  return {
    type: TOGGLE_COLLAPSED_HERO,
    payload: id,
  }
}

export function removeHero(id) {
  return {
    type: REMOVE_HERO,
    payload: id,
  }
}

export function updateHero({id, updateType, newValues}) {
  return {
    type: UPDATE_HERO,
    payload: {
      id,
      updateType,
      newValues,
    }
  }
}

export function toggleModal({active, updateType, hero, oldValues, newValues}) {
  return {
    type: TOGGLE_MODAL,
    payload: {
      active,
      updateType,
      hero,
      oldValues,
      newValues,
    }
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
  }
}

export function addHero({name, attribute}) {
  return {
    type: ADD_HERO,
    payload: {
      name, attribute,
    }
  }
}

// dispatchers

// dispatches updateHero and toggleModal
export function updateHeroDispatcher({id, updateType}) {
  return dispatch => {
    //dispatch(updateHero({id, updateType, newValue}));
    return dispatch(toggleModal({
      active: true,
      id,
      updateType,
    }));
  }
}
