import React from 'react';
import online1 from '../../../../src/pic/course/Screenshot (21).png'
import online2 from '../../../../src/pic/course/Screenshot (22).png'
import online3 from '../../../../src/pic/course/Screenshot (23).png'
import './ONlineCourse.css'

const OnlineCourses = () => {
    return (
        <div>
        <div class="container">
<div class="box">
<img src={online1}/>
<span>Course list</span>
</div>
<div class="box">
<img src={online2}/>
<span>Course Blog</span>
</div>
<div class="box">
<img src={online3}/>
<span>Course Home</span>
</div>

</div>
<div>
<h1 className='text-center text-3xl font-bold'>Details</h1>
<ul className="menu menu-compact lg:menu-normal bg-base-100 w-full p-2 rounded-box">
<li><a>● This is a full stack web 
project and this is a responsive website.

</a></li>
<li><a>●   You can enroll courses, review and will give orders etc.</a></li>
<li><a>●  There also has an authentication and authorization, email verification system.

</a></li>
<li><a className='text-blue-700' href='https://coursehub-36a80.web.app/'>Live site</a></li>
<li><a className='text-blue-700' href='https://github.com/sohanthedev/corse-hub-client'>Client site</a></li>
<li><a className='text-blue-700' href='https://github.com/sohanthedev/course-hub-server'>Server site</a></li>
</ul>
</div>
    </div>
    );
};

export default OnlineCourses;