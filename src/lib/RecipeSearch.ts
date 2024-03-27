import axios from "axios";
import { Recipe } from "../app/features/recipe/recipeSlice";

export default async (name: string, accessToken:string): Promise<Recipe[] | undefined> => {
    try {
        const config = {
            method: "post",
            maxBodyLength: Infinity,
            url: process.env.REACT_APP_API_URL +
                `/recipe/search?name=${name}`,
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + accessToken,
            },
        };
        const { data }:{data:Recipe[]} = await axios(config);

       return data;
    } catch (error) {
        console.log("Error fetching recipe", error);
    }

    return undefined;
};


