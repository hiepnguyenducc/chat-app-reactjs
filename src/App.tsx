import {Route,Routes,BrowserRouter as Router} from "react-router-dom";
import Register from "./layouts/frontend/auth/register.tsx";
import Home from "./layouts/frontend/Home.tsx";
import  axios from "axios";
import Login from "./layouts/frontend/auth/login.tsx";
import ForgetPassword from "./layouts/frontend/auth/forget-password.tsx";
import './assets/css/style.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
axios.defaults.baseURL = "http://127.0.0.1:8001/"
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers.post['Accept'] = 'application/json';
  axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
  axios.defaults.withCredentials = true;
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
           <Route path={"/register"} element={<Register/>}/>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/login"}  element={<Login/>}/>
            <Route path={"/forget-password"} element={<ForgetPassword/>}/>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
