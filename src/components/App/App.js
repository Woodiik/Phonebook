import { Contacts } from 'pages/contacts/contacts';
import { LogIn } from 'pages/login/Login';
import { Register } from 'pages/register/register';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { refreshCurrentUser } from 'redux/authOperations';
import { Layout } from '../SharedLayout/SharedLayout';

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<h1>home</h1>} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<LogIn />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </>
  );
}
