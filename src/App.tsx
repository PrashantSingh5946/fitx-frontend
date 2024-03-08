import { ProtectedLayout } from "./layouts/ProtectedLayouts";
import Dashboard from "./pages/dashboard/page";
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
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
