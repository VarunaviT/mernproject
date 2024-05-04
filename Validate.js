import { ErrorMessage, Field, Form, Formik } from "formik";

export default function Validate(){
    const validator=(values)=>{
            const errors = {};
            if (!values.fullname) {
              errors.fullname = "Required";
            }
 
            if (!values.email) {
              errors.email = "Required";
            } else if (
             values.email.indexOf("@")<0 || values.email.indexOf("@")>values.email.lastIndexOf(".")
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "Required";
            }
            return errors;
          };
    const submitHandler=(values,setSubmitting)=>{
      alert(JSON.stringify(values));
      setSubmitting(false);
    };
   return (<Formik   onSubmit={submitHandler} validate={validator} initialValues={{ fullname: "", email: "", password: "" }}>
    {({ isSubmitting }) => (
      <Form>
        <Field
          type="text"
          name="fullname"
          placeholder="Enter your fullname"
        />
        <ErrorMessage name="fullname" component="div" />

        <Field
          type="email"
          name="email"
          placeholder="Enter email address"
        />
        <ErrorMessage name="email" component="div" />

        <Field type="password" name="password" />
        <ErrorMessage name="password" component="div" />

        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </Form>
    )}
  </Formik>)
}
