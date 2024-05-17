import { ProtectedLayout } from "./layouts/ProtectedLayouts";
import Dashboard from "./pages/dashboard/Dashboard";
import Activity from "./pages/activity/page";
import Profile from "./pages/profile/page";
import Login from "./pages/login/Login";
import Recipe from "./pages/recipe/Recipe";
import RecipeDetails from "./components/recipe/RecipeDisplay";
import TermsOfService from "./pages/legal/TermsOfService";
import Goals from "./pages/goals/page"

import {
  BrowserRouter,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/homepage/Home";
import { BackgroundGradientAnimation } from "./components/ui/BackgroundGradientAnimation";
import TasksManager from "./pages/tasks/page";

function App() {
  return (
    <div className="" style={{zIndex:20, position:"relative"}}>

   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/" element={<ProtectedLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/activity" element={<Activity />} />

            <Route path="/goals" element={<Goals/>}/>
            <Route path="/tasks" element={<TasksManager/>}/>

            <Route path="/recipe" element={<Recipe />} />
            <Route path="/recipe/:recipeId/show" element={<RecipeDetails />} />


            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<TermsOfService />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
