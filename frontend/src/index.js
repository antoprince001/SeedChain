import { Router, Route, Switch } from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createBrowserHistory } from "history";
import reportWebVitals from './reportWebVitals';
//pages
import Content from "./components/Content";
import login from "./components/login";
import Scadash from "./components/scadash.js";
import Stldash from "./components/stldash";
import Timeline from "./components/timeline.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
 <Switch>
       <Route path="/dash"  component= { Content } />
       <Route path="/login"  component= { login } />
       <Route path="/scadash"  component= { Scadash } />
       <Route path="/stldash"  component= { Stldash } />
       <Route path="/timeline"  component= { Timeline } />
 </Switch>
 </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
