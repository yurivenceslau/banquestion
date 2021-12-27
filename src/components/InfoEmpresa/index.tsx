import { ReactNode } from 'react';
import maosdadas from '../../imagens/maosdadas.png'
import { Container, Descricao, TituloGeral, TituloSobre } from './styles';
import { InfoFuncion } from '../../components/InfoFuncion';


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
          <img src={maosdadas} alt="maosdadas.jpg" />
        </div>
        
        <div className="desc_texto">
          <span>
            Somos uma empresa de engenharia de telecomunicações focada em colaborar com nossos amigos, parceiros e clientes. Temos uma equipe de profissionais super capacitada com foco em resultados rápidos, eficientes e com qualidade. Prezamos fortemente pela ética, transparência e acima de tudo por um preço justo. Ah! A maioria de nossos clientes se tornam nossos grandes amigos.
          </span>
          <span>
            Estamos a sua disposição para fecharmos negócios, crescermos juntos e tomarmos aquele bom e velho café.
          </span>
        </div>
      </Descricao>
      <InfoFuncion/>
    </Container>
  );
};
