import axios from "axios";
import { Recipe } from "../app/features/recipe/recipeSlice";

export default async (recipeId: string, userEmail: string): Promise<Recipe | undefined> => {
    try {
        const config = {
            method: "get",
            maxBodyLength: Infinity,
            url: process.env.REACT_APP_API_URL +
                `/recipe/${recipeId}`,
            headers: {
                "Content-Type": "application/json",
                user_email: userEmail,
            },
        };
        const { data }:{data:Recipe} = await axios(config);

       return data;
    } catch (error) {
        console.log("Error fetching recipe", error);
    }

    return undefined;
};


