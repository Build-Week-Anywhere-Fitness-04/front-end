import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import { axiosWithAuth } from "../../../utils/axiosWithAuth";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(3),
      width: "25ch",
    },
  },
}));

const validationSchema = yup.object().shape({
  name: yup.string().required("Field required"),
  type: yup.string().required("Field require"),
  start_time: yup.string().required("Field required"),
  status: yup.string(),
  intensity: yup
    .number()
    .required("Field required")
    .max(5, "canoot be longer than that"),
  price: yup.number().required("Field required"),
  duration: yup.number().required("Field required"),
  max_class_size: yup.number().required("Field required"),
  description: yup.string().required("Field required"),
});

const getTime = new Date().toLocaleDateString();

const AddClassesForm = () => {
  const [selectedDate, setSelectedDate] = useState(getTime);
  const [img, setImg] = useState("");
  const classes = useStyles();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const uploadImage = (e) => {
    const files = e.target.files[0];
    const formData = new FormData();
    formData.append("upload_preset", "pl2czq6m");
    formData.append("file", files);

    axios
      .post(`https://api.cloudinary.com/v1_1/dedps0vtx/image/upload`, formData)
      .then((res) => {
        console.log(res);
        setImg(res.data.secure_url);
      })
      .catch((err) => [console.log(err)]);
  };

  return (
    <div className="AddClassesForm">
      <Formik
        initialValues={{
          name: "",
          type: "",
          start_time: "",
          intensity: "",
          status: "",
          price: "",
          duration: "",
          max_class_size: "",
          description: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
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
        {({ errors, touched }) => (
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
            <label htmlFor="status">
              <Field
                type="text"
                id="status"
                name="status"
                placeholder="class status 'optional' "
                as={TextField}
              />
            </label>
            <label htmlFor="price">
              <Field
                type="number"
                id="price"
                name="price"
                placeholder="class price"
                as={TextField}
              />
            </label>
            <label htmlFor="duration">
              <Field
                type="number"
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
              <KeyboardTimePicker
                className="time-picker"
                margin="normal"
                id="time-picker"
                label="class start time"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
              />
            </MuiPickersUtilsProvider>

            <div className="btn-add">
              <button type="submit">Add class</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddClassesForm;

// <Field
//   className="file"
//   type="file"
//   name="file"
//   onChange={uploadImage}
//   as={TextField}
// />;
