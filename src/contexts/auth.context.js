import axios from 'axios';
import { createContext, useContext, useReducer } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || '/';

  const localUserCredentials = JSON.parse(
    localStorage.getItem('userCredentials')
  );

  const initialState = {
    email: localUserCredentials?.email || '',
    name: localUserCredentials?.name || '',
    signInStatus: localUserCredentials?.signInStatus || false,
    userId: localUserCredentials?.userId || '',
    authToken: localUserCredentials?.authToken || '',
    errors: {
      email: null,
      password: null,
    },
  };

  const userReducer = (state, action) => {
    switch (action.type) {
      case 'SIGN_IN_SUCCESS':
        return {
          ...state,
          name: action.payload.user.name,
          email: action.payload.user.email,
          signInStatus: true,
          userId: action.payload.user._id,
          authToken: action.payload.authToken,
        };

      // case "ERROR_UNREGISTERED_USER":
      //   return {
      //     ...state,
      //     errors: { ...state.errors, email: action.payload.message },
      //   };

      // case "ERROR_INCORRECT_PASSWORD":
      //   return {
      //     ...state,
      //     errors: { ...state.errors, password: action.payload.message },
      //   };

      // case "ERROR_EXISTING_USER":
      //   return {
      //     ...state,
      //     errors: { ...state.errors, email: action.payload.message },
      //   };

      // case "SIGN_OUT":
      //   return {
      //     ...state,
      //     name: "",
      //     email: "",
      //     signInStatus: false,
      //     userId: "",
      //   };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const signInWithEmailAndPassword = async (user) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/users/sign-in',
        user
      );

      console.log('log hua kya?', { response });

      if (response.status === 200) {
        dispatch({
          type: 'SIGN_IN_SUCCESS',
          payload: {
            user: response.data.signedUser,
            authToken: response.data.accessToken,
          },
        });

        localStorage?.setItem(
          'userCredentials',
          JSON.stringify({
            email: response.data.signedUser.email,
            name: response.data.signedUser.name,
            signInStatus: true,
            userId: response.data.signedUser._id,
            authToken: response.data.accessToken,
          })
        );

        navigate(from, { replace: true });
      }
    } catch (err) {
      // if (err.response.status === 404) {
      //   dispatch({
      //     type: "ERROR_UNREGISTERED_USER",
      //     payload: {
      //       message: "No registered user with this email. Please sign up now.",
      //     },
      //   });
      // }
      // if (err.response.status === 401) {
      //   dispatch({
      //     type: "ERROR_INCORRECT_PASSWORD",
      //     payload: {
      //       message: "Incorrect password. Please provide the correct password.",
      //     },
      //   });
      // }

      console.error({ err });
    }
  };

  return (
    <AuthContext.Provider
      value={{ state, dispatch, signInWithEmailAndPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
