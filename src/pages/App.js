import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import join from './join';
function App(){
    return (
      <Router>
        <Switch>
          <Route path="/" component={join} />
        </Switch>
      </Router>
    );
}
export default App;