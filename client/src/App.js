import './App.css';
import { Route, Switch } from "react-router-dom";
import Main from './pages/main/Main';
import Welcome from './pages/welcome/Welcome.jsx';
import FormActivity from './pages/formActivity/Form-activity';
import CardDetail from './components/cardDetail/CardDetail';
import PageNotFound from './components/404/PageNotFound';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/formActivity"} component={FormActivity} />
        <Route exact path={"/cardDetail/:code"} component={CardDetail} />
        <Route exact path={"/home"} component={Main} />
        <Route exact path={"/"} component={Welcome} />
        <Route path='*' component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
