export const TOGGLE_COLLAPSED_HERO = 'TOGGLE_COLLAPSED_HERO';
export const REMOVE_HERO = 'REMOVE_HERO';

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



