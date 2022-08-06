import './App.css';
import Main from './pages/main/Main';
import Welcome from './pages/welcome/Welcome.jsx';
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Route exact path={"/"} component={Welcome} />
      <Route exact path={"/home"} component={Main} />
    </div>
  );
}

export default App;
