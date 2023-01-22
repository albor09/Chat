import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface ServicesState {
  auth: boolean;
}

const initState: ServicesState = {
  auth: false,
};

const servicesSlice = createSlice({
  name: "authorization",
  initialState: initState,
  reducers: {
    setAuthServiceEnabled: (state) => {
      state.auth = true;
    },
  },
});

export const { setAuthServiceEnabled } = servicesSlice.actions;
export const selectServicesState = (state: RootState) => state.servicesState;

export default servicesSlice.reducer;
