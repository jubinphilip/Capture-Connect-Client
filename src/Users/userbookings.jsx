import React, { useState, useEffect } from "react";
import AXIOS from "axios";
import { Table } from "react-bootstrap";

export default function Userbookings() {
  const [sp, setSp] = useState([]);
  const name = sessionStorage.getItem("username");

  useEffect(() => {
    console.log("UseEffect Working");
    const url = `http://localhost:9000/viewmybookings/${name}`;
    AXIOS.get(url)
      .then((res) => {
        setSp(res.data); // Set the response data to the state
        console.log("Data Reached");
      })
      .catch((error) => {
        console.error("Error fetching bookings", error);
      });
  }, [name]); // Add name to dependency array to re-fetch data when name changes

  return (
    <div>
      <h1>These are your Bookings</h1>
      <Table className="border">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Booked Date</th>
            <th>Place</th>
          </tr>
        </thead>
        <tbody>
          {sp.map((ls) => {
            return (
              <tr key={ls._id}>
                <td>
               Name: {ls.spid.fullname}
                <p>
                Contact:{ls.spid.number}</p>
                </td>
                <td>{ls.date}</td>
                <td>{ls.createdAt}</td>
                <td>{ls.place}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
