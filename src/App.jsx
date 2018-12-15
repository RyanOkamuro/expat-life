import React from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/landing/Home';
import About from './components/about/About';
import StudyAbroad from './components/study-abroad/StudyAbroad';
import WorkAbroad from './components/work-abroad/WorkAbroad';
import TravelAbroad from './components/travel-abroad/TravelAbroad'
import Article from './components/blog-article/Article';
import './App.css';
import CustomNavBar from './components/CustomNavBar';

export class App extends React.Component {
  render() {  
    return (
      <Router>
        <div>
          <CustomNavBar />
          <main role='main'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/featured/:articleid' name='featured' component={Article} />
              <Route path='/about' name='about' component={About} />
              <Route exact path='/work-abroad' name='work-abroad' component={WorkAbroad} />
              <Route path='/work-abroad/:articleid' name='work-abroad-article' component={Article} />
              <Route exact path='/study-abroad' name='study-abroad' component={StudyAbroad} />
              <Route path='/study-abroad/:articleid' name='study-abroad-article' component={Article} />
              <Route exact path='/travel-abroad' name='travel-abroad' component={TravelAbroad} />
              <Route path='/travel-abroad/:articleid' name='travel-abroad' component={Article} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
