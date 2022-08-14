import './App.css';
import { Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Main from './pages/main/Main';
import Welcome from './pages/welcome/Welcome.jsx';
import FormActivity from './pages/formActivity/Form-activity';
import CardDetail from './components/cardDetail/CardDetail';

function App() {
  return (
    <div className="App">
      <Route exact path={"/formActivity"} component={FormActivity} />
      <Route exact path={"/cardDetail/:code"} component={CardDetail} />
      <Route exact path={"/home"} component={Main} />
      <Route exact path={"/"} component={Welcome} />
    </div>
  );
}

export default App;
