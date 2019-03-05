const initialState = {
  firstVisit: true,
};


export default (state = initialState, action) => {
  switch (action.type) {
    case 'FIRST_VISIT':
      return {
        ...state,
        firstVisit: false,
      };
    default:
      return state;
  }
};
