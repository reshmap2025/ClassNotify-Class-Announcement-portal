
import { useState } from "react";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const formsubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
  };

  return (
    <>
      <div>HI</div>

      <form onSubmit={formsubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter your password"
          required
          value={password}
          onChange={(e) => setPass(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Login;
