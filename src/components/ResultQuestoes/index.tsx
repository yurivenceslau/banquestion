import React from 'react';
import { Container, QuestoesCard, QuestoesEstatisticas, QuestoesDados, TituloResultado, DadosTitulo, DadosConteudo, NotaProva, Status } from './styles';
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useState, useEffect } from "react";
import { Chart }  from 'primereact/chart';
import { Card } from 'primereact/card';

// function CircularProgressWithLabel(props: CircularProgressProps & { value: number }) {
//   return (
//     <Box position="relative" display="inline-flex">
//       <CircularProgress variant="determinate" {...props} />
//       <Box
//         top={0}
//         left={0}
//         bottom={0}
//         right={0}
//         position="absolute"
//         display="flex"
//         alignItems="center"
//         justifyContent="center"
//       >
//         <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
//           props.value,
//         )}%`}</Typography>
//       </Box>
//     </Box>
//   );
// }


export function ResultQuestoes() {
  const [progress, setProgress] = useState(75);
  const errada = 1;
  const certa = 3;
  const PieChartDemo = () => {
    const chartData = {
        labels: ['Certas', 'Erradas'],
        datasets: [
            {
                data: [certa, errada],
                backgroundColor: [
                    " rgb(0,143,69,0.8)",
                    "rgb(184,63,67)",
                ],
                hoverBackgroundColor: [
                    " rgb(0,143,69,0.8)",
                    "rgb(184,63,67)",
                ]
            }
        ]
    };
  
    const lightOptions = {
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        }
    };
    return(
    <div className="card p-d-flex p-jc-center">
      <Chart type="pie" data={chartData} options={lightOptions} style={{ position: 'relative', width: '100%' }} />
    </div>
  );
  }
  return (
    <Container>
      <TituloResultado>
        <h1>Seu Resultado</h1>
      </TituloResultado>
      <DadosTitulo>
        <h1>Estatisticas da Prova</h1>
      </DadosTitulo>
      <QuestoesEstatisticas>
        <QuestoesCard>
        <div className="card_questoes">
          <span>TOTAL DE QUESTÕES:</span>
          <div className="bolinha">
            <span>4</span>
          </div>
        </div>
        <div className="card_questoesCertas">
          <span className='certas'>QUESTÕES CORRETAS:</span>
          <div className="bolinha">
            <span className='certas'>3</span>
          </div>
        </div>
        <div className="card_questoesErradas">
          <span className='erradas'>QUESTÕES ERRADAS:</span>
          <div className="bolinha">
            <span className='erradas'>1</span>
          </div>
        </div>
        </QuestoesCard>
            {PieChartDemo()}
            <div className="statusNota">
              <NotaProva>
                <span>Nota da Prova:</span>
                <div className="bolinha">
                  <span className='nota'>7.5</span>
                </div>
              </NotaProva>
              <Status>
                <span>Status do Participante:</span>
                <span className='situacao'>Aprovado</span>
              </Status>
            </div>
      </QuestoesEstatisticas>
    </Container>
  );
};