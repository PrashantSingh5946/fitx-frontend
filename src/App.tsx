import { ProtectedLayout } from "./layouts/ProtectedLayouts";
import Dashboard from "./pages/dashboard/Dashboard";
import Activity from "./pages/activity/page";
import Profile from "./pages/profile/page";
import Login from "./pages/login/Login";
import Recipe from "./pages/recipe/Recipe";
import RecipeDetails from "./components/recipe/RecipeDisplay";
import TermsOfService from "./pages/legal/TermsOfService";

import {
  BrowserRouter,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/homepage/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/" element={<ProtectedLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/activity" element={<Activity />} />

          <Route path="/recipe" element={<Recipe />} />
          <Route path="/recipe/show" element={<RecipeDetails />} />

          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<TermsOfService />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
