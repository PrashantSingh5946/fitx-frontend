import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface AuthState {
  isLoggedIn?: boolean;
  email?: string;
  emailVerified?: boolean;
  firstName?: string;
  lastName?: string;
  picture?: string;
  credential?: string;
  accessToken?: string;
  refreshToken?: string;
  goals?: string[];
}

// Define the initial state using that type
const initialState: AuthState = {
  isLoggedIn: false,
  email: "",
  emailVerified: false,
  firstName: "",
  lastName: "",
  picture: "",
  credential: "",
  accessToken: "",
  refreshToken: "",
  goals: [],
};

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    login: (state, action: PayloadAction<AuthState>) => {
      const goals = action.payload.goals;
      const prevGoals = state.goals;

      let newGoals: string[] = [];

      if (goals && prevGoals) {
        newGoals = [...goals];
      } else if (goals) {
        newGoals = [...goals];
      } else if (prevGoals) {
        newGoals = [...prevGoals];
      }

      console.log("New Goals", newGoals);

      return { ...state, ...action.payload, goals: [...newGoals] };
    },

    logout: () => {
      localStorage.removeItem("persist:root");
      return { ...initialState };
    },
  },
});

export const { login, logout } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default authSlice.reducer;
