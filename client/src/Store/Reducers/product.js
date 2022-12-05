import { createSlice } from '@reduxjs/toolkit'
import {productsThunk} from '../Actions/product'

const initialState = {
  products: null,
  isloading: false,
  isError: "",
  isSuccess: false,
} 

// Then, handle actions in your reducers:
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(productsThunk.pending, (state, action) => {
      state.isloading = true;
      state.isSuccess = false;
      state.isError = "";
      state.products = null;
    });
    builder.addCase(productsThunk.fulfilled, (state, action) => {
        state.isloading = false;
        state.isSuccess = true;
        state.isError = "";
        state.products = {...action.payload};
      });
      builder.addCase(productsThunk.rejected, (state, action) => {
        state.isloading = false;
        state.isSuccess = false;
        state.isError = action.payload ?? "Error occured";
        state.products = null;
      });
  },
})
export default productSlice.reducer
