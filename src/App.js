import './App.scss';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <h2>Home Page</h2>
          </Route>
          <Route path="/catalog">
            <h2>Catalog Page</h2>
          </Route>
          <Route path="/about">
            <h2>About Page</h2>
          </Route>
          <Route path="/contact">
            <h2>Contact Page</h2>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
