import { Container, Contatos, Content, Info } from "./style";
import React, { useState, useEffect} from "react";
import logoAlan from "../../imagens/logoAlan.png"
import { Link } from "react-router-dom"
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Statement } from "typescript";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: "center",
      justifyContent: "center",
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
    "& .MuiInputBase-root":{
      backgroundColor: "#e2e2e2"
    },
  }),
);

interface State {
    user: string;
    password: string;
    showPassword: boolean;
  }

export function EspacoLogin(){
    const classes = useStyles();
    const navigate = useNavigate();
    const [login, setLogin] = React.useState<State>({
        user:"",
        password: "",
        showPassword: false,
    })

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setLogin({ ...login, [prop]: event.target.value });
    };
    // const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setLogin({ ...login, [prop]: event.target.value });
    //   };
    
    useEffect(()=>{
        // console.log(login)
    }, [login])

    const handleSubmit = (event: any) => {
        event.preventDefault()
        if(login.user === ""){
          toast.error("Login obrigatório!")
        }else if(login.password === ""){
          toast.error("Senha obrigatória!")
        }else{
          console.log(login)
          navigate("/autorizacao")
        }
    }
    const handleClickShowPassword = () => {
        setLogin({ ...login, showPassword: !login.showPassword });
      };
    
      const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
      };

    return(
        <Container>
            <img src={logoAlan} alt="logoAlan" />
            <Content onSubmit = {handleSubmit}>
                <Info>
                    <span>Faça login para acessar</span>
                </Info>
                <div className={classes.root}>
        <TextField id="outlined-basic" label="Login *" variant="outlined" onChange={handleChange('user')} style={{width: "18.7rem"}} />

        <FormControl style={{width: "18.7rem"}} className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel required htmlFor="outlined-adornment-password">Senha</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={login.showPassword ? 'text' : 'password'}
            value={login.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {login.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
                    <button
                    className="botao_acessar"
                    type="submit">ACESSAR</button>
                </div>
                <Contatos>
                    <strong>Nao conseguiu acessar sua conta?</strong>
                    <Link to = "/contato">Entre em contato conosco!</Link>
                </Contatos>
            </Content>
        </Container>
    )
}