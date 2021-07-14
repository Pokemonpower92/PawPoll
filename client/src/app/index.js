import {Component} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navbar } from '../components/';
import { PollHome, PollList, PollPage, PollCreate, PollResults, Poll404 } from '../pages';

class App extends Component{
  render(){
    return(
      <div className="App">
        <Router>
          <Navbar />
          <div className="App-content">
            <Switch >
              <Route exact path="/" component={PollHome} />
              <Route exact path="/404" component={Poll404} />
              <Route exact path="/polls/list" component={PollList} />
              <Route exact path="/poll/create" component={PollCreate} />
              <Route exact path="/poll/:id" component={PollPage} />
              <Route exact path="/poll/:id/results" component={PollResults} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
