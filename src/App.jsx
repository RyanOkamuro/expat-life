import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/landing/Home';
import About from './components/about/About';
import StudyAbroad from './components/study-abroad/StudyAbroad';
import './App.css';
import CustomNavBar from './components/CustomNavBar';

export default function App() {
  const blogPosts = [{
    id: '1',
    category: 'Working_Abroad',
    featured: 'Featured',
    title: 'What is an Expat?',
    caption: 'What is it like being an expat?',
    blogEntry: 'An Expat, known as an expatriate is someone who lives outside their native country',
    image: 'https://github.com/RyanOkamuro/expat-life/blob/feature/landing-page/public/assets/Taipei/FXN.JPG?raw=true'
  },{
    id: '2',
    category: 'Study_Abroad',
    featured: 'Featured',
    title: 'Study Abroad',
    caption: 'Why study abroad?',
    blogEntry: 'Studying abroad was the best decision of my life.',
    image: 'https://github.com/RyanOkamuro/expat-life/blob/feature/landing-page/public/assets/Beijing/Study_Abroad.JPG?raw=true'
  }, {
    id: '3',
    category: 'Traveling',
    featured: 'Featured',
    title: 'Backpacking',
    caption: 'What to expect traveling abroad?',
    blogEntry: 'By backpacking, you realize you really can survive with just a packpack!',
    image: 'https://github.com/RyanOkamuro/expat-life/blob/feature/landing-page/public/assets/Harbin/Harbin.jpg?raw=true'
  }, {
    id: '4',
    category: 'Study_Abroad',
    title: 'Language Exchange',
    caption: 'Make the best of your Language Exchange.',
    blogEntry: 'Language exchange is about..',
    image: 'https://github.com/RyanOkamuro/expat-life/blob/feature/landing-page/public/assets/Tianjin/Study_Abroad_Tianjin_Signing.JPG?raw=true'
  }, {
    id: '5',
    category: 'Study_Abroad',
    title: 'Meeting Global Friends',
    caption: 'Becoming globally minded with global friends.',
    blogEntry: 'Language exchange is about..',
    image: 'https://github.com/RyanOkamuro/expat-life/blob/feature/landing-page/public/assets/Tianjin/Study_Abroad_Tianjin_Russian.JPG?raw=true'
  }]
    return (
      <Router>
        <div>
          <CustomNavBar />
          <main role='main'>
            <Switch>
              <Route exact path='/' component={ ()=> <Home blogPosts={blogPosts} /> } />
              <Route path='/about' name='about' component={About} />
              <Route path='/study-abroad' name='study-abroad' component={ ()=> <StudyAbroad blogPosts={blogPosts} /> } />
            </Switch>
          </main>
        </div>
      </Router>
    );
}
