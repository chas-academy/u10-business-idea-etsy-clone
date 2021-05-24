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
      validate={values => ({
        name: 'Required',
        price: 'Required',
        stock: 'Required',
        description: 'Required',
        image: 'Required',
        category: 'Required'
      })}
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
            error={errors.name && touched.name && errors.name}
            helperText={errors.name}
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            variant="outlined"
            label="Name"
          />

          <TextField
            error={errors.price && touched.price && errors.price}
            helperText={errors.price}
            name="price"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.price}
            variant="outlined"
            label="Price"
          />

          <TextField
            error={errors.stock && touched.stock && errors.stock}
            helperText={errors.stock}
            name="stock"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.stock}
            variant="outlined"
            label="Stock"
          />

          <TextField
            error={errors.description && touched.description && errors.description}
            helperText={errors.description}
            name="description"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
            variant="outlined"
            label="Description"
          />

          <TextField
            error={errors.image && touched.image && errors.image}
            helperText={errors.image}
            name="image"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.image}
            variant="outlined"
            label="Image"
          />

          <TextField
            error={errors.category && touched.category && errors.category}
            helperText={errors.category}
            name="category"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.category}
            variant="outlined"
            label="Category"
          />

          <Button type="submit" disabled={isSubmitting} variant="contained" color="primary">
            Submit
          </Button>
        </form>
      )}
    </Formik>
  );
}

export default AddProductForm;
