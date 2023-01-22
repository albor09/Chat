import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface ChatState {
  selectedChatId: string | null;
  isSideMenuOpen: boolean;
  myId: string;
}

const initState: ChatState = {
  selectedChatId: null,
  isSideMenuOpen: true,
  myId: "",
};

const chatSlice = createSlice({
  name: "chatState",
  initialState: initState,
  reducers: {
    selectChat: (state, action: PayloadAction<string>) => {
      state.selectedChatId = action.payload;
    },
    switchSideMenu: (state) => {
      state.isSideMenuOpen = !state.isSideMenuOpen;
    },
  },
});

export const { selectChat, switchSideMenu } = chatSlice.actions;
export const selectChatState = (state: RootState) => state.chatState;

export default chatSlice.reducer;
