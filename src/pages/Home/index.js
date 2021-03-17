import { Link } from "react-router-dom";

import CelebrationSvg from "../../assets/celebration.svg";

import Box from "../../components/Box";
import Showcase from "../../components/Showcase";

import BloodDonation from "../../assets/blood-donation.svg";
import Happiness from "../../assets/happiness.svg";
import World from "../../assets/world.svg";

import "./styles.css";
import Button from "../../components/Button";

export default function Home() {
  return (
    <div className="h-100">
      <div className="row h-100">
        <div className="col-5 bg-white d-flex justify-content-center">
          <img className="img" src={CelebrationSvg} alt="people celebrating" />
        </div>
        <Box center>
          <h1 className="text-white">DOAR SANGUE SALVA VIDAS!</h1>
          <p className="text-light mx-5 text-center font-weight-light">
            Transfusões de sangue fazem a diferença entre a vida e a morte para
            centenas de pacientes todos os dias.
          </p>
          <Showcase>
            <img className="icon" src={BloodDonation} alt="" />
            <img className="icon" src={Happiness} alt="" />
            <img className="icon" src={World} alt="" />
          </Showcase>
          <Link to="/mais">
            <Button>Saiba mais!</Button>
          </Link>
          <Link to="/sobre">
          </Link>
        </Box>
      </div>
    </div>
  );
}
