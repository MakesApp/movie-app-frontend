const HeartIcon = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  position: relative;

  &::before,
  &::after {
    content: '';
    background-color: #f44336;
    border-radius: 50%;
    position: absolute;
  }

  &::before {
    width: 12px;
    height: 20px;
    top: -10px;
    left: 6px;
  }

  &::after {
    width: 12px;
    height: 20px;
    top: -10px;
    right: 6px;
  }

  &:hover::before,
  &:hover::after {
    background-color: #e53935;
  }

  ${({ active }) =>
    active &&
    `
      &::before {
        transform: rotate(-45deg) translate(-8px, 0);
      }

      &::after {
        transform: rotate(45deg) translate(8px, 0);
      }
  `}
`;