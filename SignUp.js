// /* eslint-disable jsx-a11y/img-redundant-alt */
// import { Link, useNavigate } from "react-router-dom"
// import axios from "axios";
// import { useState } from "react";
// export default function RegisterPage(){
//   const history=useNavigate();
//   const [fname,setfname]=useState(' ');
//   const [lname,setlname]=useState(' ');
//   const [email,setEmail]=useState(' ');
//   const [uname,setUname]=useState(' ');
// const [Password,setPassword]=useState(' ');

// async function submit(e){
//   e.preventDefault();

//   try{
//     await axios.post("http://localhost:8083/register",{
//       uname,Password
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
//     return(<section class="vh-100" style={{background:"color #eee;"}}>
//     <div class="container h-100">
//       <div class="row d-flex justify-content-center align-items-center h-100">
//         <div class="col-lg-12 col-xl-11">
//           <div class="card text-black" style={{border:"radius: 25px;"}}>
//             <div class="card-body p-md-5">
//               <div class="row justify-content-center">
//                 <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

//                   <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

//                   <form class="mx-1 mx-md-4">

//                     <div class="d-flex flex-row align-items-center mb-4">
//                       <i class="fas fa-user fa-lg me-3 fa-fw"></i>
//                       <div class="form-outline flex-fill mb-0">
//                         <input type="fname" id="form3Example1c" class="form-control" onChange={(e)=>{setfname(e.target.value)}} placeholder="firstname"/>
//                       </div>
//                     </div>

//                     <div class="d-flex flex-row align-items-center mb-4">
//                       <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
//                       <div class="form-outline flex-fill mb-0">
//                       <input type="lname" id="form3Example1c" class="form-control" onChange={(e)=>{setlname(e.target.value)}} placeholder="lastname" />
//                       </div>
//                     </div>

//                     <div class="d-flex flex-row align-items-center mb-4">
//                       <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
//                       <div class="form-outline flex-fill mb-0">
//                       <input type="lname" id="form3Example1c" class="form-control" onChange={(e)=>{setUname(e.target.value)}} placeholder="Username" />
//                       </div>
//                     </div>

//                     <div class="d-flex flex-row align-items-center mb-4">
//                       <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
//                       <div class="form-outline flex-fill mb-0">
//                         <input type="email" id="form3Example3c" class="form-control" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"/>
//                       </div>
//                     </div>

//                     <div class="d-flex flex-row align-items-center mb-4">
//                       <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
//                       <div class="form-outline flex-fill mb-0">
//                         <input type="password" id="form3Example4c" class="form-control"  onChange={(e)=>{setPassword(e.target.value)}} placeholder="password" />
//                       </div>
//                     </div>

//                     <div class="d-flex flex-row align-items-center mb-4">
//                       <i class="fas fa-key fa-lg me-3 fa-fw"></i>
//                       <div class="form-outline flex-fill mb-0">
//                       <input type="password" id="form3Example4c" class="form-control"  onChange={(e)=>{setPassword(e.target.value)}} placeholder="password" />

//                       </div>
//                     </div>

//                     <div class="form-check d-flex justify-content-center mb-5">
//                       <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
//                       <label class="form-check-label" for="form2Example3">
//                         I agree all statements in <a href="#!">Terms of service</a>
//                       </label>
//                     </div>

//                     <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
//                       <button type="submit" class="btn btn-light btn-lg" style={{border:"2px solid black"}} onClick={submit}><Link to="/Login">Register</Link></button>
//                     </div>

//                   </form>

//                 </div>
//                 <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

//                   <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
//                     class="img-fluid" alt="Sample image" style={{border:"radius 1rem 0 0 1rem;"}}/>

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>)
// }

import { Field, Form, Formik, ErrorMessage } from 'formik';
import axios from 'axios';
import { useState } from 'react';
// import { json } from "react-router";
import { Link } from 'react-router-dom';

