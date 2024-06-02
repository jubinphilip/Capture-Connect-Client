import React, { useState, useEffect } from "react";
import AXIOS from "axios";
import { Table } from "react-bootstrap";

export default function Viewbookings() {
  const [sp, setSp] = useState([]);
  const idn = sessionStorage.getItem("userId");
  

  useEffect(() => {
    console.log("UseEffect Working");
    const url = `http://localhost:9000/viewpgbookings/${idn}`;
    AXIOS.get(url)
      .then((res) => {
        setSp(res.data); // Set the response data to the state
        console.log("Data Reached");
      })
      .catch((error) => {
        console.error("Error fetching bookings", error);
      });
  }, [idn]); // Add name to dependency array to re-fetch data when name changes

  return (
    <div>
      <h1>These are your Bookings</h1>
      <Table className="border">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Advance</th>
            <th>Place</th>
          </tr>
        </thead>
        <tbody>
          {sp.map((ls) => {
            console.log(ls)
            return (
              <tr key={ls._id}>
                <td>
               Name: {ls.userId.fullname}
                <p>
                Contact:{ls.userId.number}</p>
                </td>
                <td>{ls.date}</td>
                <td>{ls.advanceamt}</td>
                <td>{ls.place}</td>
               
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
