import { createSlice } from '@reduxjs/toolkit'
const initialItems = [];

const itemSlice = createSlice({
    name: "items", 
    initialState: initialItems,
    reducers: {
        addInitialsItems: (store, action) => {
            console.log('action--',action)
            return action.payload;
        }
    }
})

export const itemAction = itemSlice.actions;
export default itemSlice;