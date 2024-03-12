import { configureStore, ThunkAction, Action, createSlice } from "@reduxjs/toolkit"

const initialState = {
    _id: "",
    name: "",
    lastname: "",
    email: "",
    roles: [""],
    packages: [""],
    photoUrl: "",
    state: "",
    points: 0,
    __v: 0,
    // back: ""
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      action.payload
      // state.back = action.payload.back;
    },
    logout: (state, action) => {
      return {
        ...initialState,
      };
    },
  },
});

export const { login, logout } = userSlice.actions;

export const store = configureStore({
    reducer: userSlice.reducer
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>