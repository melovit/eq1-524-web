import "./styles.css";

import Title, { Subtitle2 } from "../../components/Title";
import Box from "../../components/Box";

import CelebrationSvg from "../../assets/celebration.svg";

import Article, {
  ArticleBody2,
} from "../../components/Article";

import Heart from "../../assets/heart.svg";

const Sobre = () => {
  return (
    <div className="h-100">
      <div className="row h-100">
        <Box
          styles={{
            alignItems: "flex-start",
            justifyContent: "center",
            paddingLeft: 20,
            position: "relative",
          }}
        > 
        <Title style={{ alignSelf: "flex-start" }}>
            MITOS & VERDADES <br />
            SOBRE A DOAÇÃO <br />
            DE SANGUE <br />
          </Title>

          <Article>
            <ArticleBody2>
            <li>MITO: Quem tem piercing e tatuagem não pode doar;</li> 
            <li>VERDADE: Pessoas com menos de 50 kg não podem doar;</li>
            <li>MITO: Mulheres não pode doar sangue durante a menstruação;</li>
            <li>VERDADE: O doador não vai sentir falta desse sangue no seu corpo;</li>
            <li>MITO: Quem teve dengue nunca mais pode doar sangue; </li>
            <li>VERDADE: É preciso não ingerir alcoólicos antes de doar sangue. </li>
            </ArticleBody2>
          </Article>
          <img className="img" src={CelebrationSvg} alt="people celebrating" style={{width: "45%" , height: "45%"}}/>
        </Box>
        
        <div className="col">
          
        <div className="main-container h-100">
      <img src={Heart} alt="svg" style={{ width: "30%", height: "30%" }} />
      <Title style={{ color: "black" }}>Feito com muito amor!</Title>
      <Subtitle2>
        Este projeto foi desenvolvido com o intuito de ajudar e encorajar o
        máximo de pessoas possíveis a concientizarem-se e doarem sangue, esse é
        um ato saudoso e que deve fazer parte da rotina de todos nós. Doar
        sangue salva vidas!
      </Subtitle2>
      <Subtitle2>
        Desenvolvido por:
        Antônio Vitor, 
        Karolinny Oliveira,
        Maria Vitória e
        Saulo Teixeira. 
      </Subtitle2>
    </div>
  );

        </div>
      </div>
    </div>
  );
};

export default Sobre;

