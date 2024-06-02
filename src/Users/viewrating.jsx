import React, { useState, useEffect } from "react";
import AXIOS from "axios";
import { useParams } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
export default function ViewRating()
{
    const [sp, setSp] = useState([]);
    const params = useParams();
    const id = params.id;
    useEffect(() => {
      console.log("UseEffect Working");
      const url = `http://localhost:9000/viewrating/${id}`;
      AXIOS.get(url).then((res) => {
        setSp(res.data);
        console.log("Data Reached");
      });
    }, []);
  
    
        return (
            <>
              <h3>Ratings and Reviews</h3>
              <Table className="border">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Review</th>
                    <th>Rating </th>
                  </tr>
                </thead>
                <tbody>
                  {sp.map((ls) => {
                    return (
                      <tr key={ls._id}>
                        <td>{ls.username}</td>
                        <td>{ls.review}</td>
                        <td>{ls.rating}</td>
 
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
             
            </>
          );
}