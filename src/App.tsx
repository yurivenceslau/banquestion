import { Logado } from "./pages/Logado";
import { Login } from "./pages/Login";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <GlobalStyle>
      <Login/>
      <Logado/>
    </GlobalStyle>
  );
}