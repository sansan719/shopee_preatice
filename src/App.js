import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";
import ProductCollectionPage from "./pages/ProductCollectionPage";
import ProductPage from "./pages/ProductPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/mall"></Redirect>
        </Route>
        <Route path="/mall" exact>
          <HomePage />
        </Route>
        <Route path="/cart" exact>
          <CartPage />
        </Route>
        <Route path="/checkout" exact>
          <CheckoutPage />
        </Route>
        <Route path="/mall:categoryName">
          <ProductCollectionPage />
        </Route>
        <Route path="/:productName">
          <ProductPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
