import React from 'react'
import MovieCard from './MovieCard';
import { useSelector } from "react-redux";

const MovieList = ({ title, movies }) => {
    const loading = useSelector((store) => store?.movies?.loading)
    return (
        loading ? null :
            <>
                <div className='px-6'>
                    <h1 className='text-lg md:text-3xl py-4 text-white'>{title}</h1>
                    <div className='flex overflow-x-scroll'>
                        <div className='flex'>
                            {movies?.map((movie) => (
                                <MovieCard key={movie.id} posterPath={movie.poster_path} />
                            ))}
                        </div>
                    </div>
                </div >
            </>
    )
}

export default MovieList
