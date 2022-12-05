import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchProducts } from '../API/productsApi'

export const productsThunk = createAsyncThunk(
    'products/fetch-products-by-params',
    async (productData, { rejectWithValue }) => {
      try {
        const response = await fetchProducts();
        return response.data
      } catch (err) {
        // Use `err.response.data` as `action.payload` for a `rejected` action,
        // by explicitly returning it using the `rejectWithValue()` utility
        return rejectWithValue(err.response.data)
      }
    }
  );