import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../utils/dbModels/User";
import { RootState } from "./store";

export interface CurrentAccState {
  id: string | null;
  nickname: string | null;
  photoUrl?: string;
}

const initState: CurrentAccState = {
  id: null,
  nickname: null,
};

const currentAccSlice = createSlice({
  name: "currentAcc",
  initialState: initState,
  reducers: {
    setAcc: (state, action: PayloadAction<CurrentAccState>) => {
      state.id = action.payload.id;
      state.nickname = action.payload.nickname;
      state.photoUrl = action.payload.photoUrl;
    },
  },
});

export const { setAcc } = currentAccSlice.actions;
export const selectCurrentAcc = (state: RootState) => state.curretAcc;

export default currentAccSlice.reducer;
