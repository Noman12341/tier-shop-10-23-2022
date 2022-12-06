import { createSlice } from "@reduxjs/toolkit";
import { productsThunk } from "../Actions/product";

const initialState = {
  products: null,
  isLoading: false,
  isError: "",
  isSuccess: false,
  selectedProduct: null,
};

// Then, handle actions in your reducers:
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    setSelectedProduct: (state, action) => {
      console.log(action.payload)
      const idx = state.products.data.findIndex(
        (item) => item._id === action.payload
      );
      state.selectedProduct = { ...state.products.data[idx] };
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(productsThunk.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = "";
      state.products = null;
    });
    builder.addCase(productsThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = "";
      state.products = { ...action.payload };
    });
    builder.addCase(productsThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = action.payload ?? "Error occured";
      state.products = null;
    });
  },
});

export const { setSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
