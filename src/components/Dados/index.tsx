import { Container } from "./styles";

export function Dados() {
  return (
    <Container>
      <div className="baseDados">
        <div className="tituloDados">
          <span>Meus dados</span>
        </div>

        <div className="dados">

          <div className="nome">
            <span>Nome:</span>
            <span>Delair Cavalcante Andrade</span>
          </div>

          <div className="email">
            <span>Email:</span>
            <span>delay@gmail.com</span>
          </div>

          <div className="telefone">
            <span>Telefone:</span>
            <span>(88)994235993</span>
          </div>


        </div>
      </div>

      <div className="sobre">
        <div className="tituloDados">
          <span>Sobre mim</span>
        </div>

        <div className="dados">
        </div>
      </div>
    </Container>
  );
}
