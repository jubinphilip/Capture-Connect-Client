import React from "react";
import { useEffect, useState } from "react";
import AXIOS from "axios";
import { Table } from "react-bootstrap";
import { FaUserEdit } from "react-icons/fa";
import { Col, Row , Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";
import Useredit from "./empedit";
import Pgsamples from "./pgsamples";
import Addsamples from "./addsamples";
import Viewbookings from "./viewbookings";
import { TbLogout2 } from "react-icons/tb";

export default function Profile() {

    const idn = sessionStorage.getItem("userId");
    const [record, setRecord] = useState([]);
    useEffect(() => {
      const url = `http://localhost:9000/profile/${idn}`;
      AXIOS.get(url).then((res) => {
        setRecord(res.data);
      });
    }, []); 
   
    const handleLogout = () => {
      sessionStorage.clear(); 
      window.location.href = "/spLogin"; 
    };

  return (
    <Container >
      {record.map((ls) => {
        return (
          <Row className="rounded shadow p-4 border bg-success text-white mt-2">
            <Col lg={2}>   
              <img
              src={`http://localhost:9000/${ls.image}`}
                className="rounded-circle bg-info"
                style={{ width: "100%", height: "170px" }}
              />
            </Col>
            <Col lg={8}>
              {/* <br /> */}
             
              <h2>First Name: {ls.fullname}</h2>
              <h4>Email: {ls.email}</h4>
              <h4>Service: {ls.service}</h4>
            </Col>
            <Col lg={1}>
            <a href={`/pghome/empedit/${ls._id}`}> <FaUserEdit style={{ color: 'white', fontSize: '50px', marginRight: '5px' }}/></a>
            </Col>
            <Col>
            <a href={`/addsamples`}> <IoIosAddCircleOutline  style={{ color: 'white', fontSize: '50px', marginRight: '5px' }}/></a>
            <div style={{ display: 'flex', alignItems: 'center' }} onClick={handleLogout}>
            <TbLogout2 line style={{ color: 'white', fontSize: '50px', marginRight: '5px' }} />
          </div>
            </Col> 
          </Row>
        );
      })}
      <Row>
      <Col>
      <Routes>
      <Route path="empedit/:id" element={<Useredit/>}></Route>
      </Routes>
      </Col>
      </Row>
      <Row>
      <Col>
      <Pgsamples/>

      </Col>
      </Row>
      <Row>
      <Col>
      <Viewbookings/>
      </Col>
      </Row>
    </Container>

 
  );
}