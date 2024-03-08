import { ProtectedLayout } from "./layouts/ProtectedLayouts";
import Dashboard from "./pages/dashboard/page";
import Activity from "./pages/activity/page";
import Search from "./pages/search/page";
import Profile from "./pages/profile/page";
import Camera from "./pages/camera/page";

import Login from "./pages/login/page";

import {
  BrowserRouter,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/search" element={<Search />} />
          <Route path="/camera" element={<Camera />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
