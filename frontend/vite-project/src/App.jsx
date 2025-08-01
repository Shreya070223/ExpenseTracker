import React from 'react'
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";

import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Home from './pages/Dashboard/Home';
import Expense from './pages/Dashboard/Expense';
import Income from './pages/Dashboard/Income';


const App = () => {
  return (
    <div className='text-2xl'>
      <Router>
        <Routes>
          <Route path="/" element={<Root/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/dashboard" element={<Home/>}/>
          <Route path="/income" element={<Income/>}/>
          <Route path="/expense" element={<Expense/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;

const Root=()=>{
  const isAuthenticated=!!localStorage.getItem("token");
  return isAuthenticated?(
    <Navigate to="/dashboard"/>
  ):(
    <Navigate to="/login"/>
  );
};