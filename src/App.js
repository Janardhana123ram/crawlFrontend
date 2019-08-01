import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './App.css';
import Main from './Main_page';
import Level1 from './level1';
import Level2 from './level2';
import Level3 from './leve3';

function App() {
  return (
    <Router>
      <div>
        <AppBar position="static" color="default" style={{alignItems: 'center'}}>
          <Toolbar>
            <Typography variant="h4" align="right" color="inherit">
              Python Web Crawler
            </Typography>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/level1/:link/*" component={Level1}/>
          <Route path="/level2/:link/*" component={Level2}/>
          <Route path="/level3/:link/*" component={Level3}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
