import { ReactNode } from 'react';
import youtubeLogo from '../../imagens/youtubeLogo.png'
import facebookLogo from '../../imagens/facebookLogo.png'
import instagramLogo from '../../imagens/instagramLogo.png'
import whatsappLogo from '../../imagens/whatsappLogo.png'
import { CardContato, Container, EspacoContato, TituloContato } from './styles';

export function Contato() {
  return (
    <Container>
      <TituloContato>
        <h1>Contatos</h1>
      </TituloContato>
      <EspacoContato>
        <CardContato href = 'https://www.youtube.com/alanaraujoeng' target = "_blank">
          <img src={youtubeLogo} alt=""/>
          <span>Alan Araújo Eng</span>
        </CardContato>
        <CardContato href = "https://www.facebook.com/AlanRodriguesA" target = "_blank">
          <img src={facebookLogo} alt="" />
          <span>Alan Araújo</span>
        </CardContato>
        <CardContato href="https://www.instagram.com/alanaraujoeng" target = "_blank">
          <img src={instagramLogo} alt="" />
          <span>@alanaraujoeng</span>
        </CardContato>
        <CardContato href = "https://api.whatsapp.com/send/?phone=5588993528826&text=Tenho+interesse+em+solicitar+or%C3%A7amento+dos+seus+servi%C3%A7os&app_absent=0" target = "_blank">
          <img src={whatsappLogo} alt="" />
          <span>Whatsapp</span>
        </CardContato>
      </EspacoContato>
    </Container>
  );
};
