import { configureStore } from "@reduxjs/toolkit";
import WalletsReducer from "./wallets/wallets-slice";

export const store = configureStore({
  reducer: {
    wallets: WalletsReducer,
  },
});
