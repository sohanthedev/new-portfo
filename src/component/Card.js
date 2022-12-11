import React from 'react';
import cardImg1 from '../../src/pic/first.png'
import cardImg2 from '../../src/pic/tec.png'
import cardImg3 from '../../src/pic/second.png'
import { Link } from 'react-router-dom';

const Card = () => {
    return (
  <div>
    <h2 className='text-4xl text-center font-bold mt-6'>My Portfolio</h2>
              <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                       <div className="card shadow-xl">
  <figure className="px-10 pt-10">
    <img src={cardImg1} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Online Courses</h2>
    <p>This is a full stack web project and this is a responsive website.</p>
    <div className="card-actions">
    <Link to="/coures" className="btn btn-outline btn-primary">Details</Link>
    </div>
  </div>
</div>
                       <div className="card shadow-xl">
  <figure className="px-10 pt-10">
    <img src={cardImg2} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">TechMax</h2>
    <p>This is a full stack web project and this is a responsive website.</p>
    <div className="card-actions">
    <Link to="/tecmax" className="btn btn-outline btn-primary">Details</Link>
    </div>
  </div>
</div>
                       <div className="card shadow-xl">
  <figure className="px-10 pt-10">
    <img src={cardImg3} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Online Quiz App</h2>
    <p>This is also a full stack web project and That's I have created a few days Ago</p>
    <div className="card-actions">
    <Link to="/quize" className="btn btn-outline btn-primary">Details</Link>
    </div>
  </div>
</div>
            </div>
  </div>


    );
};

export default Card;