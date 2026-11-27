
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please enter email and password");
    } else {
      navigate("/admin-dashboard", {
        state: {
          name: "Admin",
          email: email
        }
      });
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-5">

      <div className="bg-white w-full max-w-lg p-10 rounded-2xl shadow-lg text-center">

        <div className="w-16 h-16 bg-green-100 rounded-2xl mx-auto mb-5"></div>

        <h1 className="text-3xl font-bold text-gray-800">
          ClassNotify
        </h1>

        <p className="text-gray-500 mt-3 mb-8">
          Admin sign in to manage class announcements
        </p>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-4 border rounded-lg mb-5 outline-none"
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-4 border rounded-lg mb-6 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-green-700 text-white p-4 rounded-lg font-semibold hover:bg-green-800"
          >
            Sign In
          </button>

        </form>

        <p className="text-sm text-gray-400 mt-8">
          Authorized college staff only
        </p>

      </div>

    </div>
  );
}

export default Login;
