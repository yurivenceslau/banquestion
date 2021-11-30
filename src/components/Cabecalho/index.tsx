import { Container, Corzinha } from "./style";
import { FiMonitor } from "react-icons/fi";


export function Cabecalho(){
    return(
        <Container>
            {/* <img src={logoAlan} alt="LogoAlan" /> */}
            <Corzinha>

                <h1><FiMonitor style={{fontSize: '2.4rem'}}/>   MEU PORTAL AGIL</h1>
                <span>Seu lugar para validar e exibir seus certificados!</span>
            </Corzinha>
        </Container>)
}