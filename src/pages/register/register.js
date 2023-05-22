import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/authOperations';

export const Register = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" onChange={handleChange} />
      </label>
      <label>
        Password
        <input type="password" name="password" onChange={handleChange} />
      </label>
      <label>
        Email
        <input type="mail" name="email" onChange={handleChange} />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};
