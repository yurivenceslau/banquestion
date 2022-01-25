import { useNavigate } from "react-router-dom";
import { Pergunta } from "../Pergunta";
import { Container } from "./styles";
import { useState } from "react";
import { FinalizarProvaModal } from "../FinalizarProvaModal";
import {toast} from 'react-toastify';


interface propsPerguntas {
  entrada: boolean;
  handleAvaliacaoOpen: () => {};
  handleAvaliacaoClose: () => {};
  textFinishTimes: number
  handleTextFinishTimes: () => {};
}


export function Perguntas({entrada,handleAvaliacaoOpen,handleAvaliacaoClose,textFinishTimes,handleTextFinishTimes}:propsPerguntas) {
  const navigate = useNavigate();
  let arr = [
    {
      pergunta:
        "(CESPE - 2018 - Polícia Federal - Escrivão de Polícia Federal) - Acerca de redes de computadores e segurança, julgue o item que segue.Os aplicativos de antivírus com escaneamento de segunda geração utilizam técnicas heurísticas para identificar códigos maliciosos.",
      alternativas: ["Certo", "Errado"],
    },
    {
      pergunta:
        "(CESPE - 2016 - FUB - Conhecimentos Básicos) - Acerca de sítios de busca e pesquisa na Internet, de gerenciamento de arquivos e de aplicativos para segurança, julgue o item subsequente. A utilização de firewalls em uma rede visa impedir acesso indevido dentro da própria rede e também acessos oriundos da Internet.",
      alternativas: ["Certo", "Errado"],
    },
    {
      pergunta:
        "(IF-TO - 2016 - IF-TO - Assistente de Laboratório) - Entre as opções abaixo, escolha a que apresenta o sinal utilizado para dar início a edição de funções no aplicativo LibreOffice Calc, em português.",
      alternativas: ["-", "%", "=", "+", "/"],
    },
    {
      pergunta:
        "(UERR - 2018 - CODESAIMA - Assistente de Informática) - Para realizar a manipulação de Banco de Dados, precisamos de alguns comandos que são divididos nas categorias DDL, DML e DCL. Assinale a alternativa correta, indicando quais os comandos abaixo que fazem parte das referidas categorias respectivamente.",
      alternativas: [
        "RENAME, COMMENT, SELECT.",
        "ALTER, SELECT, GRANT.",
        "ALTER, SELECT, INSERT.",
        "SELECT, UPDATE, DELETE.",
        "CREATE, COMMENT, RENAME.",
      ],
    },
    {
      pergunta:
        "(UERR - 2018 - CODESAIMA - Assistente de Informática) - Para realizar a manipulação de Banco de Dados, precisamos de alguns comandos que são divididos nas categorias DDL, DML e DCL. Assinale a alternativa correta, indicando quais os comandos abaixo que fazem parte das referidas categorias respectivamente.",
      alternativas: [
        "RENAME, COMMENT, SELECT.",
        "ALTER, SELECT, GRANT.",
        "ALTER, SELECT, INSERT.",
        "SELECT, UPDATE, DELETE.",
        "CREATE, COMMENT, RENAME.",
      ],
    },
  ];
  const [isFinishTestModalOpen, setisFinishTestModalOpen] = useState(false);

  const verificacao=(id: any,value:any)=>{
    if(value ===''){
      console.log("Resposta aqui: ",id, "aqui esta seu gabarito: ",value)
    }else{
      console.log("EU NAO AGUENTO MAIS")
    }
  }

  const [gabarito,setGabarito]=useState([
    {id:0,
      value:true
    },
    {id:1,
      value:false
    }
  ])

  const handleFinishTestModalOpen = () => {
    // {arr.map((per, i) => {
    //   return (
    //    {per.pergunta} alternativas={per.alternativas} verificacao={(id: any,value: any)=>verificacao(id,value)} 
    //   );
    // }}
    // {alternativas.map(pa)}
    setisFinishTestModalOpen(true);
    // verificacao(id,value);
    // handleSubmit(handleSubmit);
    console.log(arr.length);
  };

  const handleFinishTestModalClose = () => {
    setisFinishTestModalOpen(false);
  };

  const handleSubmit = (event:any)=>  {
    event.preventDefault();
    console.log("Entrou/Enviou");
  }


  return (
    <Container>
      {arr.map((per, i) => {
        return (
          <Pergunta key={i} pergunta={per.pergunta} alternativas={per.alternativas} 
          handleSubmit={handleSubmit} 
          verificacao={(id: any,value: any)=>verificacao(id,value)}  />
        );
      })}
      <button type="submit"  onClick={handleFinishTestModalOpen}>
        <span>
         Enviar
        </span>
      </button>
      <FinalizarProvaModal 
        isOpen={isFinishTestModalOpen} 
        onRequestClose={handleFinishTestModalClose} 
        entrada={entrada}
        handleAvaliacaoOpen={handleAvaliacaoOpen}
        handleAvaliacaoClose={handleAvaliacaoClose}
        textFinishTimes={textFinishTimes}
        handleTextFinishTimes={handleTextFinishTimes}/>
    </Container>
  );
}
