import "./App.css";
import { Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CartPage from "./pages/CartPage";
import SubmitPage from "./pages/SubmitPage";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <MainPage />
      </Route>
      <Route path="/cart">
        <CartPage />
      </Route>
      <Route path="/submit">
        <SubmitPage/> 
      </Route>
      </Switch>
  );
}

export default App;
