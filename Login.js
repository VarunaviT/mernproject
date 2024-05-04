// import{UserContext} from "../context/UserContext"
import { Field, Form, Formik, ErrorMessage } from 'formik';
import axios from 'axios';
// import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

export default function Login() {
  // const {Person,setPerson}=useContext(UserContext);
  const Navigate = useNavigate();
  const submitHandler = async (values, setSubmitting) => {
   alert(JSON.stringify(values));

    const user = await axios.post('http://localhost:8082/user/login', values);
    alert("response="+user.data)
    if (user.data !== 'invalid') {
      localStorage.setItem('token', user.data);
      callhome();
    } else {
      alert('No User Found!');
      Navigate('/dogs');
    }
    console.log(user.data);
    // setPerson(user.data);

    // console.log(Person)
    // console.log(user);
    // Person.map((el)=>console.log(el))
  };
  const callhome = () => {
    Navigate('/dogs');
    window.location.reload();
  };
  const validator = (values) => {
    const errors = {};
    if (!values.uname) {
      errors.uname = 'Required';
      // } else if (
      //  values.email.indexOf("@")<0 || values.email.indexOf("@")>values.email.lastIndexOf(".")
      // ) {
      errors.uname = 'Invalid email address';
    }
    return errors;
  };
  return (
    <div>
      <section className="vh-60" style={{ backgroundColor: 'white' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: '1rem' }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    {/* <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: '1rem 0 0 1rem' }}
                    /> */}
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: '#ff6219' }}
                        ></i>
                        <span className="h1 fw-bold mb-0">Logo</span>
                      </div>

                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: '1px' }}
                      >
                        Login into your account
                      </h5>
                      <Formik
                        onSubmit={submitHandler}
                        initialValues={{ uname: '', password: '' }}
                        validate={validator}
                        style={{ margin: '0 auto' }}
                      >
                        {({ isSubmitting }) => (
                          <Form>
                            <div className="form-outline mb-4">
                              <div className="form-group">
                                <label
                                  className="form-label"
                                  for="form2Example17"
                                >
                                  User Name
                                </label>
                                <Field
                                  type="uname"
                                  id="uname"
                                  className="form-control form-control-lg"
                                  name="uname"
                                  placeholder=" "
                                />
                                <ErrorMessage
                                  class="form-text text-muted"
                                  name="uname"
                                  id="uname"
                                  component="div"
                                />
                              </div>
                            </div>

                            <div className="form-outline mb-4">
                              <div className="form-group">
                                <label
                                  className="form-label"
                                  for="form2Example27"
                                >
                                  Password
                                </label>
                                <Field
                                  type="password"
                                  id="password"
                                  className="form-control form-control-lg"
                                  name="password"
                                  placeholder=" "
                                />
                                <ErrorMessage
                                  class="form-text text-muted"
                                  name="password"
                                  id="password"
                                  component="div"
                                />
                              </div>
                            </div>

                            <div className="pt-1 mb-4">
                              <button
                                className="btn btn-dark btn-lg btn-block"
                                type="submit"
                                disabled={isSubmitting}
                              >
                                Login
                              </button>
                            </div>
                            <p
                              className="mb-5 pb-lg-2"
                              style={{ color: '#393f81' }}
                            >
                              Don't have an account?{' '}
                              <button
                                style={{
                                  color: 'black',
                                  border: 'none',
                                  backgroundColor: 'white',
                                }}
                              >
                                <Link
                                  to="/RegisterPage"
                                  style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                  }}
                                >
                                  Register Here
                                </Link>
                              </button>
                            </p>
                          </Form>
                        )}
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// import axios from "axios";
// import { useState } from "react"
// import { Link, useNavigate } from "react-router-dom"

// export default function Login(){
// const history=useNavigate();
// const [uname,setUname]=useState(' ');
// const [password,setPassword]=useState(' ');

// async function submit(e){
//   e.preventDefault();

//   try{
//     await axios.post("http://localhost:8083/login",{
//       uname,password
//     })
//     .then(res=>{
//       if(res.data="exits"){
//         history("/Home",{state:{id:uname}})
//       }
//       else if(res.data="notexits"){
//         alert("not sing up");

//       }

//     })
//     .catch(e=>{
//         alert("worng details")
//         console.log(e);
//     })

//   }
//   catch{
//     console.log(e)

//   }

// }

//     return(

//     <section class="vh-100" style={{background:"color #9A616D;"}}>
//         <div class="container py-5 h-100">
//           <div class="row d-flex justify-content-center align-items-center h-100">
//             <div class="col col-xl-10">
//               <div class="card" style={{border:"radius 1rem;"}}>
//                 <div class="row g-0">
//                   <div class="col-md-6 col-lg-5 d-none d-md-block">
//                     <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
//                       alt="login form" class="img-fluid" style={{border:"radius 1rem 0 0 1rem;"}} />
//                   </div>
//                   <div class="col-md-6 col-lg-7 d-flex align-items-center">
//                     <div class="card-body p-4 p-lg-5 text-black">

//                       <form>

//                         <div class="d-flex align-items-center mb-3 pb-1">
//                           <i class="fas fa-cubes fa-2x me-3" style={{color:" #ff6219;"}}></i>
//                           <span class="h1 fw-bold mb-0">Logo</span>
//                         </div>

//                         <h5 class="fw-normal mb-3 pb-3" style={{letter:"spacing 1px;"}}>Sign into your account</h5>

//                         <div class="form-outline mb-4">
//                           <input type="uname" id="form2Example17" class="form-control form-control-lg" onChange={(e)=>{setUname(e.target.value)}} placeholder="Username" />
//                           UserName
//                         </div>

//                         <div class="form-outline mb-4">
//                           <input type="password" id="form2Example27" class="form-control form-control-lg"  onChange={(e)=>{setPassword(e.target.value)}} placeholder="Username" />
//                           Password
//                         </div>

//                         <div class="pt-1 mb-4">
//                           <button class="btn btn-dark btn-lg btn-block" type="submit" ><Link to='/Welcom'>login</Link></button>
//                         </div>

//                         <a class="small text-muted" href="#!">Forgot password?</a>
//                         <p class="mb-5 pb-lg-2" style={{color:" #393f81;"}}>Don't have an account? <a href="#!"
//                            style= {{color:" #393f81;"}}><Link to="/RegisterPage">Register here</Link></a></p>
//                         <a href="#!" class="small text-muted">Terms of use.</a>
//                         <a href="#!" class="small text-muted">Privacy policy</a>
//                       </form>

//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       )
//     }
