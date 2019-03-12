export const TOGGLE_COLLAPSED_HERO = 'TOGGLE_COLLAPSED_HERO';

export const getItems = () => {
  return {
    type: 'GET_ITEMS',
    payload: {
      name: 'ivan',
      age: 22,
    }
  };
};

export function toggleCollapsedHero(id) {
  return {
    type: TOGGLE_COLLAPSED_HERO,
    payload: id,
  }
}

