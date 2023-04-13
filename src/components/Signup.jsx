import React, { useState } from "react";
import "../signup.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [counter, setCount] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (counter == 1) {
      setName("");
      setEmail("");
      setPassword("");
    }
    if (counter == 2) {
      navigate("/Login");
    }
  }, [counter]);

  const submission = (e) => {
    e.preventDefault();
    const players = JSON.parse(localStorage.getItem("Player")) || [];
    const user = {
      name: name,
      email: email,
      password: password,
    };

    players.push(user);
    localStorage.setItem("Player", JSON.stringify(players));
    alert("Registration Successful");
    setCount(counter + 1);
  };

  return (
    <div>
      <div className="forms">
        <div className="main" />
        <h1 id="heading"> Register</h1>
        <p id="para"> Create your account.it's free and only takes a minut</p>

        <form id="myform" onSubmit={submission}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            autoComplete="off"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              console.log(name);
            }}
            required
          />

          <br />
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <br />

          <input
            type="password"
            id="pass"
            name="password"
            value={password}
            placeholder="Password"
            autoComplete="off"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <span id="messages"></span>
          <br />
          <span id="mess2"></span>
          <br />

          <button type="submit" id="Rbtn">
            Register
          </button>
        </form>
        <div />
      </div>
    </div>
  );
};

export default Signup;
