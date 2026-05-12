import React from "react"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home"
import Tracking from "./pages/Tracking/Tracking";
import Dashboard from "./pages/Dashboard/Dashboard";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";

const App = () => {
  return (
    <>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Tracking" element={<Tracking/>}></Route>
        <Route path="/Dashboard" element={<Dashboard/>}></Route>
        <Route path="/AdminDashboard" element = {<AdminDashboard/>}></Route>
      </Routes>
    </Router>
  </>
  )
}

export default App