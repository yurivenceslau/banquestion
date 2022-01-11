import React,{useState} from 'react';
// paginas privadas 
import  Logado  from "./pages/Logado";
import Comocentralizar from "./pages/Comocentralizar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// paginas publicas
import { Login } from "./pages/Login";
import {BrowserRouter as Router} from "react-router-dom";
import { MainRoutes } from "./routes"
import { GlobalStyle } from "./styles/global";

// interface PropsOpen{
//   estado:Boolean,
// }

export function App() {
  const [login,setLogin]= useState(true);
  
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
      {/* <div style={{marginLeft: open? '14rem' : '4rem', transition:'0.4s'}}> */}
        <MainRoutes/>
      {/* </div> */}
      {/* <Comocentralizar/>
        <div style={{marginLeft: login? '-4rem' : '0rem',}}>
        <Login />
         </div>
      */}
        
      {/* <Logado 
        handleDrawerClose={()=>handleDrawerClose()} 
        handleDrawerOpen={()=>handleDrawerOpen()}
        open={open}
      /> */}
      
      
        <GlobalStyle/>
      </Router>
    </>
    
  );
}