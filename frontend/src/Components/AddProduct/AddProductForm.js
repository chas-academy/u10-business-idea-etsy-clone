import React from 'react';
import { Formik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch'
    },
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}));

function AddProductForm() {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{ name: '', price: '', stock: '', description: '', image: '', category: '' }}
      validate={values => {}}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        console.log(values);
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
      }) => (
        <form onSubmit={handleSubmit} className={classes.root}>
          <TextField
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            variant="outlined"
            label="Name"
          />
          {errors.name && touched.name && errors.name}

          <TextField
            name="price"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.price}
            variant="outlined"
            label="Price"
          />
          {errors.price && touched.price && errors.price}
          <TextField
            name="stock"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.stock}
            variant="outlined"
            label="Stock"
          />
          {errors.stock && touched.stock && errors.stock}
          <TextField
            name="description"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
            variant="outlined"
            label="Description"
          />
          {errors.description && touched.description && errors.description}
          <TextField
            name="image"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.image}
            variant="outlined"
            label="Image"
          />
          {errors.image && touched.image && errors.image}
          <TextField
            name="category"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.category}
            variant="outlined"
            label="Category"
          />
          {errors.category && touched.category && errors.category}

          <Button type="submit" disabled={isSubmitting} variant="contained" color="primary">
            Submit
          </Button>
        </form>
      )}
    </Formik>
  );
}

export default AddProductForm;
