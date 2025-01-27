import { useState } from "react";

const AuthFormLogin = ({ submitFunction }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    submitFunction({ email, password });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="label">Email
        <input className="input" required type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label className="label">Password
        <input className="input" required type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <button className="buttonLogin" type="submit">Login</button>
    </form>
  );
};

export default AuthFormLogin;
