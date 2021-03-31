/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect } from 'react';
import { useFormik } from 'formik';
import { actions as loginActions, selectors as loginSelector } from 'modules/Auth/';
import { useSelector, useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const authedUser = useSelector(loginSelector.selectUser);
  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      dispatch(loginActions.auth.request(values));
    },
  });

  useEffect(() => {
    console.log(authedUser);
    if (authedUser.statuses.isSucceed) {
      localStorage.setItem('token', `${authedUser.data.token}`);
      localStorage.setItem('user', JSON.stringify(authedUser.data.firstname));
    }
  }, [authedUser]);
  return (
    <form onSubmit={formik.handleSubmit}>

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
