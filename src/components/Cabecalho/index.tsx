import { Container } from "./style";

export function Cabecalho(){
    return(
        <Container>
            <div className="botoes">
                <button className="colabButton">Colaborador</button>
                <button>Registrar Ponto</button>
            </div>
        </Container>)
}