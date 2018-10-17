import React, { Component } from 'react';
import './MyStory.css';

class MyStory extends Component {
    render() {
        return (
            <div>
                <h2>My Expat Timeline</h2>
                <h3>2015-2017</h3>
                <h4>Taipei, Taiwan</h4>
                <p className='about-myStory'>Project Manager at Foxconn</p>
                <br />
                <h3>2013-2015</h3>
                <h4>Beijing, China</h4>
                <p className='about-myStory'>Master's student at University of International Business and Economics</p>
                <br />
                <h3>2011-2013</h3>
                <h4>Hangzhou, China</h4>
                <p className='about-myStory'>University Lecturer at Zhejiang University of Media and Communications</p>
                <br />
                <h3>Summer 2011</h3>
                <h4>Beijing, China</h4>
                <p className='about-myStory'>Nominee to present workshop as part of President Obama's 100,000 Strong initiative</p>
                <br />
                <h3>Summer 2010</h3>
                <h4>Beijing, China</h4>
                <p className='about-myStory'>Assistant Operations Manager Intern at Beijing Biotech, Inc.</p>
                <br />
                <h3>2009-2010</h3>
                <h4>Tianjin, China</h4>
                <p className='about-myStory'>Language Exchange at Tianjin University of Finance and Economics</p>
                <br />
                <h3>2006</h3>
                <h4>San Diego, USA</h4>
                <p className='about-myStory'>Undergrad student at San Diego State University</p>
                <br />
                <h3>The Beginning</h3>
                <h4>Los Angeles, USA</h4>
                <p className='about-myStory'>Born and raised</p>
            </div>
        );
    }
}

export default MyStory;