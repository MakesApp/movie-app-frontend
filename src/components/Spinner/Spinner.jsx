import React from 'react';

import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  to { transform: rotate(360deg); }
`;



const Spinner = () => (
  <SpinnerWrapper>
    <SpinnerInner />
  </SpinnerWrapper>
);

export default Spinner;
/**function Spinner() {
	return <div></div>;
}

export default Spinner; */