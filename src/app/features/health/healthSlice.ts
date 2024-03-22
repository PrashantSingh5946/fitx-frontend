import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Recipe from "../../../pages/recipe/Recipe";

interface sleepData { data: { hours: number, minutes: number }, fetchTimeInMillis: number };
interface heartData { data: { y: number, x: string }[] };
interface stepsData { data: number[], fetchTimeInMillis: number };

interface initialStateType { sleep: sleepData, heartData: heartData, stepsData: stepsData };


let initialState: initialStateType = {
    sleep: { data: { hours: 0, minutes: 0 }, fetchTimeInMillis: 0 },
    heartData: { data: [{ x: "", y: 0 }], fetchTimeInMillis: 0 },
    stepsData: { data: [0], fetchTimeInMillis: 0 },

};



export const recipeSlice = createSlice({

    name: "recipe",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setHealthData: (state, action: PayloadAction<{ sleep?: sleepData, heartData?: heartData, stepsData?: stepsData }>) => {
            return { ...state, ...action.payload };
        }
    },
});

// Add the missing `fetchTimeInMillis` property to the `heartData` object
interface heartData { data: { y: number, x: string }[], fetchTimeInMillis: number };


export const { setHealthData } = recipeSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default recipeSlice.reducer;