export default function SignUp() {
  const [account] = useState('');

  const submitHandler = async (values, setSubmitting) => {
    console.log(account);
    const value = { ...values, role: account };
    alert(JSON.stringify(value));
    await axios
      .post('http://localhost:8082/user', value)
      .then((data) => data.json())
      .then((data) => console.log(data));
    alert(values);
  };
  const validator = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      values.email.indexOf('@') < 0 ||
      values.email.indexOf('@') > values.email.lastIndexOf('.')
    ) {
      errors.email = 'Invalid email address';
    }
    return errors;
  };
  return (<form>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  )}
    // <div>
    //   <section className="vh-60" style={{ backgroundColor: '#9A616D' }}>
    //     <div className="container py-5 h-100">
    //       <div className="row d-flex justify-content-center align-items-center h-100">
    //         <div className="col col-xl-10">
    //           <div className="card" style={{ borderRadius: '1rem' }}>
    //             <div className="row g-0">
    //               <div className="col-md-6 col-lg-5 d-none d-md-block">
    //                 <img
    //                   src="pexels-zen-chung-5745171.jpg"
    //                   alt="login form"
    //                   className="img-fluid"
    //                   style={{ borderRadius: '1rem 0 0 1rem' }}
    //                 />
    //               </div>
    //               <div className="col-md-6 col-lg-7 d-flex align-items-center">
    //                 <div className="card-body p-4 p-lg-5 text-black">
    //                   <div className="d-flex align-items-center mb-3 pb-1">
    //                     <i
    //                       className="fas fa-cubes fa-2x me-3"
    //                       style={{ color: '#ff6219' }}
    //                     ></i>
    //                     <span className="h1 fw-bold mb-0">Signup</span>
    //                   </div>

    //                   <h5
    //                     className="fw-normal mb-3 pb-3"
    //                     style={{ letterSpacing: '1px' }}
    //                   >
    //                     create your account
    //                   </h5>
    //                   <Formik
    //                     onSubmit={submitHandler}
    //                     initialValues={{ email: '', password: '', uname: '' }}
    //                     validate={validator}
    //                     style={{ margin: '0 auto' }}
    //                   >
    //                     {({ isSubmitting }) => (
    //                       <Form>
    //                         <div className="form-outline mb-4">
    //                           <div className="form-group">
    //                             <label
    //                               className="form-label"
    //                               for="form2Example17"
    //                             >
    //                               name
    //                             </label>
    //                             <Field
    //                               text="text"
    //                               id="name"
    //                               className="form-control form-control-lg"
    //                               name="name"
    //                               placeholder=" "
    //                             />
    //                             <ErrorMessage
    //                               class="form-text text-muted"
    //                               name="name"
    //                               id="name"
    //                               component="div"
    //                             />
    //                           </div>
    //                         </div>

    //                         <div className="form-outline mb-4">
    //                           <div className="form-group">
    //                             <label
    //                               className="form-label"
    //                               for="form2Example17"
    //                             >
    //                               Username
    //                             </label>
    //                             <Field
    //                               text="text"
    //                               id="uname"
    //                               className="form-control form-control-lg"
    //                               name="uname"
    //                               placeholder=" "
    //                             />
    //                             <ErrorMessage
    //                               class="form-text text-muted"
    //                               name="uname"
    //                               id="uname"
    //                               component="div"
    //                             />
    //                           </div>
    //                         </div>

    //                         <div className="form-outline mb-4">
    //                           <div className="form-group">
    //                             <label
    //                               className="form-label"
    //                               for="form2Example17"
    //                             >
    //                               Email address
    //                             </label>
    //                             <Field
    //                               type="email"
    //                               id="email"
    //                               className="form-control form-control-lg"
    //                               name="email"
    //                               placeholder=" "
    //                             />
    //                             <ErrorMessage
    //                               class="form-text text-muted"
    //                               name="email"
    //                               id="email"
    //                               component="div"
    //                             />
    //                           </div>
    //                         </div>

    //                         <div className="form-outline mb-4">
    //                           <div className="form-group">
    //                             <label
    //                               className="form-label"
    //                               for="form2Example27"
    //                             >
    //                               Password
    //                             </label>
    //                             <Field
    //                               type="password"
    //                               id="password"
    //                               className="form-control form-control-lg"
    //                               name="password"
    //                               placeholder=" "
    //                             />
    //                             <ErrorMessage
    //                               class="form-text text-muted"
    //                               name="password"
    //                               id="password"
    //                               component="div"
    //                             />
    //                           </div>
    //                         </div>



                            

                            {/* <div className="form-outline mb-4">
                                <div className="form-group">
                                <label className="form-label" for="form2Example27">Select Account Type</label> */}
                            {/* <Field as="select" name="accounttype" id="accounttype" style={{marginLeft:"20px",padding:"5px"}} onChange={(e)=>setAccount(e.target.option)} >
                                  <option value="Professional">Professional</option>
                                  <option value="Consumer">Consumer</option>
                                </Field> */}
                            {/* <select  style={{marginLeft:"20px",padding:"5px"}} onChange={(e)=>setAccount(e.target.value)}>
                                    <option value="Select-one">Select-one</option>
                                    <option value="Professional">Professional</option>
                                    <option value="Consumer">Consumer</option>
                                </select> */}
                            {/* </div> */}
                            {/* <Field type="password" id="password" className="form-control form-control-lg" name="password" placeholder=" "/>
                                <ErrorMessage class="form-text text-muted" name="password" id="password" component="div" /> */}
                            {/* </div> */}

                            {/* <select name="pets" id="pet-select">
                                <option value="">--Please choose an option--</option>
                                <option value="dog">Dog</option>
                            </select> */}

    //                         <div className="pt-1 mb-4">
    //                           <button
    //                             className="btn btn-dark btn-lg btn-block"
    //                             type="submit"
    //                             disabled={isSubmitting}
    //                           >
    //                             Signup
    //                           </button>
    //                         </div>
    //                         <p
    //                           className="mb-5 pb-lg-2"
    //                           style={{ color: '#393f81' }}
    //                         >
    //                           Already have an account?{' '}
    //                           <button
    //                             style={{
    //                               color: 'black',
    //                               border: 'none',
    //                               backgroundColor: 'white',
    //                             }}
    //                           >
    //                             <Link
    //                               to="/Login"
    //                               style={{
    //                                 textDecoration: 'none',
    //                                 color: 'black',
    //                               }}
    //                             >
    //                               Login Here
    //                             </Link>
    //                           </button>
    //                         </p>
    //                       </Form>
    //                     )}
    //                   </Formik>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  

