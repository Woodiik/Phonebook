import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { logOut } from 'redux/authOperations';
import { getIsLoggedIn } from 'redux/selectors';
import { Header } from './SharedLayout.styled';
export const Layout = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();
  return (
    <div>
      <Header>
        <div>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/contacts'}>Contacts</NavLink>
        </div>
        {isLoggedIn ? (
          <div>
            <h3>User menu</h3>
            <button type="button" onClick={() => dispatch(logOut())}>
              Log Out
            </button>
          </div>
        ) : (
          <div>
            <NavLink to={'/register'}>Sign Up</NavLink>
            <NavLink to={'/login'}>Log In</NavLink>
          </div>
        )}
      </Header>
      <Outlet />
    </div>
  );
};
