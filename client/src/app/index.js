import {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { Navbar } from '../components/';
import { PollList, PollPage } from '../pages';


class App extends Component{
  render(){
    return(
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/polls/list" exact component={PollList} />
            <Route path="/polls/:id" exact component={PollPage} />
          </Switch>
        </Router>
        
      </div>
    )
  }
}

export default App;
