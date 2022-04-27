import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/auth.context';

export default function RequireAuth({ children }) {
  const {
    state: { signInStatus },
  } = useAuth();

  const location = useLocation();

  if (!signInStatus) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return children;
}
