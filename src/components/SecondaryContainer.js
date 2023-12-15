import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className='z-20 bg-black'>
        <div className='-mt-52 pl-12 relative'>
          <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
          <MovieList title="Trending" movies={movies.nowPlayingMovies} />
          <MovieList title="Popular" movies={movies.popularMovies} />
          <MovieList title="Upcoming Movies" movies={movies.nowPlayingMovies} />
          <MovieList title="Horror Movies" movies={movies.nowPlayingMovies} />
        </div>
      </div >
    )
  )
}

export default SecondaryContainer