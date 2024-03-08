import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface CounterState {
  isLoggedIn: boolean;
  email?: string;
  emailVerified?: boolean;
  firstName?: string;
  lastName?: string;
  picture?: string;
  credential?: string;
  accessToken: string;
}

// Define the initial state using that type
const initialState: CounterState = {
  isLoggedIn: false,
  email: "",
  emailVerified: false,
  firstName: "",
  lastName: "",
  picture: "",
  credential: "",
  accessToken: "",
};

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    login: (state, action: PayloadAction<CounterState>) => {
      console.log(action.payload);
      console.log({ ...state, ...action.payload });
      return { ...state, ...action.payload };
    },

    logout: () => {
      return { ...initialState };
    },
  },
});

export const { login, logout } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default authSlice.reducer;
