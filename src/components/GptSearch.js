import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BG_URL } from '../utils/constants';
import { useSelector } from 'react-redux';
import { Shimmer } from "./Shimmer";

const GptSearch = () => {
    const loading = useSelector((store) => store?.gpt?.loading);

    return (
        <>
            <div className='fixed -z-10'>
                <img
                    className='h-screen object-cover md:w-screen'
                    alt='logo'
                    src={BG_URL}
                />
            </div>
            <div className='pt-[30%] md:p-0'>
                <GptSearchBar />
                <div className="md:block hidden">
                    {loading ? <Shimmer /> : <GptMovieSuggestion />}
                </div>
            </div>
        </>
    )
}

export default GptSearch
