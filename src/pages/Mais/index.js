import React from "react";
import { Link } from "react-router-dom";

import Donation from "../../assets/donation.svg";

import Button from "../../components/Button";
import Box from "../../components/Box";
import Article, {
  ArticleTitle,
  ArticleTitle2,
  ArticleBody,
  ArticleBody2,
  ArticleFont,
} from "../../components/Article";
import Title, { Subtitle } from "../../components/Title";

import "./styles.css";

const Mais = () => {
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
            Doe <br />
            SANGUE <br />
            Doe <br />
            VIDA
          </Title>
          <Subtitle
            style={{
              textAlign: "left",
              paddingLeft: 0,
              fontSize: 22,
              color: "white",
            }}
          >
            Fazer alguém feliz está em suas mãos! Transfusões de sangue fazem a
            diferença entre a vida e a morte para centenas de pacientes todos os
            dias.
          </Subtitle>
          <img
            alt="svg"
            src={Donation}
            style={{
              position: "absolute",
              top: 20,
              right: 10,
              width: "20%",
              height: "20%",
            }}
          />
          <Link to="/tiposanguineo">
            <Button
              styles={{
                paddingTop: 10,
                paddingBottom: 10,
                paddingRight: 15,
                paddingLeft: 15,
                marginTop: 10,
              }}
            >
              <Title style={{ fontSize: 14, margin: 0 }}>
                MEU TIPO SANGUÍNEO
              </Title>
            </Button>
          </Link>

          <Article>
            <ArticleTitle2>QUEM PODE DOAR?</ArticleTitle2>
            <ArticleBody2>
            <li>Estar alimentado;</li> 
            <li>Evite alimentos gordurosos 3 horas da doação de sangue;</li>
            <li>Ter dormido pelo menos 6 horas nas últimas 24 horas;</li>
            <li>Pessoas com idade entre 60 e 69 anos só poderão doar se já o tiverem feito antes dos 60 anos;</li>
            <li>A frequência máxima é de 4 doações de sangue anuais para o homem e de 3 para as mulheres;</li>
            <li>O intervalo mínimo entre uma doação de sangue e outra é de 2 meses para os homens e de 3 meses para
            as mulheres;</li>
            </ArticleBody2>
          </Article>

        </Box>
        <div className="col">
          <Article>
            <ArticleTitle style={{ color: "black" }}>
              DOE SANGUE ANTES DE RECEBER A VACINA CONTRA O COVID-19
            </ArticleTitle>
            <ArticleBody>
              Após a vacina é necessário aguardar: Sinovac/Butantan - 48 horas
              || AstraZeneca/Fiocruz - 7 dias {"\n"}
              {"\n"}
              Ajude-nos a divulgar esta informação e, se possível, traga sua
              carteira de vacinação.
            </ArticleBody>
            <ArticleFont href="https://www.colsan.org.br/site/">
              Fonte: COLSAN
            </ArticleFont>
            <ArticleBody>
              <br></br>
              Hemoal Maceió: {"\n"}
              {"\n"}
              R. Dr. Jorge de Lima, 58, Trapiche da Barra, Maceió - AL, 57010-300
            </ArticleBody>
            <ArticleBody>
              Hemoal Arapiraca: {"\n"}
              {"\n"}
              R. Desportista Ernesto Alves Siqueira, 49, Centro, Arapiraca - AL, 57300-095
            </ArticleBody>
          </Article>
        </div>
      </div>
    </div>
  );
};

export default Mais;
