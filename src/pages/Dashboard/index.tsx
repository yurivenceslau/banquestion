
import Logado from "../Logado";
import {Container} from "./styles";
import {Caixa} from "../../components/Caixa";

interface propsLogado {
  open:boolean;
  handleDrawerClose: ()=>{};
  handleDrawerOpen: ()=>{};
 }

export function Dashboard({open, handleDrawerClose, handleDrawerOpen}: propsLogado) {
  return (
    <>
      <Logado open={open} handleDrawerClose={handleDrawerClose} handleDrawerOpen={handleDrawerOpen}/>
      <Container isOpen={open}>
        <Caixa/>
      </Container>
    </>
  );
};