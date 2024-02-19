//MAIN
import React, { useContext } from 'react';
import UserContext from '../../UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './SignoutPage.scss';

function SignoutPage() {
    const { isUserSignedIn, setIsUserSignedIn } = useContext(UserContext);

    const handleSignIn = () => {
        setIsUserSignedIn(true); // Set isUserSignedIn to true
      };
    
    return (
        <div className="container">
            <div className="myCard">
                <div className="row">
                    <div className="col-md-6">
                        <div className="myLeftCtn">
                            <form className="myForm text-center">
                                <header>Create new account</header>
                                <div className="form-group items">
                                    <i className="fas fa-user"></i>
                                    <input className="myInput" type="text" placeholder="Username" id="username" required />
                                </div>

                                <div className="form-group items">
                                    <i className="fas fa-envelope"></i>
                                    <input className="myInput" placeholder="Email" type="text" id="email" required />
                                </div>

                                <div className="form-group items">
                                    <i className="fas fa-lock"></i>
                                    <input className="myInput" type="password" id="password" placeholder="Password" required />
                                </div>

                                <div className="form-group">
                                    <label>
                                        <input id="check_1" name="check_1" type="checkbox" required /><small> I read and agree to Terms & Conditions</small>
                                        <div className="invalid-feedback">You must check the box.</div>
                                    </label>
                                </div>
                      
                                <input type="submit" className="butt" value="Sign Up" onSubmit={handleSignIn}/>
                                {/* <Link to="/">SignUp/Login</Link> */}
                                
                            </form>
                            {/* <button onClick={handleSignIn}>Login Boss</button> */}
                        </div>
                        
                    </div>
                    <div className="col-md-6">
                        <div className="myRightCtn">
                            <div className="box"><header>SECP Prep!</header>
                                <p>Are you ready to take the next step in your career journey? Look no further than secp.com, your comprehensive online resource dedicated to preparing candidates for successful employment. <br />
                                At secp.com, we understand the challenges and complexities of today's job market. That's why we've curated a wide range of tools, resources, and expert guidance to help you navigate every stage of the job search process with confidence and competence.</p>
                                <input type="button" className="butt_out" value="Learn More" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignoutPage;




// import React from 'react';
// import '../style.css'; // Assuming style.css is in the same directory
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './LoginPage.scss';

// function LoginPage() {
//   return (
//         <div className="wrapper">
//           <div className="container main">
//             <div className="row">
//               <div className="col-md-6 side-image">
//                 {/* Side Image */}
//                 {/* <img src="images/white.png" alt="" /> */}
//                 <img src="https://images.unsplash.com/photo-1625590801433-741293b8fd18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGxhbmRpbmclMjBwYWdlfGVufDB8fDB8fHww" alt="Check your internet for the picture" />
//                 <div className="text">
//                   <p>
//                     Join the community of developers <i>- ludiflex</i>
//                   </p>
//                   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem numquam facilis dolorem aliquam ratione nihil, maiores pariatur iste, aspernatur, et dolores voluptatum placeat modi fugit voluptatem! Soluta obcaecati est iste!</p>
//                 </div>
//               </div>

//               <div className="col-md-6 right">
//                 <div className="input-box">
//                   <header>Create account</header>
//                   <div className="input-field">
//                     <input type="text" className="input" id="email" required="" autoComplete="off" />
//                     <label htmlFor="email">Email</label>
//                   </div>
//                   <div className="input-field">
//                     <input type="password" className="input" id="pass" required="" />
//                     <label htmlFor="pass">Password</label>
//                   </div>
//                   <div className="input-field">
//                     <input type="submit" className="submit" value="Sign Up" />
//                   </div>
//                   <div className="signin">
//                     <span>
//                       Already have an account? <a href="#">Log in here</a>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//   );
// }

// export default LoginPage;