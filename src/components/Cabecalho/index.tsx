import { Container, Corzinha } from "./style";
import { FiBookOpen } from "react-icons/fi";


export function Cabecalho(){
    return(
        <Container>
            {/* <img src={logoAlan} alt="LogoAlan" /> */}
            <Corzinha>

                <h1><FiBookOpen style={{fontSize: '2.4rem', marginRight: '0.8rem'}}/>   MEU PORTAL AGIL</h1>
                <span>Seu lugar para validar e exibir seus certificados!</span>
            </Corzinha>
        </Container>)
}