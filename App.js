// import logo from './logo.svg';
import{BrowserRouter, Routes, Route} from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import React,{useState} from "react";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from "./pages/Home";
import AddEdit from './pages/AddEdit';
import View from "./pages/View";
import Admin from "./pages/Admin";
import Login from "./Login";
import { Navigate } from 'react-router-dom';
// import Details from "./pages/Details";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  // return (
    // <BrowserRouter>
    //  <div className="App">
    //   <ToastContainer position="top-center"/>
    //   <Routes>

    //   <Route exact path="/" element={<Home/>} /> .  
    //   <Route  path="/addContact" element={<AddEdit/>} /> 
    //   <Route  path="/admin" element={<Admin/>} /> 
    //   <Route  path="/login" element={<Login/>} /> 
    //   <Route path="/update/:id" element={<AddEdit/>}/>
    //   <Route path="/view/:id" element={<View/>}/>
    
    //   </Routes>
    
    // </div>
    // </BrowserRouter>
   
  // );
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="top-center" />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/addContact" element={<AddEdit />} />
          <Route
            path="/admin"
            element={authenticated ? <Admin /> : <Navigate to="/login" />}
          />
          {/* <Route path="/login" element={<Login/>} /> */}
         
          <Route path="/login" 
          element={<Login setAuthenticated={setAuthenticated} />} />
          <Route path="/update/:id" element={<AddEdit />} />
          <Route path="/view/:id" element={<View />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

