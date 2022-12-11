import React from 'react';
import quize1 from '../../../../src/pic/Quize/Screenshot (18).png'
import quize2 from '../../../../src/pic/Quize/Screenshot (19).png'
import quize3 from '../../../../src/pic/Quize/Screenshot (20).png'
import './Quize.css'

const Quize = () => {
    return (
        <div>
            <div class="container">
  <div class="box">
    <img src={quize1}/>
    <span>Quize part</span>
  </div>
  <div class="box">
    <img src={quize2}/>
    <span>graph chart</span>
  </div>
  <div class="box">
    <img src={quize3}/>
    <span>Quize menu</span>
  </div>
  
</div>
<div>
    <h1 className='text-center text-3xl font-bold'>Details</h1>
    <ul className="menu menu-compact lg:menu-normal bg-base-100 w-full p-2 rounded-box">
  <li><a>● This is also a full stack web project and That's I have created a few days Ago.
</a></li>
  <li><a>●  You can select the category to take quizzes and have much more features.</a></li>
  <li><a>● There 
also has an authentication system and email verification system
</a></li>
  <li><a className='text-blue-700' href='https://github.com/sohanthedev/dev-quize'>Client site</a></li>
  <li><a className='text-blue-700' href='https://jocular-sunshine-dccf8a.netlify.app/'>Live site
</a></li>
</ul>
</div>
        </div>
    );
};

export default Quize;