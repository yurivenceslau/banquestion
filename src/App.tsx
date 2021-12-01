import React,{useState} from 'react';
// paginas privadas 
import  Logado  from "./pages/Logado";
import Comocentralizar from "./pages/Comocentralizar";

// paginas publicas
import { Login } from "./pages/Login";
import {BrowserRouter as Router} from "react-router-dom";
import { MainRoutes } from "./routes"
import { GlobalStyle } from "./styles/global";

// interface PropsOpen{
//   estado:Boolean,
// }

export function App() {

  const [open,setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <div 
      // style={{marginLeft: open? '14rem' : '4rem', transition:'0.4s'}}
      >
        <MainRoutes/>
      </div>
      {/* <Comocentralizar/> */}
      {/* <Login/> */}
      {/* <Logado/> */}
      <GlobalStyle/>
      </Router>
  );
}