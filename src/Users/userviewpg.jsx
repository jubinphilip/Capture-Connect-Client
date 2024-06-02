import React, { useState, useEffect } from "react";
import AXIOS from "axios";
import { Container, Row, Col, Button, Form,Table } from 'react-bootstrap';
import { FaUserEdit } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Empedit from "../Service/empedit";
export default function Userviewpg() {
  const [uname, setUname] = useState("");
  const [sp, setSp] = useState([]);

  useEffect(() => {
    console.log("UseEffect Working");
    const url = "http://localhost:9000/fetchpgs";
    AXIOS.get(url).then((res) => {
      setSp(res.data);
      console.log("Data Reached");
    });
  }, []);

  return (
    <>
      <h3>Photographers</h3>
      
    
      <Table className="border">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Service</th>
            <th>AMount</th>
            <th>Place</th>
            <th>Image</th>
          
            
          </tr>
        </thead>
        <tbody>
          {sp.map((ls) => {
            return (
              <tr key={ls._id}>
                <td>{ls.fullname}</td>
                <td>{ls.email}</td>
                <td>{ls.number}</td>
                <td>{ls.service}</td>
                <td>${ls.amount}</td>
                <td>{ls.place}</td>
                
                <td>
                  <img
                    src={`http://localhost:9000/${ls.image}`}
                    className="rounded"
                    width={50}
                    height={50}
                    alt="Photographer"
                  />
                </td>
               
                <td>
                <a href={`/viewsamples/${ls._id}`}>
  <Button
    type="button"
    variant='danger'
   
  >
    View Samples/Book
  </Button>
  
</a>
<a href={`/userratings/${ls._id}`}>
  <Button
    type="button"
    variant='danger'
    style={{ margin: '2px' }}
  >
   Ratings and reviews
  </Button>
  
</a>
<a href={`/viewsamples/${ls._id}`}>
  
  
</a>

              </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
     
    </>
  );
}
