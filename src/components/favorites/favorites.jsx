import React from 'react';
import styled from 'styled-components';

const FavoriteButton = styled.button`
  background-color: ${({ isFavorite }) => isFavorite ? 'gold' : 'transparent'};
  border: none;
  color: ${({ isFavorite }) => isFavorite ? '#fff' : '#000'};
  font-size: 1.2rem;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
`;

const Favorites = ({ isFavorite, onClick }) => {
  return (
    <FavoriteButton isFavorite={isFavorite} onClick={onClick}>
      {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    </FavoriteButton>
  );
};

export default Favorites;