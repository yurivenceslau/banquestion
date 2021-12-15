import {Routes,Route} from "react-router-dom";
import React from "react"

import { Dashboard } from "./pages/Questoes/index";
import { Perfil } from "./pages/Perfil";
import { Login } from "./pages/Login";
import { Contato } from "./pages/Contato";



export function MainRoutes(){
    return(
         <Routes>
              {/* <Route path="/" element={<Login/>}/> */}
              <Route path="/login" element={<Login/>}/>
              <Route path="/contato" element={<Contato/>}/>
              
              {/* <Route path="/" element={<Perfil/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/> */}
              {/* <Route path="/Perfil" element={<Perfil/>}/> */}
              {/* <Route path="*" element={<h1>Not Found</h1>}/> */}
         </Routes>
    );
}
