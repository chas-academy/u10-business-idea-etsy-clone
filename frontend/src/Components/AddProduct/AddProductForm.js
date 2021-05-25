import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { TextareaAutosize } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '50ch'
    },
    '& > *': {
      margin: theme.spacing(1)
    },
    descriptionField: {
      height: '200px'
    }
  }
}));

const AddProductSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  price: Yup.string().matches(/^\d+$/, 'The field should have digits only').required('Required'),
  stock: Yup.string().matches(/^\d+$/, 'The field should have digits only').required('Required')
});

function AddProductForm() {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{ name: '', price: '', stock: '', description: '', image: '', category: '' }}
      validationSchema={AddProductSchema}
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
            className={classes.descriptionField}
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
          <InputLabel htmlFor="outlined-category">Category</InputLabel>
          <Select
            native
            value={values.category}
            onChange={handleChange}
            label="Category"
            inputProps={{
              name: 'category',
              id: 'outlined-age-native-simple'
            }}
          >
            <option aria-label="None" value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
          {/* <TextField
            error={errors.category && touched.category && errors.category}
            helperText={errors.category}
            name="category"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.category}
            variant="outlined"
            label="Category"
          /> */}
          <Button type="submit" disabled={isSubmitting} variant="contained" color="primary">
            Submit
          </Button>
        </form>
      )}
    </Formik>
  );
}

export default AddProductForm;
