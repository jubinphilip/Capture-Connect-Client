import React, { useState, useEffect } from "react";
import AXIOS from "axios";
import { Container, Row, Col, Button, Form,Table } from 'react-bootstrap';
import { FaUserEdit } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Empedit from "../Service/empedit";
export default function Viewsp() {
  const [uname, setUname] = useState("");
  const [sp, setSp] = useState([]);

  useEffect(() => {
    console.log("UseEffect Working");
    const url = "http://localhost:9000/fetchsps";
    AXIOS.get(url).then((res) => {
      setSp(res.data);
      console.log("Data Reached");
    });
  }, []);

  const deleteUser = (userId) => {
    let ans = window.confirm('Are you sure to Delete?');
    if (ans) {
      const url = `http://localhost:9000/deletesp/${userId}`;
      AXIOS.delete(url).then((res) => {
        alert(res.data);
      });
    } else {
      alert("Cancelled");
    }
  };

  return (
    <>
      <h3>Photographer Details</h3>
      <Col lg={3}>
      <Form.Control
        type="text"
        name="search"
        placeholder="Search by Name"
        onChange={(e) => setUname(e.target.value)}
        required
      />
    </Col>
      <Table className="border">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Service</th>
            <th>Image</th>
          
            
          </tr>
        </thead>
        <tbody>
        {uname !== "" && sp.filter(ls => ls.fullname.match(uname)).map((ls, index) => (
          <tr key={ls._id}>
            <td>{ls.fullname}</td>
            <td>{ls.email}</td>
            <td>{ls.number}</td>
            <td>{ls.service}</td>
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
              <Button
                type="button"
                variant='danger'
                onClick={() => deleteUser(ls._id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
          : {sp.map((ls) => {
            return (
              <tr key={ls._id}>
                <td>{ls.fullname}</td>
                <td>{ls.email}</td>
                <td>{ls.number}</td>
                <td>{ls.service}</td>
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
                  <Button
                    type="button"
                    variant='danger'
                    onClick={() => deleteUser(ls._id)}
                  >
                    Delete
                  </Button>
                </td>
               
              </tr>
            );
          })}
        </tbody>
      </Table>
     
    </>
  );
}
