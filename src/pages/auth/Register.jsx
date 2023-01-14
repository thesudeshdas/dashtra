import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/auth.context';
import './Auth.css';

export default function PageRegister() {
  const navigate = useNavigate();

  const {
    state: { signInStatus },
    dispatch: authDispatch,
    registerNewUser,
  } = useAuth();

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) =>
    setInputs((prevInputs) => ({
      ...prevInputs,
      [e.target.name]: e.target.value,
    }));

  const handleRegister = async () => {
    registerNewUser({
      name: inputs.name,
      email: inputs.email,
      password: inputs.password,
      confirmPassword: inputs.confirmPassword,
    });
  };

  useEffect(() => {
    if (signInStatus) {
      navigate(-1);
    }
  }, []);

  return (
    <main className='page-login flex-justify-center'>
      <form className='form-auth flex-column flex-align-center padding-ml padding-bottom-xl'>
        <h2 className='font-size-lg margin-bottom-ml'>Register</h2>

        <label htmlFor='name' className='margin-bottom-md'>
          <input
            name='name'
            type='text'
            placeholder='Name'
            onChange={handleInputChange}
            className='padding-sm'
          />
        </label>

        <label htmlFor='email' className='margin-bottom-md'>
          <input
            name='email'
            type='text'
            placeholder='Email'
            onChange={handleInputChange}
            className='padding-sm'
          />
        </label>

        {/* // TODO - Change to type password after development */}
        <label htmlFor='password' className='margin-bottom-md'>
          <input
            name='password'
            type='text'
            placeholder='Password'
            onChange={handleInputChange}
            className='padding-sm'
          />
        </label>

        <label htmlFor='confirmPassword' className='margin-bottom-md'>
          <input
            name='confirmPassword'
            type='text'
            placeholder='Confirm Password'
            onChange={handleInputChange}
            className='padding-sm'
          />
        </label>

        <button
          type='button'
          className='button button-primary margin-bottom-md'
          onClick={handleRegister}
        >
          Register
        </button>

        <p>
          Already a Member?{' '}
          <Link to='/signup'>
            <span className='text-underline'>Login</span>
          </Link>
        </p>
      </form>
    </main>
  );
}
