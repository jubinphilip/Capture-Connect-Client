import React, { useState, useEffect } from "react";
import AXIOS from "axios";
import { Container, Row, Col, Button, Form,Table } from 'react-bootstrap';
import { FaUserEdit } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
export default function Pgsamples() {
  const [uname, setUname] = useState("");
  const [sp, setSp] = useState([]);
  const idn = sessionStorage.getItem("userId");

  useEffect(() => {
    console.log("UseEffect Working");
    const url = `http://localhost:9000/fetchpgsamples/${idn}`;
    AXIOS.get(url).then((res) => {
      setSp(res.data);
      console.log("Data Reached");
    });
  }, []);


  return (
    <>
      <h3>Sample Photographs</h3>
      
    
      <Table className="border">
        <thead>
          <tr>
            <th>Id</th>
          
            <th>Image</th>
            <th>Amount</th>
            
          </tr>
        </thead>
        <tbody>
          {sp.map((ls) => {
            return (
              <tr key={ls._id}>
              <td>{ls._id}</td>
               
                <td>
                {
                  ls.sample[0].map((lis)=>{
return(
  <img
                 
                  src={`http://localhost:9000/${lis.filename}`}
                    className="rounded thumnail me-2"
                    width={50}
                    height={50}
                    alt="Photographer"
                  />
                  
)
                  })
                }
                  
                </td>
                <td>{ls.amount}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
     
    </>
  );
}
