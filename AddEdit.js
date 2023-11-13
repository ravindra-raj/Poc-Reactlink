import React, {useState, useEffect} from "react";
import {useNavigate, useParams, Link} from "react-router-dom"
import "./AddEdit.css";
import axios from "axios";
import { toast } from "react-toastify";
const initialState ={
    name:"",
    email:"",
    date: "",
    visittime: "",
    contact:"",
    doctor: "",
    age: "",
    injury: "",

};
const AddEdit = () =>{
    const [state,setState]=useState(initialState);
 
    const {name, email, date, visittime, contact, doctor, age, injury}=state;

    const navigate = useNavigate();
 
    const { id } = useParams();

    useEffect(() => {
        axios
          .get(`http://localhost:5000/api/get/${id}`)
          .then((resp) => setState({ ...resp.data[0] }));
      }, [id]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !email ||!contact){
            toast.error("please provide the value into each input field")
        } 
        // else {
            
        //     axios.post("http://localhost:5000/api/post",{
        //         name,
        //         email,
        //         contact
        //     }).then(()=>{
        //         setState({name: "", email: "", contact: ""});
        //     })
        //     .catch((err)=>toast.error(err.response.data));
        //    toast.success("Contact Added succefully")
        //     setTimeout(()=>navigate.push("/"),500);
        
        // }
        else{
            if(!id){
                  axios.post("http://localhost:5000/api/post",{
                    name,
                    email,
                    date,
                    visittime,
                    contact,
                    doctor,
                    age,
                    injury,
                  })
                  .then(() =>{
                    setState({name: "", email: "", date: "", visittime: "",contact: "", doctor: "", age:"", injury: ""});
                  })
                  .catch((err) => toast.error(err.response.data));
                  toast.success("Contact added successfully");
            }
            else{
                axios.put(`http://localhost:5000/api/update/${id}`, {
                  // Updated to /api/update
                  name,
                  email,
                  date,
                  visittime,
                  contact,
                  doctor,
                  age,
                  injury,
                })
                .then(() => {
                    setState({ name: "", email: "", date: "", visittime: "",contact: "", doctor: "", age: "", injury: "" });
                  })
                  .catch((err) => toast.error(err.response.data));
                toast.success("Contact Update Successfully");
              }
              setTimeout(() =>{navigate("/");}, 500);
            }
    };

    const handleInputChange = (e) =>{
        const {name, value}=e.target;
        setState({...state, [name]: value})
    }

    return(

       
        <div style={{ marginTop: "20px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
          background:"whiteSmoke",
          border:"2px solid grey"
        }}
        onSubmit={handleSubmit}
      >
        <h2>Appointment Booking</h2>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name..."
          value={name || ""}
          onChange={handleInputChange}
        ></input>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email..."
          value={email || ""}
          onChange={handleInputChange}>
       </input>
       <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          placeholder="Your date..."
          value={date || ""}
          onChange={handleInputChange}>
       </input>
       <label htmlFor="visittime">Visittime</label>
        <input
          type="time"
          id="visittime"
          name="visittime"
          placeholder="Your visittime..."
          value={visittime || ""}
          onChange={handleInputChange}>
       </input>
        <label htmlFor="contact">Contact</label>
        <input
          type="number"
          id="contact"
          name="contact"
          placeholder="Your Contact No..."
          value={contact || ""}
          onChange={handleInputChange}
        ></input>
         <label htmlFor="doctor">Doctor</label>
        <input
          type="text"
          id="doctor"
          name="doctor"
          placeholder="Your doctor..."
          value={doctor || ""}
          onChange={handleInputChange}>
       </input>
       <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          placeholder="Your age..."
          value={age || ""}
          onChange={handleInputChange}>
       </input>
       <label htmlFor="injury">Injury</label>
        <input
          type="text"
          id="injury"
          name="injury"
          placeholder="Your injury..."
          value={injury || ""}
          onChange={handleInputChange}>
       </input>
 
        <input type="submit" style={{background:"plum"}} value={id ? "Update" : "Save"}></input>
        <Link to={"/"}>
          <input type="button" style={{background:"grey"}} value="Go Back"></input>
        </Link>
      </form>
    </div>
    );
};
export default AddEdit;