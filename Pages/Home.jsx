import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { connect } from 'react-redux';
import testToggle from '../Redux/Actions/utils';

const TestButton = styled.button.attrs(({ type }) => ({
  type: type || 'button'
}))`
  background-color: ${p => p.theme.colors.pink};
`;

const Home = props => {
  const { testToggle } = props;

  return (
    <div>
      <h1>This is a test page</h1>
      <h2>Click the button to test redux</h2>
      <TestButton onClick={testToggle}>Click Me</TestButton>
    </div>
  );
};

Home.propTypes = {
  testToggle: PropTypes.func.isRequired
};

export default connect(null, { testToggle })(React.memo(Home));
