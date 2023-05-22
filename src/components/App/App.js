import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrctedRoute';
import { Contacts } from 'pages/contacts/contacts';
import { LogIn } from 'pages/login/Login';
import { Register } from 'pages/register/register';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { refreshCurrentUser } from 'redux/authOperations';
import { getIsRefreshing } from 'redux/selectors';
import { Layout } from '../SharedLayout/SharedLayout';

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);
  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);
  return (
    !isRefreshing && (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<h1>home</h1>} />
            <Route
              path="contacts"
              element={
                <PrivateRoute component={Contacts} redirectTo="/login" />
              }
            />

            <Route
              path="register"
              element={
                <RestrictedRoute component={Register} redirectTo="/contacts" />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute component={LogIn} redirectTo="/contacts" />
              }
            />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>
        </Routes>
      </>
    )
  );
}
