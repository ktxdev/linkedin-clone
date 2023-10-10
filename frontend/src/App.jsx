import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed";
import AppLayout from "./ui/AppLayout";
import Network from "./pages/Network";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Navigate to="feed" replace />} />
          <Route path="feed" element={<Feed />} />
          <Route path="mynetwork" element={<Network />} />
          <Route path="myprofile" element={<Profile />} />
        </Route>
        <Route path="login" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
