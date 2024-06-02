import React, { useState, useEffect } from "react";
import AXIOS from "axios";
import { Table, Button } from "react-bootstrap";
import { FaUserEdit } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Empedit from "../Service/empedit";
export default function Viewuser() {
  const [sp, setSp] = useState([]);

  useEffect(() => {
    console.log("UseEffect Working");
    const url = "http://localhost:9000/viewusrs";
    AXIOS.get(url).then((res) => {
      setSp(res.data);
      console.log("Data Reached");
    });
  }, []);

  

  return (
    <>
      <h3>User Details</h3>
      <Table className="border">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {sp.map((ls) => {
            return (
              <tr key={ls._id}>
                <td>{ls.fullname}</td>
                <td>{ls.email}</td>
                <td>{ls.number}</td>
               
               
               
               
              </tr>
            );
          })}
        </tbody>
      </Table>
     
    </>
  );
}
