import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/landing/Home';
import About from './components/about/About';
import StudyAbroad from './components/study-abroad/StudyAbroad';
import WorkAbroad from './components/work-abroad/WorkAbroad';
import TravelAbroad from './components/travel-abroad/TravelAbroad'
import Article from './components/blog-article/Article';
import './App.css';
import CustomNavBar from './components/CustomNavBar';

export default function App() {
  const blogPosts = [{
    id: '1',
    category: 'Work_Abroad',
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
    category: 'Travel_Abroad',
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
  }, {
    id: '6',
    category: 'Work_Abroad',
    title: 'The Importance of a Support Network',
    caption: 'Your support network will lead you to success.',
    blogEntry: 'Language exchange is about..',
    image: 'https://github.com/RyanOkamuro/expat-life/blob/feature/landing-page/public/assets/Taipei/Friends_Support.jpg?raw=true'
  }, { 
    id: '7',
    category: 'Work_Abroad',
    title: 'Taking Customers Around Town',
    caption: 'Etiquette for taking customers around',
    blogEntry: 'Language exchange is about..',
    image: 'https://github.com/RyanOkamuro/expat-life/blob/master/public/assets/Beijing/Genesee_Customers.JPG?raw=true'
  }, { 
    id: '8',
    category: 'Travel_Abroad',
    title: 'What to Expect from Backpacking',
    caption: 'How to prepare for a backpack trip',
    blogEntry: 'Language exchange is about..',
    image: 'https://github.com/RyanOkamuro/expat-life/blob/feature/landing-page/public/assets/Florence/Duomo.JPG?raw=true'
  }, { 
    id: '9',
    category: 'Travel_Abroad',
    title: 'Is Staying at Hostels Safe?',
    caption: 'How to stay safe in a hostel',
    blogEntry: 'Language exchange is about..',
    image: 'https://github.com/RyanOkamuro/expat-life/blob/master/public/assets/Japan/Hostel_Capsule.JPG?raw=true'
  }]
    return (
      <Router>
        <div>
          <CustomNavBar />
          <main role='main'>
            <Switch>
              <Route exact path='/' component={ ()=> <Home blogPosts={blogPosts} /> } />
              <Route path='/featured/:articleid' name='featured' component={Article} />
              <Route path='/about' name='about' component={About} />
              <Route exact path='/work-abroad' name='work-abroad' component={ () => <WorkAbroad blogPosts={blogPosts} /> } />
              <Route path='/work-abroad/:articleid' name='work-abroad-article' component={Article} />
              <Route exact path='/study-abroad' name='study-abroad' component={ ()=> <StudyAbroad blogPosts={blogPosts} /> } />
              <Route path='/study-abroad/:articleid' name='study-abroad-article' component={Article} />
              <Route exact path='/travel-abroad' name='travel-abroad' component={ () => <TravelAbroad blogPosts={blogPosts} /> } />
              <Route path='/travel-abroad/:articleid' name='travel-abroad' component={Article} />
            </Switch>
          </main>
        </div>
      </Router>
    );
}
