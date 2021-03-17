import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Mais from "./pages/Mais";
import TipoSanguineo from "./pages/TipoSanguineo";
import Sobre from "./pages/Sobre";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/mais" component={Mais} />
        <Route path="/tiposanguineo" component={TipoSanguineo} />
        <Route path="/sobre" component={Sobre} />
      </Switch>
    </Router>
  );
}

export default App;
