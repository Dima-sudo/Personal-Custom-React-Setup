export default (
  state = {
    testToggle: false
  },
  action
) => {
  switch (action.type) {
    case 'TEST_TOGGLE':
      return { ...state, testToggle: !state.testToggle };

    default:
      return state;
  }
};
