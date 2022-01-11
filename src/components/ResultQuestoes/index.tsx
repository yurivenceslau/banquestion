import { Container, QuestoesEstatisticas, QuestoesPorcento, TituloResultado } from './styles';


export function ResultQuestoes() {
  return (
    <Container>
      <TituloResultado>
        <h1>Seu Resultado</h1>
      </TituloResultado>
      <QuestoesEstatisticas>
        <div className="card_questoes">
          <span>TOTAL DE QUESTÕES</span>
          <span>4</span>
        </div>
        <div className="card_questoes">
          <span className='certas'>QUESTÕES CORRETAS</span>
          <span className='certas'>3</span>
        </div>
        <div className="card_questoes">
          <span className='erradas'>QUESTÕES ERRADAS</span>
          <span className='erradas'>1</span>
        </div>
        <QuestoesPorcento>
          <span>Circulo.png</span>
        </QuestoesPorcento>
      </QuestoesEstatisticas>
    </Container>
  );
};