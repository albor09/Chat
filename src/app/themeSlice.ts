import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface Theme {
  name: string;
  bg: string;
  primary: string;
  primaryFont: string;
  secondaryFont: string;
  secondary: string;
  interactive: string;
  myMsg: string;
  peerMsg: string;
}

export interface Themes {
  selected: number;
  themes: Array<Theme>;
}

const initState: Themes = {
  selected: 0,
  themes: [
    {
      name: "dark",
      bg: "black", //"#141414",
      primary: "#171717",
      secondary: "#424242",
      primaryFont: "white",
      secondaryFont: "#89bed0",
      interactive: "#747474",
      myMsg: "#484848",
      peerMsg: "#262626",
    },
  ],
};

const themesSlice = createSlice({
  name: "theme",
  initialState: initState,
  reducers: {
    setSelectedTheme: (state, action: PayloadAction<number>) => {
      state.selected = action.payload;
    },
  },
});

export const { setSelectedTheme } = themesSlice.actions;
export const selectThemes = (state: RootState) => state.themes;

export default themesSlice.reducer;
