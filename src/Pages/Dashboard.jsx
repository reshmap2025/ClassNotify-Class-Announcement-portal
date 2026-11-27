
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Dashboard() {

  const location = useLocation();
  const navigate = useNavigate();

  const [userdata, setuserdata] = useState("");

  function displaydata() {
    setuserdata(location.state || {
      name: "Admin",
      email: "admin@classnotify.com"
    });
  }

  function logout() {
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow">

        <h1 className="text-3xl font-bold text-gray-800">
          Admin Dashboard
        </h1>

        <p className="mt-3 text-gray-500">
          Welcome to ClassNotify!
        </p>

        <button
          onClick={displaydata}
          className="mt-5 bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
        >
          DISPLAY ADMIN DATA
        </button>

        <h2 className="mt-8 text-xl font-semibold text-gray-800">
          Admin Details
        </h2>

        <p className="mt-3 text-gray-600">
          Name: {userdata.name}
        </p>

        <p className="mt-2 text-gray-600">
          Email: {userdata.email}
        </p>

        <button
          onClick={logout}
          className="mt-6 bg-red-600 text-white px-5 py-2 rounded-lg"
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Dashboard;
