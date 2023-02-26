import React from 'react';
import styled from 'styled-components';



const Favorites = ({ isFavorite, onClick }) => {
  return (
    <FavoriteButton isFavorite={isFavorite} onClick={onClick}>
      {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    </FavoriteButton>
  );
};

export default Favorites;