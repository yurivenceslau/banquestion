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
}


export function Perguntas({entrada,handleAvaliacaoOpen,handleAvaliacaoClose}:propsPerguntas) {
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
  const vetor= arr.length;
  

  let lastId = 0;

// export default function(prefix='id') {
//     lastId++;
//     return `${prefix}${lastId}`;
// }

  const verificacao=(id: any,value:any)=>{
    console.log(id);
    lastId++;
    return (console.log(`existe isso de ids: ${lastId}`));
    
    // if(id? valor=id+1)
    
    // if(1===id.length){
    //   console.log("deu");
    // }else{
    //   console.log("insuficiente");
      
    // }
    // if(value ===''){
    //   console.log("Resposta aqui: ",id, "aqui esta seu gabarito: ",value)
    // }else{
    //   console.log("EU NAO AGUENTO MAIS")
    // }
  }

  const [gabarito,setGabarito]=useState([
    {id:0,
      value:true
    },
    {id:1,
      value:false
    }
  ])

  const handleFinishTestModalOpen = (event:any) => {
    setisFinishTestModalOpen(true);
    event.preventDefault();
    console.log("Entrou/Enviou");

  };

//   const confirmacao=()=>{
   
// }

  const handleFinishTestModalClose = () => {
    setisFinishTestModalOpen(false);
    // confirmacao();
  };

  const handleSubmit = (event:any)=>  {
    event.preventDefault();
    console.log("Entrou/Enviou");
  }


  return (
    <Container onSubmit={handleFinishTestModalOpen}
     
     >
    {/* <form > */}

      {arr.map((per, i) => {
        return (
          <Pergunta 
            key={i} pergunta={per.pergunta}
            vetor={vetor} 
            alternativas={per.alternativas} 
            handleSubmit={handleFinishTestModalOpen} 
            verificacao={(id: any,value: any)=>verificacao(id,value)}
            index={i}  
          />
        );
      })}
      <button type="submit"  //onClick={handleFinishTestModalOpen}
      >
        <span>
         Enviar
        </span>
      </button>
      {/* </form> */}
      <FinalizarProvaModal 
        isOpen={isFinishTestModalOpen} 
        onRequestClose={handleFinishTestModalClose} 
        entrada={entrada}
        handleAvaliacaoOpen={handleAvaliacaoOpen}
        handleAvaliacaoClose={handleAvaliacaoClose}/>
    </Container>
  );
}
