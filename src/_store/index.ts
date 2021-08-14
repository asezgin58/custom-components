import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import combinedSlices from './slices';

const resetAction: any = { type: 'reset' };

const rootSlices = (state: any, action: any) => {
    if (action === resetAction) state = undefined;
    return combinedSlices(state, action);
};

export const store = configureStore({
    reducer: rootSlices,
    middleware: [...getDefaultMiddleware()],
});

export type IStore = ReturnType<typeof store.getState>;
export type IDispatch = typeof store.dispatch;
export const resetStore = (): any => resetAction;
