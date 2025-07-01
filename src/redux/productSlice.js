import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const newProduct = {
                id: nanoid(),
                ...action.payload,
            };
            state.items.push(newProduct);
        },
    },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
