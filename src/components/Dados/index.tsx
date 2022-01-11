import { Container } from "./styles";
import React from 'react';
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
            <span >Delair Cavalcante Andrade</span>
          </div>

          <div className="dado">
            <span className="indicador">CPF:</span>
            <span>088.869.659-09</span>
          </div>

          <div className="dado">
            <span className="indicador">Email:</span>
            <span>delay@gmail.com</span>
          </div>

          <div className="dado">
            <span className="indicador">Telefone:</span>
            <span>(88)994235993</span>
          </div>

          <div className="dado">
            <span className="indicador">Empresa:</span>
            <span>Alan Araújo</span>
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
            <span>Pix</span>
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
