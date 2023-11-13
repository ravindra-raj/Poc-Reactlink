import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./View.css";
 
const View = () => {
  const [user, setUser] = useState({});
 
  const { id } = useParams();
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/get/${id}`);
        setUser({ ...response.data[0] });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
 
    fetchData();
  }, [id]);
 
  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">
          <p>User Contact Detail</p>
        </div>
        <div className="container">
          <strong>ID: </strong>
          <span>{id}</span>
          <br></br>
          <br></br>
          <strong>Name: </strong>
          <span>{user.name}</span>
          <br></br>
          <br></br>
          <strong>Email: </strong>
          <span>{user.email}</span>
          <br></br>
          <br></br>
          <strong>Date: </strong>
          <span>{user.date}</span>
          <br></br>
          <br></br>
          <strong>Visittime: </strong>
          <span>{user.visittime}</span>
          <br></br>
          <br></br>
          <strong>Contact: </strong>
          <span>{user.contact}</span>
          <br></br>
          <br></br>
          <strong>Doctor: </strong>
          <span>{user.doctor}</span>
          <br></br>
          <br></br>
          <strong>Age: </strong>
          <span>{user.age}</span>
          <br></br>
          <br></br>
          <strong>Injury: </strong>
          <span>{user.injury}</span>
          <br></br>
          <br></br>
          <Link to="/">
            <div className="btn btn-edit">Go Back </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
 
export default View;

// import React from "react";
// const View = () =>{
//   return(
// <div>
//   <h2>Hello</h2>
// </div>
//   )
// }
// export default View;