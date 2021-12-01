import { Container, Content } from "./styles";
import editarImg from "../../imagens/pen-tool.svg";

import React from "react";
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
import { FiAirplay } from "react-icons/fi";
import { FiCornerUpLeft } from "react-icons/fi";
//import { PromptProps } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
     
    },
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
      // backgroundColor: 'red !important',
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
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: "flex",
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


interface propsLogado{
  handleDrawerOpen: ()=>void;
  handleDrawerClose: ()=>void;
  open: boolean;
}
export default function Logado({handleDrawerOpen, handleDrawerClose, open}:propsLogado){
  const navigate = useNavigate();
  const classes = useStyles();
  const theme = useTheme();

  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={()=>handleDrawerOpen()}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            ALAN
          </Typography>
        </Toolbar>
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
          <IconButton onClick={()=>handleDrawerClose()}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        

        <Container>
          <List>
            <button onClick={() => navigate("/Dashboard")}>
              <img src={editarImg} alt="editar" />
              <h2>Avaliação</h2>
             
            </button>

            <button>
            <FiAirplay style={{color: ' red', fontSize: '3rem'}}/>
            </button>
            <button>
            <FiCornerUpLeft style={{color: ' red', fontSize: '3rem'}}/>
            </button>
          </List>
        </Container>
      </Drawer>
      {/* <main className={classes.content}>
        <div className={classes.toolbar} />
       
      </main> */}
    </div>
  );
}
