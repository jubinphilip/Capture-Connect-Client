import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AXIOS from "axios";
import { FaWhatsapp } from "react-icons/fa";
import { Container, Row, Col, Button, Form, Table } from "react-bootstrap";

export default function Pgsamples() {
  const params = useParams();
  const id = params.id;
  const name = sessionStorage.getItem("username");
  const idu = sessionStorage.getItem("userId");

  const [record, setRecord] = useState([]);
  const [sp, setSp] = useState([]);
  const [date, setDate] = useState("");
  const [advanceamt, setAdvance] = useState("");
  const[place,setPlace]=useState("")
  const [bookedDates, setBookedDates] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await AXIOS.get(`http://localhost:9000/profile/${id}`);
        setRecord(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    const fetchPgSamples = async () => {
      try {
        const response = await AXIOS.get(`http://localhost:9000/fetchpgsamples/${id}`);
        setSp(response.data);
      } catch (error) {
        console.error("Error fetching sample photographs:", error);
      }
    };

    const fetchBookedDates = async () => {
      try {
        const response = await AXIOS.get(`http://localhost:9000/viewbookings/${id}`);
        setBookedDates(response.data);
      } catch (error) {
        console.error("Error fetching booked dates:", error);
      }
    };

    fetchProfile();
    fetchPgSamples();
    fetchBookedDates();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        userId:idu,
        spid: id,
        username: name,
        date: date,
        advanceamt:advanceamt,
        place:place
      };
      const response = await AXIOS.post("http://localhost:9000/bookpgsample", data);
      console.log("Booking successful:", response.data);
      window.location.href="https://buy.stripe.com/test_6oEaFT0I8c1EbFSfYY"
    } catch (error) {
      console.error("Error booking sample:", error);
    }
  };

  return (
    <>
      <Container>
        {record.map((ls) => (
          <Row
            key={ls._id}
            className="rounded shadow p-4 border bg-warning text-black mt-2"
            style={{ width: "100%" }}
          >
            <Col lg={2}>
              <img
                src={`http://localhost:9000/${ls.image}`}
                className="rounded-circle bg-info"
                style={{ width: "100%", height: "170px" }}
                alt="Profile"
              />
            </Col>
            <Col lg={10}>
             
              <h2>First Name: {ls.fullname}</h2>
             
              <a href={`https://api.whatsapp.com/send?phone=${ls.number}`}><FaWhatsapp style={{ fontSize: '2em' }} /></a>
              <h4>Service: {ls.service}</h4>
              <h4>Place:{ls.place}</h4>
            </Col>
          </Row>
        ))}
      </Container>
      <Row className="rounded shadow p-4 border bg-warning text-black mt-2">
        <Col>
          <h3>Sample Photographs</h3>
          <Table className="border">
            <thead>
              <tr>
                <th className="bg-warning"></th>
                <th className="bg-warning">Amount</th>
              </tr>
            </thead>
            <tbody>
              {sp.map((ls) => (
                <tr key={ls._id}>
                  <td className="bg-warning">
                    {ls.sample[0].map((lis) => (
                      <img
                        key={lis._id}
                        src={`http://localhost:9000/${lis.filename}`}
                        className="rounded m-2"
                        width={400}
                        height={400}
                        alt="Photographer"
                      />
                    ))}
                  </td>
                  <th className="bg-danger" style={{ width: "10%" }}>
                    {ls.amount}
                  </th>
                </tr>
              ))}
              <tr>
                <td className="bg-warning">
                  <Form>
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" onChange={(e) => setDate(e.target.value)} />
                    <Form.Label>Advance Amount</Form.Label>
                    <Form.Control type="type" onChange={(e) => setAdvance(e.target.value)} />
                    <Form.Label>Place</Form.Label>
                    <Form.Control type="type" onChange={(e) => setPlace(e.target.value)} />
                  </Form>
                </td>
                <td className="bg-warning" align="center">
                  <Form.Group className="pt-3">
                    <Button onClick={handleSubmit}>Book</Button>
                  </Form.Group>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Container>
        <h1>Booked Dates</h1>
        <Table className="border">
          <tbody>
            {bookedDates.map((ls) => (
              <tr key={ls._id}>
                <td>{ls.date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <marquee direction="left">Bookings are available on other dates except the booked dates!</marquee>
      </Container>
    </>
  );
}
