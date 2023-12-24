import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        movieNames: null,
        movieResults: null,
        loading: false,
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
        removeGptMovieResult: (state, action) => {
            state.movieNames = null;
            state.movieResults = null;
        },
        setLoading: (state, { payload }) => {
            state.loading = payload;
        }
    },
});

export const { toggleGptSearchView, addGptMovieResult, removeGptMovieResult, setLoading } = gptSlice.actions;

export default gptSlice.reducer;