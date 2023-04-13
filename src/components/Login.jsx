import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Login = () => {
  const [emailLog, setEmailLog] = useState("");
  const [passlog, setPassLog] = useState("");
  const [counter, setCounter] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (counter == 1) {
      alert("Login Successful");
      setEmailLog("");
      setPassLog("");
    }
    if (counter == 2) {
      navigate("/Box");
    }
  }, [counter]);

  const HandleLogin = (e) => {
    e.preventDefault();
    const playersData = JSON.parse(localStorage.getItem("Player"));

    playersData.map((Data) => {
      console.log(Data.email);
      if (Data.email == emailLog && Data.password == passlog) {
        setCounter(counter + 1);
        alert("Login Successful");
        return;
      } else console.log("login errror");
    });


  };
  return (
    <>
      <div className="forms">
        <div className="main" />
        <h1 id="heading"> Login</h1>

        <form id="myform" onSubmit={HandleLogin}>
          <br />
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
            value={emailLog}
            onChange={(e) => {
              setEmailLog(e.target.value);
            }}
          />
          <br />
          <br />

          <input
            type="password"
            id="pass"
            name="password"
            value={passlog}
            placeholder="Password"
            autoComplete="off"
            onChange={(e) => {
              setPassLog(e.target.value);
            }}
          />
          <br />
          <span id="messages"></span>
          <br />
          <span id="mess2"></span>
          <br />

          <button type="submit" id="Rbtn">
            login
          </button>
        </form>
        <div />
      </div>
    </>
  );
};

export default Login;
