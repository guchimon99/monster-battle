import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Lobby from './Lobby'
import Arena from './Arena'

const App = () => (
  <Router>
    <Switch>
      <Route path="/lobby" component={Lobby} />
      <Route path="/arena" component={Arena} />
      <Redirect path="*" exact to="/lobby" />
    </Switch>
  </Router>
)

export default App
