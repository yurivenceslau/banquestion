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
            <span >Delair Cavalcante Andrade</span>
          </div>

          <div className="cpf">
            <span>CPF:</span>
            <span>088.869.659-09</span>
          </div>

          <div className="email">
            <span>Email:</span>
            <span>delay@gmail.com</span>
          </div>

          <div className="telefone">
            <span>Telefone:</span>
            <span>(88)994235993</span>
          </div>

          <div className="empresa">
            <span>Empresa:</span>
            <span>Alan Araújo</span>
          </div>

        </div>
      </div>

      <div className="sobre">
        <div className="tituloDados">
          <span>Dados do curso</span>
        </div>

        <div className="dados">

        <div className="curso">
            <span>Nome do curso:</span>
            <span>JavaScript</span>
          </div>

          
          <div className="nome1">
            <span><h1>Nome do curso:</h1>
              <input type="text" 
            // value={"JavaScript"}
            />
            {/* Nome do curso: */}
            </span>
            {/* <span>JavaScript</span> */}
          </div>

          <div className="codigo">
            <span>Código de inscrição:</span>
            <span>088933493</span>
          </div>

          <div className="pagamento">
            <span>Método de Pagamento:</span>
            <span>Pix</span>
          </div>

          <div className="data">
            <span>Data de inscrição:</span>
            <span>02/05/2021</span>
          </div>

        </div>
      </div>
    </Container>
  );
}
