import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";

import { Container, TituloNovoPerfil, ModalPerfil } from "./styles";
import React, { useState } from "react";
// @ts-ignore
import { mask } from "remask";
import { toast } from 'react-toastify';
import { Dados } from "../Dados";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

interface State {
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  empresa: string;
  curso: string;
  codigo: string;
  pagamento: string;
  data: string;
  observacao: string;
}

interface NovoPerfilProps {
  handleModalClose: () => void;
  ModalOpen: boolean;
  dados: State;
  setDados:React.Dispatch<React.SetStateAction<State>>;
}

Modal.setAppElement("#root");

const currencies = [
  {
    value: "Pix",
    label: "Pix",
  },
  {
    value: "Cartão",
    label: "Cartão",
  },
  {
    value: "Transação",
    label: "Transação",
  },
  {
    value: "Outro",
    label: "Outro",
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",

      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "18.4rem",

        "& .MuiSelect-outlined.MuiSelect-outlined": {
          backgroundColor: "#e2e2e2",
        },
        "& .MuiInputBase-input.MuiOutlinedInput-input": {
          flex: "1",
          width: "100%",
        },
      },
    },
    textField: {
      width: "100ch",
    },
  })
);
export function NovoPerfil({handleModalClose,ModalOpen,dados,setDados}:NovoPerfilProps) {
  const patern = "(99)99999-9999";
  const patern1 = "999.999.999-99";

  const handleChangeSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  const classes = useStyles();
  const [currency, setCurrency] = React.useState("Selecione uma opção");

  const [campo, setCampo] = useState(dados ? dados : {
          nome: "werlley",
          cpf: "025.255.225-69",
          email: "werlley@gmail.com",
          telefone: "(88) 58585-5858",
          empresa: "Ágil Engenharia",
          curso: "JavaScript",
          codigo: "088933493",
          pagamento: "Pix",
          data: "02/05/2021",
          observacao: "Nenhuma",
        });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setCampo({...campo,
    //   [event.target.name]: event.target.value});
    if (event.target.name == "telefone") {
      setCampo({
        ...campo,
        [event.target.name]: mask(event.target.value, patern),
      });
    } else if (event.target.name == "cpf") {
      setCampo({
        ...campo,
        [event.target.name]: mask(event.target.value, patern1),
      });
    } else if (event.target.name == "cpf"){
      setCampo({
        ...campo,
        [event.target.name]: event.target.value,
      });
    } else {
      setCampo({...campo,
        [event.target.name]: event.target.value});
      } 
    }

  const salvar = () => {
    // console.log(campo);
    console.log("Aqui oh:");
    console.log({...campo});
    if(campo.nome===""){
      toast.error("Nome Obrigatório!");
    }else if(campo.email === ""){
      toast.error("Email Obrigatório!");
    }else if(campo.telefone === ""){
        toast.error("Numero obrigatório!");
      }else if(campo.telefone.length < 14){
        toast.error("Numero inválido!");
      }else if(campo.cpf === ""){
        toast.error("CPF obrigatório!");
      }else if(campo.cpf.length < 14){
        toast.error("CPF inválido!");
      }else if(campo.pagamento === ""){
        toast.error("Pagamento inválido!");
      }
    else{
      
      toast.success("Pronto!");
      handleModalClose();
      setDados({...campo});

    }
    // window.location.reload()
  };
  
  const cancelar = () => {
    console.log(campo);
    // window.location.reload();
    handleModalClose();
  };

  // const [clear,setClear] = useState(false);

  return (
    <Modal
      onRequestClose={handleModalClose}
      isOpen={ModalOpen}
      overlayClassName="overlay"
      className="content"
    >
      {/* <h1>deu certo</h1> */}
      <Container>
        <TituloNovoPerfil>
          <span>Editar Perfil</span>
          <div className="salvar">
            <button className="botaoCancelar" onClick={cancelar}>
              Cancelar
            </button>
            <button className="botaoSalvar" onClick={salvar}>
              Salvar
            </button>
          </div>
        </TituloNovoPerfil>
        <ModalPerfil>
          <div className="meusDados">
            <div className="novo">
              <span>Novo Nome:</span>
              <input
                type="text"
                name="nome"
                value= {campo.nome}
                onChange={handleChange}
              />
            </div>

            <div className="novo">
              <span>Novo CPF:</span>
              <input
                type="text"
                name="cpf"
                value={campo.cpf}
                onChange={handleChange}
              />
            </div>

            <div className="novo">
              <span>Novo Email:</span>
              <input 
                type="email"
                name="email"
                value={campo.email}
                onChange={handleChange}
              />
            </div>

            <div className="novo">
              <span>Novo Telefone:</span>
              <input
                type="text"
                name="telefone"
                value={campo.telefone}
                onChange={handleChange}
              />
            </div>

            <div className="novo">
              <span>Nova Empresa:</span>
              <input
                type="text"
                name="empresa"
                value={campo.empresa}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="sobreMim">
            <div className="novo">
              <span>Curso:</span>
              <input type="text" disabled value={campo.curso} />
            </div>

            <div className="novo">
              <span>Código de inscrição:</span>
              <input type="text" disabled value={campo.codigo} />
            </div>

            <div className="novo">
              <span>Método de pagamento:</span>
              {/* <label htmlFor="standard-select">Standard Select</label> */}
              <div className="select">
                <select id="standard-select" name="pagamento" value={campo.pagamento} onChange={({target})=> setCampo({...campo,
        [target.name]: target.value})}>
                  <option value="" disabled>Seleconar</option>
                  <option value="Pix">Pix</option>
                  <option value="Débito">Cartão de débito </option>
                  <option value="Credito">Cartão de credito </option> 
                  <option value="Boleto">Boleto Bancário</option>
                  <option value="Transferência">Transferência bancária</option>
                  <option value="Cheque">Cheque</option>
                  <option value="Dinheiro">Dinheiro</option>
                </select>
              </div>
              {/* <TextField
                      required
                      id="outlined-select-currency"
                      select
                      label="Pagamento"
                      className={classes.root}
                      value={currency}
                      onChange={handleChangeSelect}
                      onChange={handleChange}
                      name="pagamento" 
                      value={campo.pagamento}
                      variant="outlined"
                  >
                      {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                              {option.label}
                              
                          </MenuItem>
                      ))}
                  </TextField> */}
              {/* <input type="text" name="pagamento" value={campo.pagamento} onChange={handleChange}/> */}
            </div>

            <div className="novo">
              <span>Data de Inscrição:</span>
              <input type="text" disabled value={campo.data} />
            </div>

            <div className="novo">
              <span>Observação:</span>
              <input type="text" disabled value={campo.observacao} />
            </div>
          </div>
        </ModalPerfil>
      </Container>
    </Modal>
  );
}
