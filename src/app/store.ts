import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import servicesStateReducer from "./servicesSlice";
import chatStateReducer from "../pages/Chat/chatSlice";
import urrentAccReducer from "./currentAccSlice";

export const store = configureStore({
  reducer: combineReducers({
    themes: themeReducer,
    servicesState: servicesStateReducer,
    chatState: chatStateReducer,
    curretAcc: urrentAccReducer,
  }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
