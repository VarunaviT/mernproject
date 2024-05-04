import { useState } from "react"
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Aquatic from "./components/Aquatic";
import Dogs from "./components/Dogs";
import Cat from "./components/Cat";
import { Layout } from "./components/Layout";
import Home from "./components/Home";
import RegisterForm from "./components/RegisterForm";

import Validate from "./components/Validate";
import SignUp from "./components/SignUp";
import Kart from "./context/Kart";
import { UserContext } from "./context/UserContext";
import Login from "./components/Login";


function App() {
  const [kart, setKart] = useState([]);
  return (
    <div className="App">
      
      
      <BrowserRouter>

        <Routes>
       
            <Route path="/" element={<Layout />} >
            <Route path="/home" element={<Home/>} />
{/* 
            <Route path="/dogs" element={<Dogs />} />
            <Route path="/cat" element={<Cat />} />
            <Route path="/aquatic" element={<Aquatic />} /> */}
             <Route path="/RegisterForm" element={<RegisterForm />} />
             <Route path="/" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Validate" element={<Validate />} />
          
         < Route
            exact
            path="/aquatic"
            element={
              <UserContext.Provider value={[kart, setKart]}>                
                <Aquatic /> 
              </UserContext.Provider>
            }                                                              
          />
            
         < Route
            exact
            path="/dogs"
            element={
              <UserContext.Provider value={[kart, setKart]}>                
                 <Dogs/> 
              </UserContext.Provider>
            }                                                              
          />
            
         < Route
            exact
            path="/cat"
            element={
              <UserContext.Provider value={[kart, setKart]}>                
                 <Cat/>
              </UserContext.Provider>
            }                                                              
          />
          
          <Route
            exact
            path="/kart"
            element={
              <UserContext.Provider value={[kart, setKart]}>
                <Kart />
              </UserContext.Provider>
            }
          /> 
</Route>
        </Routes>
      </BrowserRouter>
    </div>



  );
}

export default App;
