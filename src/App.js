import "./App.css";
import { Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <MainPage />
      </Route>
      <Route path="/cart">
        <CartPage />
      </Route>
    </Switch>
  );
}

export default App;
