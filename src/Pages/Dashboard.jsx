
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Dashboard() {

  const location = useLocation();

  const [userdata, setuserdata] = useState("");

  function displaydata() {
    setuserdata(location.state);
  }

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow">

        <p className="mt-3 text-gray-600">
          {userdata.name}
        </p>

        <p className="mt-2 text-gray-600">
          {userdata.email}
        </p>

      </div>
    </div>
  );
}

export default Dashboard;
