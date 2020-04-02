import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <section className='landing'>
        <div className='dark-overlay'>
          <div className='landing-inner'>
            <h1 className='x-large'>Boemska Testing</h1>
            <p className='lead'>
              Create SignUp and Login functionality using jwt token for
              authorization
            </p>
            <div className='buttons'>
              <Link to='/register' className='btn btn-primary'>
                Register
              </Link>
              <Link to='/login' className='btn btn-light'>
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
