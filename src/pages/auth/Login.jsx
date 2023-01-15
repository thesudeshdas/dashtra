import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/auth.context';
import './Auth.css';

export default function Login() {
  const navigate = useNavigate();

  const {
    state: { signInStatus },
    dispatch: authDispatch,
    signInWithEmailAndPassword,
  } = useAuth();

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) =>
    setInputs((prevInputs) => ({
      ...prevInputs,
      [e.target.name]: e.target.value,
    }));

  const handleLogin = async () => {
    // try {
    //   const response = await axios.post('http://localhost:3000/users/sign-in', {
    //     email: inputs.email,
    //     password: inputs.password,
    //   });
    //   if (response.status === 200) {
    //     authDispatch({
    //       type: 'SIGN_IN_SUCCESS',
    //       payload: {
    //         user: response.data.signedUser,
    //         authToken: response.data.accessToken,
    //       },
    //     });
    //   }
    // } catch (error) {
    //   console.log({ error });
    // }

    signInWithEmailAndPassword({
      email: inputs.email,
      password: inputs.password,
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
        <h2 className='font-size-lg margin-bottom-ml'>Login</h2>

        <label htmlFor='email' className='margin-vertical-md'>
          <input
            name='email'
            type='text'
            placeholder='Email'
            onChange={handleInputChange}
            className='padding-sm'
          />
        </label>

        {/* // TODO - Change to type password after development */}
        <label htmlFor='password'>
          <input
            name='password'
            type='text'
            placeholder='Password'
            onChange={handleInputChange}
            className='padding-sm'
          />
        </label>

        <button
          type='button'
          className='button button-primary margin-bottom-md'
          onClick={handleLogin}
        >
          Login
        </button>

        <p>
          Not a Member yet?{' '}
          <Link to='/register'>
            <span className='text-underline'>Register</span>
          </Link>
        </p>
      </form>
    </main>
  );
}
