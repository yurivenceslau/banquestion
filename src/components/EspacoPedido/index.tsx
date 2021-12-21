import { Container, Contatos, Content, Info, Alinhador } from "./styles";
import React, { useState, useEffect} from "react";
import logoAlan from "../../imagens/logoAlan.png"
import { Link } from "react-router-dom"
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { useNavigate } from "react-router-dom";
//@ts-ignore
import { mask } from 'remask';
import { toast } from 'react-toastify';


const currencies = [
    {
      value: 'Erro no Acesso do Portal',
      label: 'Erro no Acesso do Portal',
    },
    {
      value: 'Pedido de Cadastro',
      label: 'Pedido de Cadastro',
    },
    {
      value: 'Dados Incorretos',
      label: 'Dados Incorretos',
    },
    {
      value: 'Outro',
      label: 'Outro',
    },
  ];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',

      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '18.4rem',

        '& .MuiSelect-outlined.MuiSelect-outlined': {
          backgroundColor: '#e2e2e2',
        },
        '& .MuiInputBase-input.MuiOutlinedInput-input':{
          flex: '1',
          width: '100%',
        },
      },
    },
    textField: {
      width: "100ch"
    }
  }),
);

export function EspacoPedido() {
  const [login, setLogin] = React.useState<State>({
    name:"",
    email: "",
    tel: "",
    cod:"",
})
const classes = useStyles();
const navigate = useNavigate();
const [currency, setCurrency] = React.useState('Pedido de Cadastro');
const [value, setValue] = React.useState('');
const pattern1 = '(99) 99999-9999';
const pattern2 = '999-999999';
 

const handleChange =(event: React.ChangeEvent<HTMLInputElement>)=>{
  if(event.target.name == "tel"){
    setLogin(
      {...login, [event.target.name]: mask(event.target.value, pattern1)}
  )
  }else if(event.target.name == "cod"){
    setLogin(
      {...login, [event.target.name]: mask(event.target.value, pattern2)}
    )
  }else {
  setLogin(
        {...login, [event.target.name]: event.target.value}
    )
  }
}
const handleChangeSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
};
const handleChangeTextarea = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(event.target.value);
};

interface State {
  name: string;
  email: string;
  tel: string;
  cod: string;
}

// const alertNome = () => toast.error("Nome Obrigatório");

useEffect(()=>{
    // console.log(login)
}, [login])

const handleSubmit = (event: any) => {
    event.preventDefault()
    if(login.name === ""){
      toast.error("Nome Obrigatório!");
    }else if(login.email === ""){
      toast.error("Email Obrigatório!");
    }else if(login.tel !== ""){
      if(login.tel.length < 15){
        toast.error("Numero inválido!");
      }else{
        if(login.cod.length < 10){
          if(login.cod === ""){
            toast.error("Código de Inscrição obrigatório!");
          }else{
            toast.error("Código de Inscrição inválido!");
          }
        }else{
          console.log(login)
          console.log(currency)
          console.log(value)
          toast.success("Recebemos sua mensagem e logo entraremos em contato!");
          navigate("/");
        }
      }
    }else if(login.cod.length < 10){
      if(login.cod === ""){
        toast.error("Código de Inscrição obrigatório");
      }else{
        toast.error("Código de Inscrição inválido");
      }
    }else{
      console.log(login)
      console.log(currency)
      console.log(value)
      toast.success("Recebemos sua mensagem e logo entraremos em contato!");
      navigate("/");
    }
}

return(
    <Container>
        <img src={logoAlan} alt="logoAlan" />
        <Content>
            <form id="formDados" onSubmit = {handleSubmit} className={classes.root} noValidate autoComplete="off">
            <Info>
                <span>Preencha com seus dados</span>
            </Info>
            
            <div className="comp">
            <TextField id="outlined-full-width" name="name" label="Nome" style={{ margin: 8 }} required fullWidth margin="normal" InputLabelProps={{ shrink: true, }} variant="outlined" onChange={handleChange}/>
            </div>
                <div className="comps">
                  <TextField required id="outlined-basic" name="email" type="email" onChange={handleChange} label="E-mail" variant="outlined" />
                  <TextField id="outlined-number" name="tel" onChange={handleChange} label="Number" value={login.tel} type="text" InputLabelProps={{shrink: true,}} variant="outlined" />
            </div>
                <div className = "comps">
                  <TextField required id="outlined-basic" value={login.cod} onChange={handleChange} name="cod" label="Cod. de Inscreção" variant="outlined" />
                  <TextField
                      required
                      id="outlined-select-currency"
                      select
                      label="Assunto"
                      value={currency}
                      onChange={handleChangeSelect}
                      variant="outlined"
                  >
                      {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                              {option.label}
                          </MenuItem>
                      ))}
                  </TextField>
                </div>
                <div className="comp">
                  <TextField
                      id="outlined-multiline-flexible down"
                      label="Descrição"
                      multiline
                      fullWidth
                      maxRows={4}
                      value={value}
                      onChange={e => handleChangeTextarea(e)}
                      variant="outlined"
                      className="inputField"
                  />
                </div>
              <button type="submit">ENVIAR</button>
            <Contatos>
                <strong>Já conseguiu seu acesso?</strong>
                <Link to = "/">Entre no seu Portal!</Link>
            </Contatos>
            </form>
        </Content>
    </Container>
)
};
