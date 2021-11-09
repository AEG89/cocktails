import React from 'react';
import { Link } from 'react-router-dom';


const Error = () => {
  return (
    <section className='error-page section'>
      <div className='Error-container'>
        <h1>oops! It's a dead end</h1>
      
      
        <Link className='btn btn-primary'  to='/'>Back to home</Link>
        </div>
    </section>
  )
}

export default Error;