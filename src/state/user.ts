import { configureStore, ThunkAction, Action, createSlice } from "@reduxjs/toolkit"
import { format } from "date-fns";

let formattedDate = format(new Date(), 'yyyy/MM/dd')

const initialState = {
    _id: "",
    name: "",
    lastname: "",
    email: "",
    back: "",
    date: formattedDate,
    switch: false,
    packageSelect: "",
    roles: [""],
    paquetesObtenidos: [""],
    userSelected: "",
    packages: [""],
    photoUrl: "",
    state: "",
    points: 0,
    __v: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => action.payload,
  },
});

export const { login } = userSlice.actions;

export const store = configureStore({
    reducer: userSlice.reducer
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>