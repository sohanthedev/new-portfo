import React from 'react';
import About from './About/About';
import Banner from './Banner';
import Card from './Card';
import Contact from './Contact';

import Skill from './Skill';



const Home = () => {
    return (
        <div className='my-4'>
            <Banner></Banner>
           <Card></Card>
           <Skill></Skill>
           <About></About>
           <Contact></Contact>
        </div>
    );
};

export default Home;