
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Announcements from "./Pages/Announcements";
import CreateAnnouncement from "./Pages/CreateAnnouncement";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/admin-dashboard" element={<Dashboard />} />

        <Route path="/announcements" element={<Announcements />} />

        <Route path="/create-announcement" element={<CreateAnnouncement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
