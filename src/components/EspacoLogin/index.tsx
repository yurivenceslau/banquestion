import { Container, Content, Info } from "./style";
import React, { useState, useEffect} from "react";


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
            <Content onSubmit = {handleSubmit}>
                <Info>
                    <span>Insira seus dados aqui para ter acesso ao site</span>
                </Info>
                <input type="text" name="user" onChange={handleChange} placeholder="Login" />
                <input type="password" name="password" onChange={handleChange} placeholder="Senha" />
                <button type="submit">Acessar Conta</button>
                <a href="">Tenha acesso ao .Manager rapidamente AQUI!</a>
            </Content>
        </Container>
    )
}