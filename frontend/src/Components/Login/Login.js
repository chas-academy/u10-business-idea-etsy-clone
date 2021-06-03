import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useAuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '50ch'
    },
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}));

const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required('Required'),
  password: Yup.string().required('Password is required')
});

function Login() {
  const classes = useStyles();
  const history = useHistory();
  const authContext = useAuthContext();

  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await authContext.login(values);
            history.push('/profile');
          } catch (error) {
            console.log('Error while logging in', error);
          }
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
          /* and other goodies */
        }) => {
          return (
            <form onSubmit={handleSubmit} className={classes.root}>
              <TextField
                error={!!errors.email && touched.email}
                helperText={errors.email}
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                variant="outlined"
                label="Email"
              />
              <TextField
                error={!!errors.password && touched.password}
                helperText={errors.password}
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                variant="outlined"
                label="Password"
                type="password"
              />

              <Button type="submit" disabled={isSubmitting} variant="contained" color="primary">
                Submit
              </Button>
            </form>
          );
        }}
      </Formik>

      <p>
        If you don't have an account: <a href="/register">register</a>
      </p>
    </>
  );
}

export default Login;
