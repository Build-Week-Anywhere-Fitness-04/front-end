import React from "react";
import { Formik, Form, Field } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: "25ch",
    },
  },
}));

const AddClassesForm = () => {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const classes = useStyles();
  return (
    <div className="AddClassesForm">
      <Formik
        initialValues={{
          name: "",
          type: "",
          start_time: "",
          intensity: "",
          price: "",
          duration: "",
          max_class_size: "",
          description: "",
        }}
        onSubmit={(values, { resetForm }) => {
          //  console.log(values);
          const {
            name,
            type,
            start_time,
            intensity,
            price,
            duration,
            max_class_size,
            description,
          } = values;
          const newValues = {
            name,
            type,
            start_time: selectedDate.toString(),
            intensity,
            price,
            duration,
            max_class_size,
            description,
          };
          console.log(newValues);
          resetForm();
        }}
      >
        {() => (
          <Form className={classes.root}>
            <label htmlFor="name">
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="class name"
                as={TextField}
              />
            </label>
            <label htmlFor="type">
              <Field
                type="text"
                id="type"
                name="type"
                placeholder="class type"
                as={TextField}
              />
            </label>
            <label htmlFor="intensity">
              <Field
                type="number"
                id="intensity"
                name="intensity"
                placeholder="class intensity"
                as={TextField}
              />
            </label>
            <label htmlFor="price">
              <Field
                type="text"
                id="price"
                name="price"
                placeholder="class price"
                as={TextField}
              />
            </label>
            <label htmlFor="duration">
              <Field
                type="text"
                id="duration"
                name="duration"
                placeholder="class duration"
                as={TextField}
              />
            </label>
            <label htmlFor="max_class_size">
              <Field
                type="number"
                id="max_class_size"
                name="max_class_size"
                placeholder="max class size"
                as={TextField}
              />
            </label>
            <label htmlFor="description">
              <Field
                type="text"
                id="description"
                name="description"
                placeholder="desctioption of class"
                as={TextField}
              />
            </label>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="class start time"
                  value={selectedDate}
                  onChange={handleDateChange}
                  // name="start_time"
                  KeyboardButtonProps={{
                    "aria-label": "change time",
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
            <button type="submit">Add class</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddClassesForm;
