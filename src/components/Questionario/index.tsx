import { Perguntas } from "../Perguntas";
import { TituloAvaliacao } from "../TituloAvaliacao";
import { Container } from "./styles";

export function Questionario() {
  return (
    <Container>
      <TituloAvaliacao/>
      <Perguntas />
    </Container>
  );

  {
    /* 
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
</div> */
  }
}
