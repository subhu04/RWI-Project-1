import React, { useState } from 'react';
import google from './google.png';
import Layout from '../../components/layout/Layout';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [isLogin, setIsLogin] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', formData);
  };

  const handleToggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleGoogleLogin = () => {
    console.log('Logging in with Google...');
  };

  return (
    <Layout>
      <div className='flex items-center justify-center h-screen'>
        <div className="flex flex-col md:flex-row md:w-3/4  p-8 md:p-0 md:rounded-lg overflow-hidden shadow-md">
          <div className="md:w-1/2 bg-gray-100 ">
            <img className='w-full object-cover h-full  md:h-auto' src="https://m.media-amazon.com/images/I/31KJlYB4BPL._AC_UF894,1000_QL80_.jpg" alt="Welcome" />
          </div>
          <div className="md:w-1/2 bg-white p-8">
            <div>
              <h1 className='text-3xl mb-2'>{isLogin ? 'Log In' : 'Create an Account'}</h1>
              <p className='mb-4'>{isLogin ? 'Enter your login details below' : 'Enter your details below'}</p>
            </div>
            
            <form onSubmit={handleSubmit} >
              {!isLogin && <input id='name' name='name' value={formData.name} onChange={handleChange} className='w-full h-9 border-b-2 border-black-300 mb-4' type="text" placeholder='Name' />}
              <input id='email' name='email' value={formData.email} onChange={handleChange} className='w-full h-9 border-b-2 border-black-300 mb-4' type="email" placeholder='Email' />
              <input id='password' name='password' value={formData.password} onChange={handleChange} className='w-full h-9 border-b-2 border-black-300 mb-4 placeholder-red-500   ' type="password" placeholder='Password' />
              <button type='submit' className='w-full bg-red-500 rounded mt-5 h-10 text-white'>{isLogin ? 'Log In' : 'Create Account'}</button>
            </form>
            <div >
              {!isLogin && (
                <button className='w-full border-2 border-black-300 rounded mt-3 h-10 flex items-center justify-center'><img src={google} alt=""  className='w-7 mr-3'/> Signup with Google</button>
              )}
              {isLogin && (
                <button className='w-full border-2 border-black-300 rounded mt-3 h-10 flex items-center justify-center' onClick={handleGoogleLogin}><img src={google} alt=""  className='w-7 mr-3'/>Login with Google</button>
              )}
            </div>
            <div className='flex gap-2 justify-center mt-2'>
              <h1 className='text-xs'>{isLogin ? 'Don\'t have an account?' : 'Already have an Account'}</h1>
              <h1 className='text-xs border-b-2 border-black-500 cursor-pointer' onClick={handleToggleForm}>{isLogin ? 'Sign up' : 'Log in'}</h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
