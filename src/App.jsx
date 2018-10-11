import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/landing/Home';
import './App.css';
import CustomNavBar from './components/CustomNavBar';

export default function App() {
  const blogPosts = [{
    id: '1',
    title: 'What is an Expat?',
    blogEntry: 'An Expat, known as an expatriate is someone who lives outside their native country'
  },{
    id: '2',
    title: 'What is an Expat?',
    blogEntry: 'An Expat, known as an expatriate is someone who lives outside their native country'
  }, {
    id: '3',
    title: 'What is an Expat?',
    blogEntry: 'An Expat, known as an expatriate is someone who lives outside their native country'
  }]
    return (
      <Router>
        <div>
          <CustomNavBar />
          <main role='main'>
            <Switch>
              <Route exact path='/' component={ ()=> <Home blogPosts={blogPosts} /> } />
            </Switch>
          </main>
        </div>
      </Router>
    );
}
