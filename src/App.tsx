import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.less';
import { Pages } from './pages';

const App = () => {
  const { Home, Product, Cart, Catalog } = Pages;
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/product">
            <Product />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/catalog">
            <Catalog />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
