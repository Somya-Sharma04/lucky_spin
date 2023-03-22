import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Spin from "./components/Spin";
import Reward from "./components/Reward";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/spin" component={Spin} />
          <Route exact path="/reward" component={Reward} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
