import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '50ch'
    },
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing(1),
    width: '50ch'
  },
  media: {
    heigth: 75,
  },
  radio: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
}))

// ((props) => <Radio color="default" {...props} />);


const AddProductSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  price: Yup.string().matches(/^\d+$/, 'The field should have digits only').required('Required'),
  stock: Yup.string().matches(/^\d+$/, 'The field should have digits only').required('Required')
});

function AddProductForm(props) {
  const classes = useStyles();

  const [selectedValue, setSelectedValue] = React.useState('picture1');

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const categories = props.categories.map(category => ({
    label: category.title,
    value: category.slug
  }));

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
      }) => {
        return (
          <form onSubmit={handleSubmit} className={classes.root}>
            <TextField
              error={!!errors.name && touched.name}
              helperText={errors.name}
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              variant="outlined"
              label="Name"
            />
            <TextField
              error={!!errors.price && touched.price}
              helperText={errors.price}
              name="price"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
              variant="outlined"
              label="Price"
            />
            <TextField
              error={!!errors.stock && touched.stock}
              helperText={errors.stock}
              name="stock"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.stock}
              variant="outlined"
              label="Stock"
            />
            <TextField
              error={!!errors.description && touched.description}
              helperText={errors.description}
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
              variant="outlined"
              label="Description"
              className={classes.descriptionField}
            />
            <Card className={classes.rootCard}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  component="img"
                  image="ring.jpg"
                  title="Ring"
                />
              </CardActionArea>
              <CardActions>
                <Radio
                  className={classes.radio}
                  checked={selectedValue === 'picture1'}
                  onChange={handleRadioChange}
                  value="picture1"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'Picture1' }}
                />
              </CardActions>
            </Card>
            <Card className={classes.rootCard}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  component="img"
                  image="ring.jpg"
                  title="Ring"
                />
              </CardActionArea>
              <CardActions>
                <Radio
                  className={classes.radio}
                  checked={selectedValue === 'picture2'}
                  onChange={handleRadioChange}
                  value="picture2"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'Picture2' }}
                />
              </CardActions>
            </Card>
            <FormControl
              className={classes.formControl}
              error={!!errors.category && touched.category}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-category">Category</InputLabel>
              <Select
                value={values.category}
                onChange={handleChange}
                label="Category"
                inputProps={{
                  name: 'category',
                  id: 'outlined-age-native-simple'
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {categories.map((category, index) => (
                  <MenuItem key={index} value={category.value}>
                    {category.label}
                  </MenuItem>
                ))}
              </Select>
              {!!errors.category && touched.category ? (
                <FormHelperText>Error</FormHelperText>
              ) : null}
            </FormControl>

            <Button type="submit" disabled={isSubmitting} variant="contained" color="primary">
              Submit
            </Button>
          </form>
        );
      }}
    </Formik>
  );
}

export default AddProductForm;
