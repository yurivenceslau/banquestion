import {Routes,Route} from "react-router-dom";
import React, {useState} from "react"

import { Dashboard } from "./pages/Dashboard/index";
import { Perfil } from "./pages/Perfil";
import { Login } from "./pages/Login";

export function MainRoutes(){
     const [open,setOpen] = useState(false);

     const handleDrawerOpen = () => {
        setOpen(true);
     };
   
     const handleDrawerClose = () => {
       setOpen(false);
     };
     
     return(
         <Routes>
              {/* <Route path="/" element={<Login/>}/> */}
              <Route path="/login" element={<Login/>}/>
              
              <Route path="/perfil" element={<Perfil open={open} handleDrawerClose={handleDrawerClose} handleDrawerOpen={handleDrawerOpen}/>}/>
              <Route path="/" element={<Dashboard open={open} handleDrawerClose={handleDrawerClose} handleDrawerOpen={handleDrawerOpen}/>}/>
              {/* <Route path="/Perfil" element={<Perfil/>}/> */}
              <Route path="*" element={<h1>Not Found</h1>}/>
         </Routes>
    );
}
