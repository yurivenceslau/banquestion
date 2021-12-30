import { ReactNode } from 'react';
import logoAlinhada from '../../imagens/logoAlinhada.png'
import { Contato } from '../Contato';
import { Container, Descricao, TituloGeral, TituloSobre } from './styles';


export function InfoEmpresa() {
  return (
    <Container>
      <TituloSobre>
        <h1>Quem somos nós?</h1>
      </TituloSobre>
      <TituloGeral>
        <h1>Sobre a Empresa</h1>
      </TituloGeral>
      <Descricao>
        <div className="desc_img">
          <img src={logoAlinhada} alt="logoAlinhada.jpg" />
        </div>
        
        <div className="desc_texto">
          <span>
          A Ágil Engenharia de Telecomunicações é uma empresa que traz varios serviços em relação ao mundo da Engenharia de Telecomunicão, como recurso de compartilhamento de 
postes, cursos e projetos de fibra ótica, sempre colaborando da melhor maneira possível com nossos amigos, parceiros e clientes. Nossa equipe é formada 
por otimos profissionais focada em trazer resultados de otima qualidade e eficiencia por um preço acessivel e prazos agradaveis para nossos clientes.
          </span>
          <span>
            Estamos a sua disposição para fecharmos negócios, crescermos juntos e tomarmos aquele bom e velho café.
          </span>
        </div>
      </Descricao>
      <Contato/>
    </Container>
  );
};
