import { Container, Contatos, Content, Info } from "./style";
import React, { useState, useEffect} from "react";
import logoAlan from "../../imagens/logoAlan.png"



export function EspacoLogin(){
    const [login, setLogin] = useState({
        user:"",
        password: "",
    })

    const handleChange = 
        (event: 
            | React.ChangeEvent<HTMLSelectElement>
            | React.ChangeEvent<HTMLInputElement>
        
        )=>{
        setLogin(
            {...login, [event.target.name]: event.target.value}
        )
    }
    
    useEffect(()=>{
        // console.log(login)
    }, [login])

    const handleSubmit = (event: any) => {
        event.preventDefault()
        console.log(login)
    }

    return(
        <Container>
            <img src={logoAlan} alt="logoAlan" />
            <Content onSubmit = {handleSubmit}>
                <Info>
                    <span>Faça login para acessar</span>
                </Info>
                <input type="text" name="user" onChange={handleChange} placeholder="Login" />
                <input type="password" name="password" onChange={handleChange} placeholder="Senha" />
                <button type="submit">ACESSAR</button>
                <Contatos>
                    <strong>Nao conseguiu acessar seu Portal?</strong>
                    <a href="">Entre em contato conosco!</a>
                </Contatos>
            </Content>
        </Container>
    )
}