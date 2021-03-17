import React from "react";
import { Link } from "react-router-dom";

import Donation from "../../assets/donation.svg";

import Button from "../../components/Button";
import Box from "../../components/Box";
import Article, {
  ArticleTitle,
  ArticleBody,
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
              fontSize: 24,
              color: "#343434",
            }}
          >
            Fazer alguém feliz está em suas mãos. Transfusões de sangue fazem a
            diferença entre a vida e a morte para centenas de pacientes todos os
            dias
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
          </Article>
        </div>
      </div>
    </div>
  );
};

export default Mais;
