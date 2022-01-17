import { useState } from 'react';
import { Dados } from '../Dados';
import { PerfilConteudo } from '../PerfilConteudo';
import { Container } from './styles';

export function ConteudoInformacoes() {
  const [dados,setDados] = useState({
    nome: "Felipe",
    cpf: "025.255.225-69",
    email: "werlley@gmail.com",
    telefone: "(88) 58585-5858",
    empresa: "Ágil Engenharia",
    curso:"JavaScript",
    codigo:"088933493",
    pagamento:"",
    data:"02/05/2021",
    observacao:"Nenhuma",
  })

  return (
    <Container>
     <PerfilConteudo dados={dados} 
     setDados={setDados}
     />
     <Dados dados={dados} 
     setDados={setDados}
     />
    </Container>
  );
};

