import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/landing/Home';
import About from './components/about/About';
import './App.css';
import CustomNavBar from './components/CustomNavBar';

export default function App() {
  const blogPosts = [{
    id: '1',
    category: 'Working_Abroad',
    title: 'What is an Expat?',
    caption: 'What is it like being an expat?',
    blogEntry: 'An Expat, known as an expatriate is someone who lives outside their native country',
    image: 'https://github.com/RyanOkamuro/expat-life/blob/feature/landing-page/public/assets/Taipei/FXN.JPG?raw=true'
  },{
    id: '2',
    category: 'Study_Abroad',
    title: 'Study Abroad',
    caption: 'Why study abroad?',
    blogEntry: 'Studying abroad was the best decision of my life.',
    image: 'https://github.com/RyanOkamuro/expat-life/blob/feature/landing-page/public/assets/Beijing/Study_Abroad.JPG?raw=true'
  }, {
    id: '3',
    category: 'Traveling',
    title: 'Backpacking',
    caption: 'What to expect traveling abroad?',
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
              <Route path='/about' name='about' component={About} />
            </Switch>
          </main>
        </div>
      </Router>
    );
}
