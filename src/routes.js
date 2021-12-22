import {Routes,Route} from "react-router-dom";
import React, {useState} from "react"
import { Perfil } from "./pages/Perfil";
import { Login } from "./pages/Login";
import { Contato } from "./pages/Contato";
import { Avaliacao } from "./pages/Avaliacao";
import { SobreNós } from "./pages/SobreNós";

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
              <Route path="/" element={<Login/>}/>
              <Route path="/contato" element={<Contato/>}/>
              <Route path="/perfil" element={<Perfil open={open} handleDrawerClose={handleDrawerClose} handleDrawerOpen={handleDrawerOpen}/>}/>
              <Route path="/avaliacao" element={<Avaliacao open={open} handleDrawerClose={handleDrawerClose} handleDrawerOpen={handleDrawerOpen}/>}/>
              <Route path="/sobrenos" element={<SobreNós open={open} handleDrawerClose={handleDrawerClose} handleDrawerOpen={handleDrawerOpen}/>}/>
              {/* <Route path="/Perfil" element={<Perfil/>}/> */}
              <Route path="*" element={<h1>Not Found</h1>} />
         </Routes>
    );
}
