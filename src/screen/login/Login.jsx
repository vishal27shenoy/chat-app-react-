import React, { useState, useContext, useEffect } from "react";
import "./login.css";
import CustomInput from "../../component/input/CustomInput";
import { Link, json } from "react-router-dom";
import { signin } from "../../api/AuthApi";
import { useMutation } from "react-query";
import { AppContext } from "../../contextapi/Context";
import { useNavigate, useNavigation } from "react-router-dom";
import { Loginvalidator } from "../../utils/Validator";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const Login = () => {

  const navigate = useNavigate();
  const { setAuth, persist, setPersist, auth } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const mutation = useMutation({
    mutationFn: signin,
    onSuccess: (res) => {
      console.log(res);

      setAuth({
        _id: res?.data.id,
        userName: res?.data?.userName,
        email: res?.data?.email,
        profileUrl: res?.data?.profileUrl,
        accessToken: res?.data?.accessToken
      });

      console.log(auth);
      if (res?.status == 200) {
        navigate("/home");
        console.log("came");
      }
      // queryClient.invalidateQueries({ queryKey: ['todos'] })// to call another queries
    },
    onError: (err) => {
      console.log(err);
      toast.error(err?.response?.data?.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: {
          fontSize: "14px",
        },
      });
    },
  });
  // console.log(email, password)

  const handleLogin = () => {
    const isCorrect = Loginvalidator(email, password);
    if (isCorrect == true) {
      mutation.mutate({
        email,
        password,
      });
    } else {
      toast.error(isCorrect, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: {
          fontSize: "14px",
        },
      });
    }
  };

  const persistHandler = (e) => {
    setPersist(e.target.checked);

  }

  useEffect(() => {
    localStorage.setItem("persist", persist);
  }, [persist]);
  console.log(persist)
  return (
    <div className="loginContainer">
      <ToastContainer />
      <div className="loginBox">
        <span className="loginText">Login</span>
        <CustomInput
          placeholder={"Enter your email"}
          label={"EMAIL"}
          type={"text"}
          value={email}
          onChange={setEmail}
        />
        <CustomInput
          placeholder={"Enter your password"}
          label={"PASSWORD"}
          type={"password"}
          value={password}
          onChange={setPassword}
        />
        <div className="remembermeHolder">
          <input type="checkbox" name="" id="" checked={persist} onChange={persistHandler} /> Remember me
        </div>
        <button
          className="loginBtn"
          onClick={() => {
            handleLogin();
          }}
        >
          Login
        </button>
        <span className="logOr">or</span>
        <span className="newUser">
          New user ?{" "}
          <span style={{ color: "#1565C0" }}>
            <Link to={"/register"}>Register</Link>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Login;
