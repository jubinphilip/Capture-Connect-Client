import React, { useState, useEffect } from "react";
import AXIOS from "axios";
import { Table } from "react-bootstrap";

export default function Viewbookings() {
  const [sp, setSp] = useState([]);
  const idn = sessionStorage.getItem("userId");
  let [total,setTotal]=useState(0.0)  

  useEffect(() => {
    let inc=0
    console.log("UseEffect Working");
    const url = `http://localhost:9000/viewreport/`;
    AXIOS.get(url)
      .then((res) => {
        setSp(res.data.result); // Set the response data to the state
         setTotal(res.data.total)
         let l=res.data.result.length
         for(let i=0;i<l;i++){
          setTotal(prevTotal=>prevTotal+parseFloat(res.data.result[i].advanceamt))
          console.log(parseFloat(res.data.result[i].advanceamt))
         }
        console.log("Data Reached",total);
      })
      .catch((error) => {
        console.error("Error fetching bookings", error);
      });
  }, []); // Add name to dependency array to re-fetch data when name changes
  
  return (
    <div>
      <h1>Report</h1>
      <Table className="border">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Service Provider Name</th>
            <th>Service</th>
            <th>Advance</th>
            <th>Place</th>
            <th>Date</th>
            <th>Booked Date</th>
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
                <td>
                Name: {ls.spid.fullname}
                 <p>
                 Contact:{ls.spid.number}</p>
                 </td>
                 <td>{ls.spid.service}</td>
                
                <td>{
                  
                  ls.advanceamt


                }</td>
                <td>{ls.place}</td>
                <td>{ls.date}</td>
                <td>{ls.createdAt}</td>
               
              </tr>
            );
          })}
          <tr>
          <td>total:{total}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
