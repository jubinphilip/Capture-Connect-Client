import React from 'react'
import { useEffect, useState } from "react";
export default function Userhome() {
    const idn = sessionStorage.getItem("userId");
    const name = sessionStorage.getItem("username");
    const [record, setRecord] = useState([]);
  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  )
}
