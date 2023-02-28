import React, { useState } from 'react';
import styled from 'styled-components';



const HeartButton = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <HeartIcon active={active} onClick={handleClick} aria-label="Favorite">
      <span className="visually-hidden">Favorite</span>
    </HeartIcon>
  );
};

export default HeartButton;
