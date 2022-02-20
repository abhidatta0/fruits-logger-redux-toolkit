import {configureStore} from '@reduxjs/toolkit';
import fruitsSlice from './slices/fruits';

const store = configureStore({
    reducer: {
        fruits: fruitsSlice.reducer,
    },
});

export default store;