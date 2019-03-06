const initialState = {
  visited: false,
};


export default (state = initialState, action) => {
  switch (action.type) {
    case 'FIRST_VISIT':
      return {
        ...state,
        visited: true,
      };
    default:
      return state;
  }
};
