import { Container } from './styles';


export function Caixa(){
  return (
    
    <Container>
      <div className="titulo">
      <span>
        Questões
      </span>
      </div>
      <div className="questao">
        <div className="pergunta">
          <h2>Assim como o Microsoft Internet Explorer, são navegadores de Internet, EXCETO:</h2 >
        </div>
        <form method="POST">
          <div className="opcao-1">
          <input type="radio" name="radio" id="opcao-1"/>
          <label htmlFor="opcao-1">Mozilla Firefox</label>
          </div>

          <div className="opcao-2">
          <input type="radio"name="radio"id="opcao-2"/>
          <label htmlFor="opcao-2">Google Chrome</label>
          </div>

          <div className="opcao-3">
          <input type="radio"name="radio" id="opcao-3"/>
          <label htmlFor="opcao-3">Opera</label>
          </div>

          <div className="opcao-4">
          <input type="radio"name="radio"id="opcao-4"/>
          <label htmlFor="opcao-4">NetScape</label>
          </div>

          <div className="opcao-5">
          <input type="radio"name="radio" id="opcao-5"/>
          <label htmlFor="opcao-5">Debian</label>
          </div>

        </form>
        <div className="pergunta">
          <h2>
(CESPE - 2016 - FUB - Conhecimentos Básicos) - Acerca de sítios de busca e pesquisa na Internet, de gerenciamento de arquivos e de aplicativos para segurança, julgue o item subsequente. A utilização de firewalls em uma rede visa impedir acesso indevido dentro da própria rede e também acessos oriundos da Internet.
          </h2>
        </div>
        <form method="POST">
          <div className="opcao-1">
          <input type="radio" name="radio" id="opcao-1.1"/>
          <label htmlFor="opcao-1.1">Certo</label>
          </div>

          <div className="opcao-2">
          <input type="radio" name="radio" id="opcao-2.1"/>
          <label htmlFor="opcao-2.1">Errado</label>
          </div>
        </form>

        <div className="pergunta">
          <h2>
          (IF-TO - 2016 - IF-TO - Assistente de Laboratório) - Entre as opções abaixo, escolha a que apresenta o sinal utilizado para dar início a edição de funções no aplicativo LibreOffice Calc, em português.
          </h2>
        </div>
        <form method="POST">
          <div className="opcao-1">
          <input type="radio" name="radio" id="opcao-1.2"/>
          <label htmlFor="opcao-1.2">-</label>
          </div>

          <div className="opcao-2">
          <input type="radio" name="radio" id="opcao-2.2"/>
          <label htmlFor="opcao-2.2">%</label>
          </div>

          <div className="opcao-3">
          <input type="radio" name="radio" id="opcao-3.2"/>
          <label htmlFor="opcao-3.2">=</label>
          </div>

          <div className="opcao-4">
          <input type="radio" name="radio" id="opcao-4.2"/>
          <label htmlFor="opcao-4.2">+</label>
          </div>

          <div className="opcao-5">
          <input type="radio" name="radio" id="opcao-5.2"/>
          <label htmlFor="opcao-5.2">/</label>
          </div>

        </form>

        <div className="pergunta">
          <h2>
(UERR - 2018 - CODESAIMA - Assistente de Informática) - Para realizar a manipulação de Banco de Dados, precisamos de alguns comandos que são divididos nas categorias DDL, DML e DCL. Assinale a alternativa correta, indicando quais os comandos abaixo que fazem parte das referidas categorias respectivamente.</h2 >
        </div>
        <form method="POST">
          <div className="opcao-1">
          <input type="radio" name="radio" id="opcao-1.3"/>
          <label htmlFor="opcao-1.3">RENAME, COMMENT, SELECT.</label>
          </div>

          <div className="opcao-2">
          <input type="radio" name="radio" id="opcao-2.3"/>
          <label htmlFor="opcao-2.3">ALTER, SELECT, GRANT.</label>
          </div>

          <div className="opcao-3">
          <input type="radio" name="radio" id="opcao-3.3"/>
          <label htmlFor="opcao-3.3">ALTER, SELECT, INSERT.</label>
          </div>

          <div className="opcao-4">
          <input type="radio" name="radio" id="opcao-4.3"/>
          <label htmlFor="opcao-4.3">SELECT, UPDATE, DELETE.</label>
          </div>

          <div className="opcao-5">
          <input type="radio" name="radio" id="opcao-5.3"/>
          <label htmlFor="opcao-5.3">CREATE, COMMENT, RENAME.</label>
          </div>

        </form>
        
      </div>
      
{/* 
      <div className="custom-radios">
  <div>
    <input type="radio" id="color-1" name="color" value="color-1" checked/>
    <label htmlFor="color-1">
      <span>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
      </span>
    </label>
  </div>
  
  <div>
    <input type="radio" id="color-2" name="color" value="color-2"/>
    <label htmlFor="color-2">
      <span>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
      </span>
    </label>
  </div>
  
  <div>
    <input type="radio" id="color-3" name="color" value="color-3"/>
    <label htmlFor="color-3">
      <span>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
      </span>
    </label>
  </div>

  <div>
    <input type="radio" id="color-4" name="color" value="color-4"/>
    <label htmlFor="color-4">
      <span>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
      </span>
    </label>
  </div>
</div> */}

    </Container>
    
  );
};


