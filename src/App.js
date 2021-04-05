import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Productos from './components/Productos'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Productos} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
