import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {LandingPage} from './components/LandingPage';
import TutorialPage from './components/TutorialPage';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PropsSpreadOperator from './tutorials/PropsSpreadOperator';
import MultiSelectForm from './tutorials/MultiSelectForm';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Switch>
          <Route path="/tutorial" exact>
              <TutorialPage />
          </Route>
          <Route path="/props-spread-operator" exact>
            <PropsSpreadOperator />
          </Route>
          <Route path='/multi-section-form' exact>
            <MultiSelectForm />
          </Route>
          <Route path='/accordian' exact>
            <MultiSelectForm />
          </Route>
          <Route path="/" >
              <LandingPage />
          </Route>
    </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
