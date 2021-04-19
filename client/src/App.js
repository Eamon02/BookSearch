import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
    <Router>
			<Header />
      <Switch>
			<Route exact path='/' component={Main} />
      </Switch>
      </Router>
	);
}

export default App;
