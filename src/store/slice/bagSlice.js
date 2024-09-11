import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
    name: 'bag',
    initialState: [],
    reducers: {
        addToBag: (state, action) => {
            state.push(action.payload);
            let localItems = localStorage.getItem('itemInCart')
            localStorage.setItem('itemInCart', localItems+","+action.payload)
        },
        removeFromBag: (state, action) => {
            let data = state.filter(itemId => itemId !== action.payload)
            localStorage.setItem('itemInCart', data)
            return data;
        },
    }
});

export const bagAction = bagSlice.actions;

export default bagSlice;