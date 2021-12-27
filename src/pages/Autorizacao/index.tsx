import Logado from '../Logado';
import { Container } from './styles';

interface propsLogado {
  open:boolean;
  handleDrawerClose: ()=>{};
  handleDrawerOpen: ()=>{};
 }

export function Autorizacao({open,handleDrawerClose,handleDrawerOpen}:propsLogado) {
  return (
      <>
      <Logado open={open} handleDrawerClose={handleDrawerClose} handleDrawerOpen={handleDrawerOpen}/>
      <Container isOpen={open}>
        <div className="autorizacao">
        <div className='tituloAutorizacao'>
          <span>SOBRE A AVALIAÇÃO</span>
          </div>
          <div className="instrucoes">
            <ol>
              <li>nao faça</li>
              <li>nao faça</li>
              <li>compra</li>
              <li>marque</li>
              
            </ol>
          </div>
          </div>
      </Container>
    </>
  );
};

