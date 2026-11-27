
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
      navigate("/admin/dashboard");
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-5">
      <div className="bg-white w-full max-w-lg p-10 rounded-2xl shadow-lg">

        <form onSubmit={handleLogin} className="flex flex-col gap-5">

          <input type="email" placeholder="Enter your email" value={email}
          onChange={(e) => setEmail(e.target.value)} required className="w-full p-4 border border-gray-300 rounded-lg" />

          <input type="password" placeholder="Enter your password" value={password}
          onChange={(e) => setPassword(e.target.value)} required className="w-full p-4 border border-gray-300 rounded-lg" />

          <button type="submit" className="w-full bg-green-700 text-white p-4 rounded-lg font-semibold hover:bg-green-800">
            Login
          </button>

        </form>

      </div>
    </div>
  );
}

export default Login;
