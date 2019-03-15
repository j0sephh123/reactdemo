export const TOGGLE_COLLAPSED_HERO = 'TOGGLE_COLLAPSED_HERO';
export const REMOVE_HERO = 'REMOVE_HERO';
export const UPDATE_HERO = 'UPDATE_HERO';

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

export function updateHero({id, updateType, newValue}) {
  return {
    type: UPDATE_HERO,
    payload: {
      id,
      updateType,
      newValue,
    }
  }
}



