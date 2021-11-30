import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.less';
import { Home } from './pages/Home';
import { Product } from './pages/Product';
import { Cart } from './pages/Сart';
import { Catalog } from './pages/Сatalog';

const App = () => {
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
