import {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import { Navbar } from '../components/';
import { PollList, PollPage, PollCreate, PollResults } from '../pages';


class App extends Component{
  render(){
    return(
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/polls/list" exact component={PollList} />
            <Route path="/poll/create" exact component={PollCreate} />
            <Route path="/poll/:id" exact component={PollPage} />
            <Route path="/poll/:id/results" exact component={PollResults} />
            <Link to="/poll/create">
              <button type="button">
                Create a new Poll!
              </button>
            </Link>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
