import "./styles.css";

import Title, { Subtitle } from "../../components/Title";

import Heart from "../../assets/heart.svg";

export default function Sobre() {
  return (
    <div className="main-container h-100">
      <img src={Heart} alt="svg" style={{ width: "30%", height: "30%" }} />
      <Title style={{ color: "black" }}>Feito com muito amor!</Title>
      <Subtitle>
        Este projeto foi desenvolvido com o intuito de ajudar e encorajar o
        máximo de pessoas possíveis a concientizarem-se e doarem sangue, esse é
        um ato saudoso e que deve fazer parte do costume de todos nós. Doar
        sangue salva vidas!
      </Subtitle>
    </div>
  );
}
