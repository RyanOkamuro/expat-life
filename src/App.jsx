import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/landing/Home';
import About from './components/'
import './App.css';
import CustomNavBar from './components/CustomNavBar';

export default function App() {
  const blogPosts = [{
    id: '1',
    title: 'What is an Expat?',
    blogEntry: 'An Expat, known as an expatriate is someone who lives outside their native country',
    image: 'https://github.com/RyanOkamuro/expat-life/blob/feature/landing-page/public/assets/Taipei/FXN.JPG?raw=true'
  },{
    id: '2',
    title: 'Study Abroad',
    blogEntry: 'Studying abroad was the best decision of my life.',
    image: 'https://github.com/RyanOkamuro/expat-life/blob/feature/landing-page/public/assets/Beijing/Study_Abroad.JPG?raw=true'
  }, {
    id: '3',
    title: 'Backpacking',
    blogEntry: 'By backpacking, you realize you really can survive with just a packpack!',
    image: 'https://github.com/RyanOkamuro/expat-life/blob/feature/landing-page/public/assets/Harbin/Harbin.jpg?raw=true'
  }]
    return (
      <Router>
        <div>
          <CustomNavBar />
          <main role='main'>
            <Switch>
              <Route exact path='/' component={ ()=> <Home blogPosts={blogPosts} /> } />
              <Route path='/about' component={ <About /> } />
            </Switch>
          </main>
        </div>
      </Router>
    );
}
