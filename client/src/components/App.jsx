import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './Dashboard/Dashboard';
import Landing from './Landing/Landing';
import Lobby from './Lobby/Lobby';
import GameRoom from './GameRoom/GameRoom';
import DeckBuilder from './DeckBuilder/DeckBuilder';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='App'>
        <Switch>
          {/* <Route exact path='/' component={Landing} /> */}
          <Route exact path='/' component={Dashboard} />
          <Route path='/lobby' component={Lobby} />
          <Route path='/game/:room/:username' component={GameRoom} />
          <Route path='/deckbuilder' component={DeckBuilder} />
        </Switch>
      </div>
    );
  }
}

export default App;