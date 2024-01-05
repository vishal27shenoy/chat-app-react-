import React, { useState, useContext } from 'react'
import './register.css';
import CustomInput from '../../component/input/CustomInput';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { signup } from '../../api/AuthApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validator } from '../../utils/Validator';
import { AppContext } from '../../contextapi/Context';
const Register = () => {
  const { setAuth } = useContext(AppContext);
  const navigate = useNavigate();
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const mutation = useMutation({
    mutationFn: signup,
    onSuccess: (res) => {

      setAuth({
        _id: res?.data.id,
        userName: res?.data?.userName,
        email: res?.data?.email,
        profileUrl: res?.data?.profileUrl,
        accessToken: res?.data?.accessToken
      });
      if (res?.status == 200) {
        navigate("/home");
      }
      // queryClient.invalidateQueries({ queryKey: ['todos'] })// to call another queries 
    },
    onError: (err) => {

      toast.error(err?.response?.data?.error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: {
          fontSize: "14px"
        }
      });
    }

  })

  const handleRegister = () => {
    const isCorrect = validator(userName, email, password);
    if (isCorrect == true) {
      mutation.mutate({
        userName, email, password
      })
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
          fontSize: "14px"
        }
      });
    }
  }
  return (
    <div className='registerContainer'>
      <ToastContainer />
      <div className='registerBox'>
        <span className='regTitle'>Register</span>
        <CustomInput placeholder={"Enter your username"} type={"text"} label={"USERNAME"} value={userName} onChange={setUsername} />
        <CustomInput placeholder={"Enter your email"} type={"email"} label={"EMAIL"} value={email} onChange={setEmail} />
        <CustomInput placeholder={"Enter your password"} type={"password"} label={"PASSWORD"} value={password} onChange={setPassword} />
        <button className='registerBtn' onClick={() => handleRegister()}>Register</button>
        <span className='regOr'>or</span>
        <span className='alreadyUser'>Already a user ? <Link to={'/'}><span style={{ color: '#1565C0' }}>Login</span></Link></span>
      </div>
    </div>
  )
}

export default Register;