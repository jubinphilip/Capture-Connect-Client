import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Pgregister from "./Service/pgreg";
import Userregister from "./Users/usereg";
import Splogin from "./Service/spLogin";
import Navhead from "./Admin/navhead";
import Viewsp from "./Admin/viewsp";
import Adhome from "./Admin/adminhome";
import Pghome from "./Service/pghome";
import Empedit from "./Service/empedit";
import Addaccessory from "./Service/addsamples";
import Admindash from "./Admin/admindash";
import Userhome from "./Users/userhome";
import Userdash from "./Users/userdash";
import Footer from "./footer";
import Home from "./home";
import About from "./about";
import './styles.css'
import Addsamples from "./Service/addsamples";
import Viewsamples from "./Users/viewsamples";
import Userrating from "./Users/userratings";

export default function App() {
 return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/adminhome' element={<Adhome />} />
        <Route path='/pgreg' element={<Pgregister />} />
        <Route path='/spLogin' element={<Splogin />} />
        <Route path='/viewsp' element={<Viewsp />} />
        <Route path='/about' element={<About/>} />
        <Route path='/addsamples'  element={<Addsamples />} />
        <Route path='/pghome/*' element={<Pghome/>} />
        <Route path='/userhome' element={<Userhome/>} />
        <Route path='/admindash/*' element={<Admindash />} />
        <Route path='/userdash/*' element={<Userdash />} />
        <Route path='/viewsamples/:id' element={<Viewsamples/>}/>
        <Route path='/usereg' element={<Userregister />} />
        <Route path="/userratings/:id" element={<Userrating />} />
       <Route path="/empedit/:id" element={<Empedit/>}></Route>
       <Route path='/' element={<Navigate to="/home" />} />
      </Routes>
    </Router>
 );
}
