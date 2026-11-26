
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Dashboard() {
    const location = useLocation();
    const [userdata, setuserdata] = useState("");

    function displaydata() {
        setuserdata(location.state);
        console.log(location.state);
    }

    return (
        <>
            <div className="min-h-screen bg-gray-100 p-8">
                <h1 className="text-3xl font-bold text-blue-600">ClassNotify Dashboard</h1>
                <p className="mt-3 text-gray-600">Welcome to ClassNotify!</p>
                <button onClick={displaydata} className="mt-5 rounded bg-blue-600 px-5 py-2 text-white">Display User Data</button>
                <h2 className="mt-5 text-lg font-semibold">User Details</h2>
                <p>{userdata?.name}</p>
                <p>{userdata?.email}</p>
            </div>
        </>
    );
}

export default Dashboard;
