import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyle from "./styles/global";

import AppProviders from "./hooks/index";

import Routes from "./routes/index";

const App: React.FC = () => (
  <Router>
    <AppProviders>
      <Routes />
    </AppProviders>
    <GlobalStyle />
  </Router>
);

export default App;
