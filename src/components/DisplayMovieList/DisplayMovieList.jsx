import React from 'react'
import MovieCard from '../MovieCard'

const cardsData = [
  {
    name: 'Card 1',
    year: '2000.',
    poster:'img',
    rating:'2.0',
  },
  {
    name: 'Card 2',
    year: '2001',
    poster:'img',
    rating:'3.0',
  },
  {
    name: 'Card 3',
    year: '2002',
    poster:'img',
    rating:'4.0',
  },
  {
    name: 'Card 4',
    year: '2004',
    poster:'img',
    rating:'5.0',
  },

];
const DisplayMovieList = () => {
  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {cardsData.map((card, index) => (
        <MovieCard key={index} name={card.name} year={card.year} poster={card.poster} rating={card.rating} />
      ))}
    </div>
  )
}


export default DisplayMovieList