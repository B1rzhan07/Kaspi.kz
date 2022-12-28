import { createSlice } from '@reduxjs/toolkit';
import arr from '../../placeholder.json';
const initialState = {
    products: [],
    idCategory: 0,
}
const productSlice = createSlice({
    name: 'product',
    initialState,

    reducers: {
        setProducts: (state, action) => {
            state.products = arr;

        },
        setIdCategory: (state, action) => {
            state.idCategory = action.payload;
        }




    }
});
export const { setProducts, setIdCategory } = productSlice.actions;
export default productSlice.reducer;