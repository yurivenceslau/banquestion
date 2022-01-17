import { Container } from "./styles";
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

interface State {
  nome: string;
  cpf: string;
  email: string;
  telefone:string;
  empresa: string;
  curso:string;
  codigo:string;
  pagamento:string;
  data:string;
  observacao:string;
}

interface propsDados{
  dados:State;
  setDados:React.Dispatch<React.SetStateAction<State>>;
}

export function Dados({ dados
  ,setDados 
} :propsDados) {
 
  const classes = useStyles();
  // const [value, setValue] = React.useState({setDados});
  const [elemento, setElemento]= useState({
    nome:"Delair",
    cpf:"088.869.659-09",
    email:"delay@gmail.com",
    telefone:"(88)994235993",
    empresa: "Ágil Engenharia",
    curso:"JavaScript",
    codigo:"088933493",
    pagamento:"Pix",
    data:"02/05/2021",
    observacao:"Nenhuma",
  });
  
  React.useEffect(() => {
    dados && setElemento(dados);
  },[dados]);

  // setElemento = setDados;

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(event.target.value);
  // };
  return (
    <Container>
      <div className="baseDados">
        <div className="tituloDados">
          <span>Meus dados</span>
        </div>

        <div className="dados">

          <div className="dado">
            <span className="indicador">Nome:</span>
            <span className="indicado">{elemento.nome}</span>
          </div>

          <div className="dado">
            <span className="indicador">CPF:</span>
            <span className="indicado">{elemento.cpf}</span>
          </div>

          <div className="dado">
            <span className="indicador">Email:</span>
            <span className="indicado">{elemento.email}</span>
          </div>

          <div className="dado">
            <span className="indicador">Telefone:</span>
            <span className="indicado">{elemento.telefone}</span>
          </div>

          <div className="dado">
            <span className="indicador">Empresa:</span>
            <span className="indicado">{elemento.empresa}</span>
          </div>

        </div>
      </div>

      <div className="sobre">
        <div className="tituloDados">
          <span>Dados do curso</span>
        </div>

        <div className="dados">

        <div className="dado">
            <span className="indicador">Curso:</span>
            <span className="indicado">{elemento.curso}</span>
          </div>

          <div className="dado">
            <span className="indicador">Código de inscrição:</span>
            <span className="indicado">{elemento.codigo}</span>
          </div>

          <div className="dado">
            <span className="indicador">Método de Pagamento:</span>
            <span className="indicado">{elemento.pagamento}</span>
          </div>

          <div className="dado">
            <span className="indicador">Data de inscrição:</span>
            <span className="indicado">{elemento.data}</span>
          </div>

          <div className="dado">
            <span className="indicador">Observação:</span>
            <span className="indicado">{elemento.observacao}</span>
          </div>

        </div>
      </div>
    </Container>
  );
}
