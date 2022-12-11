import React from 'react';
import tec1 from '../../../../src/pic/tec/Screenshot (24).png'
import tec2 from '../../../../src/pic/tec/Screenshot (25).png'
import tec3 from '../../../../src/pic/tec/Screenshot (26).png'
import './Texh.css'

const TechMax = () => {
    return (
        <div>
            <div class="container">
  <div class="box">
    <img src={tec1}/>
    <span>Login page</span>
  </div>
  <div class="box">
    <img src={tec2}/>
    <span>Item page</span>
  </div>
  <div class="box">
    <img src={tec3}/>
    <span>Home page</span>
  </div>
  
</div>
<div>
    <h1 className='text-center text-3xl font-bold'>Details</h1>
    <ul className="menu menu-compact lg:menu-normal bg-base-100 w-full p-2 rounded-box">
  <li><a>● project and this is a responsive website.
</a></li>
  <li><a>● You can enroll courses, review and will give orders etc.</a></li>
  <li><a>● There also has an authentication and authorization, email verification system.
</a></li>
  <li><a className='text-blue-700' href='https://techmaxa.web.app/'>Live site</a></li>
  <li><a className='text-blue-700' href='https://github.com/sohanthedev/tech-max-clin'>Client site</a></li>
  <li><a className='text-blue-700' href='https://github.com/sohanthedev/tech-max-server'>Server site</a></li>
</ul>
</div>
        </div>
    );
};

export default TechMax;