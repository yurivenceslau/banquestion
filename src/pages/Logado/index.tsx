import { Nav, Content, Container } from "./styles";
import editarImg from "../../imagens/pen-tool.svg";

import React, { useState } from "react";
import clsx from "clsx";
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar } from "@material-ui/core";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Typography } from "@material-ui/core";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import { useNavigate } from "react-router-dom";

import  alanImg  from "../../imagens/logoAlan.png"
import AlanImg from "../../imagens/alan-perfil.jpg"
import LogoBrancaImg from "../../imagens/LogoBranca.png"

import { FiAirplay } from "react-icons/fi";
import { AiFillProfile } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsArrowBarLeft } from "react-icons/bs";
import { BsClipboard } from "react-icons/bs";
import { BsDoorOpenFill } from "react-icons/bs";
import { BsReplyFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import {BsFillPersonFill} from "react-icons/bs";

import { BsFillArrowLeftCircleFill } from "react-icons/bs";

import { FiCornerUpLeft } from "react-icons/fi";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { OpenDirOptions } from "fs";
import { Style } from "@material-ui/icons";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    appBar: {
      backgroundColor: "#1a6462 ",
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      width: drawerWidth,
      backgroundColor: "whitesmoke",
      boxShadow: "3px 5px 5px #aaaaaa",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      backgroundColor: "whitesmoke",
      
      
      // boxShadow:"(0,0,0,0.9)",
      // boxShadow: "3px 3px gray, -1em 0 0.4em olive",
      boxShadow: "3px 5px 5px #aaaaaa",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: "flex",
      backgroundColor: "whitesmoke",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,

      padding: theme.spacing(3),
    },
  })
);

interface propsLogado {
  open: boolean;
  handleDrawerClose: () => {};
  handleDrawerOpen: () => {};
}

export default function Logado({
  open,
  handleDrawerClose,
  handleDrawerOpen,
}: propsLogado) {
  const navigate = useNavigate();
  const classes = useStyles();
  const theme = useTheme();
  
  return (
    <Container isOpen={open}>
      
      
    <div className={classes.root}>
      
      <CssBaseline />
      <AppBar
        // style={{background:"linear-gradient(to right,#8bbbb9,#1A6462,#1A6462)"}}
      // body {background: linear-gradient(to right,skyblue,dodgerblue);}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Content isOpen={open}>
          <Toolbar>
          
         
            <IconButton style={{ marginRight:'0.8rem',marginLeft:'-0.6rem'}}
              color="inherit"
              aria-label="open drawer"
              onClick={() => handleDrawerOpen()}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
              
            </IconButton>
            
            <Typography variant="h6" noWrap style={
              {display:"flex", flexDirection:"row",alignItems:"center",justifyContent:"space-between",height:"3rem"}}>
              <div className="logo-topo">
              <img src={LogoBrancaImg} alt="logo alan" />
              </div>

              
            </Typography>
           
          </Toolbar>
          <div className="usuario-topo">
              <div className="div_spans">
              <span className="div_span-1">Delair Cavalcante Andrade</span>
              <span className="div_span-2">Delay@agil.com</span>
              {/* style={{fontSize:"1rem"}} */}
              </div>
              <div className="perfil">
               <img src={AlanImg} alt="imagem-de-perfil" />
              </div>
              </div>
        </Content>
        
      </AppBar>
      <Drawer
        
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={() => handleDrawerClose()}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        
      
        <Nav isOpen={open}>
        
          <List style={{display:"flex",justifyContent:"space-between" ,flexDirection:"column"}}>
            <img className="alan-logo" src={alanImg} alt="logo alan"/>
            <div className="botoes-topo-nav">
            <button onClick={()=>{navigate("/"); handleDrawerClose()}} >
              {/* <img src={editarImg} alt="editar" /> */}
              
              <div className="icon">
                <AiFillProfile/>
              </div>
              <h2>Avaliação</h2>
            </button>

            <button onClick={() => {navigate("/perfil"); handleDrawerClose()}}>
              <div className="icon">
                <BsFillPersonFill/>
              </div>
              <h2>Perfil</h2>
            </button>

            <button onClick={() => {navigate("/perfil"); handleDrawerClose()}}>
              <div className="icon">
                <AiFillSetting/>
              </div>
              <h2>Configurações</h2>
            </button>
            </div>

            {/* <button onClick={() => {navigate("/perfil"); handleDrawerClose()}}>
              <img src={editarImg} alt="editar" />
              <div className="icon">
                <BsReplyFill/>
              </div>
              <h2>Voltar</h2>
            </button> */}
            
          </List>
          <div className="botoa-sair-nav">
            <button onClick={() => {navigate("/login"); handleDrawerClose()}}>
              <div className="icon">
                <BsArrowBarLeft/>
              </div>
              <h2>Sair</h2>
            </button>
            </div>
        </Nav>
      </Drawer>
      {/* <main className={classes.content}>
        <div className={classes.toolbar} />
      </main> */}
    </div>
    </Container>
  );

  // ,backgroundColor:"red"
}
