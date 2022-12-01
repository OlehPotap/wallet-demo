import { useState } from "react";
import { Link } from "react-router-dom";
import s from "./registerPage.module.scss";

const RegisterPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <input
        onChange={(event) => {
          setUserName(event.target.value);
        }}
        value={userName}
        type="text"
        placeholder="name"
      />
      <input
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        value={password}
        type="password"
        placeholder="password"
      />
      <button type="button">Register</button>
      <Link to="/login">Login</Link>
    </>
  );
};

export default RegisterPage;
