import {  Field, Form, Formik } from "formik";

export default function RegisterForm() {
  const submitHandler = (values, setSubmitting) => {
    alert(JSON.stringify(values));
    // setSubmitting(false);
  };
  return (
    <Formik
      onSubmit={submitHandler} 
      initialValues={{ fullname: "", email: "", password: "" }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field
            type="text"
            name="fullname"
            placeholder="Enter your fullname"
          />
          <Field type="email" name="email" placeholder="Enter email address" />
          <Field type="password" name="password" placeholder="Enter password"/>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
