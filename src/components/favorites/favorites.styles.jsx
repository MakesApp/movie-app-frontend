const FavoriteButton = styled.button`
  background-color: ${({ isFavorite }) => isFavorite ? 'gold' : 'transparent'};
  border: none;
  color: ${({ isFavorite }) => isFavorite ? '#fff' : '#000'};
  font-size: 1.2rem;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
`;