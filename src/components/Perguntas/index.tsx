
import { Pergunta } from '../Pergunta';
import { Container } from './styles';

export function Perguntas() {
  let arr=[{
    pergunta:
      '(CESPE - 2018 - Polícia Federal - Escrivão de Polícia Federal) - Acerca de redes de computadores e segurança, julgue o item que segue.Os aplicativos de antivírus com escaneamento de segunda geração utilizam técnicas heurísticas para identificar códigos maliciosos.',
    alternativas: ['Certo', 'Errado'],
  },{
    pergunta:
      '(CESPE - 2016 - FUB - Conhecimentos Básicos) - Acerca de sítios de busca e pesquisa na Internet, de gerenciamento de arquivos e de aplicativos para segurança, julgue o item subsequente. A utilização de firewalls em uma rede visa impedir acesso indevido dentro da própria rede e também acessos oriundos da Internet.',
    alternativas: ['Certo', 'Errado'],
  },{
    pergunta:'(IF-TO - 2016 - IF-TO - Assistente de Laboratório) - Entre as opções abaixo, escolha a que apresenta o sinal utilizado para dar início a edição de funções no aplicativo LibreOffice Calc, em português.',
    alternativas:['-', '%', '=', '+', '/'],
  },{
    pergunta:
    '(UERR - 2018 - CODESAIMA - Assistente de Informática) - Para realizar a manipulação de Banco de Dados, precisamos de alguns comandos que são divididos nas categorias DDL, DML e DCL. Assinale a alternativa correta, indicando quais os comandos abaixo que fazem parte das referidas categorias respectivamente.',
    alternativas:['RENAME, COMMENT, SELECT.', 'ALTER, SELECT, GRANT.', 'ALTER, SELECT, INSERT.', 'SELECT, UPDATE, DELETE.', 'CREATE, COMMENT, RENAME.'],
  }]
  return (
    <Container>
    
      {arr.map((per)=>{
          return(
      <Pergunta
              pergunta={per.pergunta}
              alternativas={per.alternativas}
            />
          );
          })}
    </Container>
  );
};

