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



export function Dados() {
 
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');
  const [elemento, setElemento]= useState({
    nome:"Delair",
    cpf:"088.869.659-09",
    email:"delay@gmail.com",
    telefone:"(88)994235993",
    empresa:"Alan Araújo",
    pagamento:"Pix"
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <Container>
      <div className="baseDados">
        <div className="tituloDados">
          <span>Meus dados</span>
        </div>

        <div className="dados">

          <div className="dado">
            <span className="indicador">Nome:</span>
            <span className="nome">{elemento.nome}</span>
          </div>

          <div className="dado">
            <span className="indicador">CPF:</span>
            <span className="cpf">{elemento.cpf}</span>
          </div>

          <div className="dado">
            <span className="indicador">Email:</span>
            <span className="email">{elemento.email}</span>
          </div>

          <div className="dado">
            <span className="indicador">Telefone:</span>
            <span className="telefone">{elemento.telefone}</span>
          </div>

          <div className="dado">
            <span className="indicador">Empresa:</span>
            <span className="empresa">{elemento.empresa}</span>
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
            <span>JavaScript</span>
          </div>

          
          {/* <div className="dado">
            <span><h1>Nome do curso:</h1>
            

            <TextField
          id="filled-multiline-flexible"
          // label="Multiline"
          multiline
          maxRows={2}
          // maxLenght={20}
          value={value}
          onChange={handleChange}
          variant="filled"
        /> */}
              {/* <textarea name="" id="" cols={3} rows={8} wrap="soft" maxLength={40}
               readOnly 
               > */}
            {/* // value={"JavaScript"} */}
            {/* </textarea> */}
            {/* Nome do curso: */}
            {/* </span> */}
            {/* <span>JavaScript</span> */}
          {/* </div> */}

          <div className="dado">
            <span className="indicador">Código de inscrição:</span>
            <span>088933493</span>
          </div>

          <div className="dado">
            <span className="indicador">Método de Pagamento:</span>
            <span className="pagamento">{elemento.pagamento}</span>
          </div>

          <div className="dado">
            <span className="indicador">Data de inscrição:</span>
            <span>02/05/2021</span>
          </div>

          <div className="dado">
            <span className="indicador">Observação:</span>
            <span>Nenhuma</span>
          </div>

        </div>
      </div>
    </Container>
  );
}
