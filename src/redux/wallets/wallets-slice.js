import { createSlice } from "@reduxjs/toolkit";
import {
  // addWallet,
  getWallets,
} from "./wallets-operations";

const initialState = {
  walletsList: [],
  error: null,
  loading: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [getWallets.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getWallets.fulfilled]: (state, { payload }) => {
      if (!payload) {
        state.walletsList = [];
      } else {
        state.walletsList = payload;
        // console.log(payload);
      }

      state.loading = false;
    },
    [getWallets.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default productsSlice.reducer;
