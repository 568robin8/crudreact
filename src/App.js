import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Productos from "./components/Productos";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductosProvider from "./context/ProductosContext";
import NuevoProducto from "./components/NuevoProducto";

function App() {
  return (
    <Router>
      <ProductosProvider>
        <Header />
        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={Productos} />
            <Route exact path="/new" component={NuevoProducto} />
          </Switch>
        </div>
      </ProductosProvider>
    </Router>
  );
}

export default App;
