import React from 'react';
import bannarImg from '../../src/pic/istockphoto-1181366400-612x612.jpg'
import './Background.css'
import resume from '../../src/pic/myResume.pdf'
import github from '../../src/pic/Octicons-mark-github.svg.png'
import linkedin from '../../src/pic/LinkedIn_icon_circle.svg.png'
import facebook from '../../src/pic/Facebook_f_logo_(2021).svg.png'
import './Banner.css'


const Banner = () => {
    return (
        <div className="w-full">
  <div className=" relative w-full">
    <div className='bannerBg'>
    <img src={bannarImg} className="w-full" />
    </div>
    <div className="absolute left-10 top-1/4">
      <h1 className='tex-center lg:text-5xl md:text-2xl text-xl text-white font-bold typing-demo'>Hi I'm <br /> Mohammad Sohan </h1>
    </div>
    <div className="absolute left-10 top-1/2 ">
     <p className='text-white' >
      Connect whit me on <br />
      <br />
      <span className='flex'><a href="https://github.com/sohanthedev"><img className='w-7 mr-3' src={github} alt="" /></a>
      <a href="https://www.linkedin.com/in/mohammad-sohan-642834244/"><img className='w-7 mr-3' src={linkedin} alt="" /></a>
      <a href="https://www.facebook.com/mohammad.sohan.43"><img className='w-7 ' src={facebook} alt="" /></a>
      </span>
      <br />
      <a className='lg:block md:block hidden' href={resume} download="resume"><button className="btn btn-outline btn-primary">Download Resume</button>  
      </a>
     </p>
    </div>
   
        
  </div> 
</div>
    );
};

export default Banner;