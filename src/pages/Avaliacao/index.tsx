
import Logado from "../Logado";
import {Container} from "./styles";
import {Questionario} from "../../components/Questionario";

interface propsLogado {
  open:boolean;
  handleDrawerClose: ()=>{};
  handleDrawerOpen: ()=>{};
 }

export function Avaliacao({open, handleDrawerClose, handleDrawerOpen}: propsLogado) {
  return (
    <>
      <Logado open={open} handleDrawerClose={handleDrawerClose} handleDrawerOpen={handleDrawerOpen}/>
      <Container isOpen={open}>
        <Questionario/>
      </Container>
    </>
  );
};