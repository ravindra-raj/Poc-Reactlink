import "./Home.css";
import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {toast} from "react-toastify";
import axios from "axios";

const Admin = () =>{
    const [data, setData] =useState([]);
    
    const loadData = async() =>{
        const response = await axios.get("http://localhost:5000/api/get");
        setData(response.data);
            };
        
            useEffect(() =>{
        loadData();
            }, []);
        
        
            const deleteContact = (id) => {
                if (
                  window.confirm("Are you sure that you wanted to delete that contact?")
                ) {
                  axios.delete(`http://localhost:5000/api/remove/${id}`); // Updated to /api/remove
                  toast.success("Contact Deleted Successfully");
                }
                setTimeout(() => {
                  loadData();
                }, 500);
              };
return(

<div style={{marginTop: "150px"}}>
<Link to="/admin">
         {/* <button className='btn btn-contact' style={{background: "#87C4FF",color:"black"}}>Appointment Booking</button> */}
         </Link>
         <h2>Admin Details</h2>
     
<table className="styled-table">
             <thead>
                <tr>
                <th>No.</th>
                <th >Name</th>
                <th >Email</th>
                <th>Date</th>
                <th>Visittime</th>
                <th>contact</th>
                <th>Doctor</th>
                <th>Age</th>
                <th>Injury</th>
                <th>Action</th>
                </tr>
             </thead>
             <tbody>
                {data.map((item, index) =>{
                    return(
                        <tr key={item.id}>
                            <th scope="row">{index+1}</th>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.date}</td>
                            <td>{item.visittime}</td>
                            <td>{item.contact}</td>
                            <td>{item.doctor}</td>
                            <td>{item.age}</td>
                            <td>{item.injury}</td>
                            <td>
                                <Link to={`/update/${item.id}`}>
                                <button className='btn btn-edit'>Edit</button>
                                </Link>
                                <button className='btn btn-delete' onClick={() => deleteContact(item.id)}>Delete</button>
                                <Link to={`/view/${item.id}`}>
                                <button className='btn btn-view'>View</button>
                                </Link>
                                
                            </td>
                        </tr>
                    )
                })}
             </tbody>
          </table>
</div>
);
};
export default Admin;