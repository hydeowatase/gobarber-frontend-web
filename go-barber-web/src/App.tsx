import React from "react";


import SignIn from "./pages/SignIn/index";
// import SignUp from "./pages/SignUp/index";
import GlobalStyle from "./styles/global";

import AppProviders from './hooks/index'

const App: React.FC = () => (
  <>
    <AppProviders>
      <SignIn />
    </AppProviders>
    <GlobalStyle />
  </>
);

export default App;
