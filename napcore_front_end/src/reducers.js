const napcoreReducers = (state = {
    loading: false,
  }, action) => {
  switch (action.type) {
    case 'TEST':
      return state;
    default:
      return state;
  }
};

export default napcoreReducers;
