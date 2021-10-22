import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.less';
import { AboutUs } from './pages/AboutUs';
import { Ticket } from './pages/Ticket';
import './store/init';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <AboutUs />
          </Route>
          <Route exact path='/ticket'>
            <Ticket />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
