import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Main from './components/main'
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";

import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <>
    <CssBaseline />
    <Route exact path="/" component={Main} />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contacts" component={Contacts} />
    </>
  );
}

export default App;
