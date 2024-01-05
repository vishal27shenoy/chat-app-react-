import "./App.css";
import Sidebar from "./component/Sidebar/Sidebar";
import Chatbox from "./component/chatbox/Chatbox";
import { AppContextProvider } from "./contextapi/Context";
import Register from "./screen/Register screen/Register";
import Login from "./screen/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Home from "./screen/home/Home";
import RequireAuth from "./auth/RequireAuth";
import PersistLogin from "./auth/PersistLogin";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PersistLogin />}>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route element={<RequireAuth />}>
              <Route path="/home" element={<Home />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
