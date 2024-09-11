import { configureStore } from '@reduxjs/toolkit'
import itemSlice from './slice/itemSlice';
import bagSlice from './slice/bagSlice';

const myntraStore = configureStore({
    reducer: {
        items: itemSlice.reducer,
        bag: bagSlice.reducer,
    }
})

export default myntraStore;