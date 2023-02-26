const SpinnerWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;
`;

const SpinnerInner = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 32px;
  height: 32px;
  margin: 4px;
  border: 4px solid #fff;
  border-radius: 50%;
  animation: ${spinAnimation} 0.8s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
`;