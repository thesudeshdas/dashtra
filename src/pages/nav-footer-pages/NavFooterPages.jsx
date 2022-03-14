import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { NavigationTop } from '../../components';

import './nav-footer-pages.css';

export default function NavFooterPages() {
  const navigate = useNavigate();

  // ?Possibly a hack, maybe find a better way
  // useEffect(() => {
  //   navigate('/home');
  // }, [navigate]);

  return (
    <div className='page-nav-footer-page'>
      <NavigationTop />
      <Outlet />
    </div>
  );
}
