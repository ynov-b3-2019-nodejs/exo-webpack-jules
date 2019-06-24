import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import reactLogo from './assets/React-icon.png';
import { Home } from './Home';
import { About } from './About';

export const App = () => (
  <BrowserRouter>
    <main className="container">
      <div>
        <h1>Coucou Jules !</h1>
        <img className="container__image" alt="react logo" src={reactLogo}/>
        <p>Si tu vois ça, c'est que ça marche !</p>
      </div>
      <ul className="left">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
      </Switch>
    </main>
  </BrowserRouter>
);
