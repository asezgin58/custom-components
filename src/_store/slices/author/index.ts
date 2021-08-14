import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStore } from '../..';
import { IAuthor as Author, initialAuthorData } from './type';

export const authorSlice = createSlice({
    name: 'author',
    initialState: initialAuthorData,
    reducers: {
        setStoreAuthor: (state: Author, action: PayloadAction<Author>): Author => ({ ...state, ...action.payload }),
    },
});

// Type export
export type IAuthor = Author;

// Value export
export const authorValue = (state: IStore): Author => state.author;

// Actions exports
export const { setStoreAuthor } = authorSlice.actions;

// Reducer export
export default authorSlice.reducer;
