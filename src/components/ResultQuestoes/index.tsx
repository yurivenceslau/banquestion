import React from 'react';
import { Container, QuestoesCard, QuestoesEstatisticas, QuestoesDados, TituloResultado, DadosTitulo, NotaProva, Status, QuestoesGrafico } from './styles';
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
  const errada = 2;
  const certa = 10;
  const total = certa + errada;
  var razao = 0;
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
  interface QuestoesProps{
    certa: number;
    errada: number;
    total: number;
  }
  const nota = ({certa, total}: QuestoesProps) =>{
    razao = certa/total ;
    razao = razao*10;
    razao = Number(razao.toFixed(1));
    return razao;
  }
  var cor = "";

  const mudanca = () => {
    if (razao >= 7){
       cor= "Aprovado";
    }else{
      cor= "Reprovado";
    }
    return( cor)
     
  }
  // console.log(cor);
  
 
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
          <span>Total de Questões:</span>
          <div className="bolinha">
            <span>{total}</span>
          </div>
        </div>
        <div className="card_questoesCertas">
          <span className='certas'>Questões Corretas:</span>
          <div className="bolinha">
            <span className='certas'>{certa}</span>
          </div>
        </div>
        <div className="card_questoesErradas">
          <span className='erradas'>Questões Erradas:</span>
          <div className="bolinha">
            <span className='erradas'>{errada}</span>
          </div>
        </div>
        </QuestoesCard>
        <QuestoesGrafico>
          {PieChartDemo()}
        </QuestoesGrafico>
            <div className="statusNota">
              <NotaProva isCor={nota({certa, errada, total})}>
                <span>Nota da Prova:</span>
                <div className="bolinha">
                  <span className='nota'>{nota({certa, errada, total})}</span>
                </div>
              </NotaProva>
              <Status isCor={razao}>
                <span>Status do Participante:</span>
                <span className='situacao'>
                  {mudanca()}</span>
              </Status>
            </div>
      </QuestoesEstatisticas>
    </Container>
  );
};