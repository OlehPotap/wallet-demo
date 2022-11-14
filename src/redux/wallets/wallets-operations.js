import { createAsyncThunk } from "@reduxjs/toolkit";

import walletsAPI from "../../api/walletsAPI";

export const addWallet = createAsyncThunk("wallets/addWallet", async (body) => {
  const addedProduct = await walletsAPI.add(body);
  return addedProduct;
});

export const getWallets = createAsyncThunk(
  "wallets/getWallets",
  async (body) => {
    const DailyProducts = await walletsAPI.getAll(body);
    return DailyProducts;
  }
);
