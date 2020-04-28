import React from "react";
import { Formik, Form, Field } from "formik";
import { AiOutlineSearch } from "react-icons/ai";

const SearchClassForm = () => {
  return (
    <div className="SearchClassForm">
      <Formik
        initialValues={{ class: "" }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        {() => (
          <Form>
            <label htmlFor="class">
              <Field
                type="text"
                name="class"
                id="class"
                placeholder="search for classes"
              />
            </label>
            <button>
              <AiOutlineSearch />
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchClassForm;
