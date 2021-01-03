import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Main from './components/main'
import Resume from './components/Resume';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <>
    <CssBaseline />
      <Route exact path='/' component={Main} />
      <Route path='/resume' component={Resume} />
    </>
  );
}

export default App;
