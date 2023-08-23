import styles from  "./Admin.module.css"
import {ForgotPasswordForm} from "../Components/ForgotPasswordForm"
import logo from "../Images/logo1.png"
import { Link } from "react-router-dom"
import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from "react-router-dom";

export const Admin = () =>{
  const navigate = useNavigate();
  // const admiapi = "http://localhost:5000/Admin";
    const { admin,forgotPassword } = useContext(AuthContext);
    const [formData, setFormData] = useState({
      email: '',
      password: ''
    });
    const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(false);

  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const handleAdmin = (e) => {
      e.preventDefault();
      admin(formData);
      setFormData({
        email: '',
        password: ''
      });
    };
    const handleForgotPassword = () => {
      setShowForgotPasswordForm(true);
    };
  
    const handleResetPassword = (email) => {
      forgotPassword(email);
      setShowForgotPasswordForm(false);
    };
    // function dashu(){
    //   return navigate('/dash');
    // }
  
    
    return (
        <div>
          {showForgotPasswordForm ? (
            <ForgotPasswordForm onResetPassword = {handleResetPassword} />
          ) : ( 
            
            <div className={styles.right}>
              
              <div className={styles.left}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsX-2K0nI6a7JPxCJChHWj6vj8gHReNqmFkQ&usqp=CAU&reload=on" width="150px" class={styles.hidebg} />
              
              <div className={styles.loggg}>
              <h1 >WELCOME    TO</h1>
              <img src={logo} width="270px" height="100px"/>
              </div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ezwhd2Q4GT6x2m-ZEqR5M1c2V6pDiTJNAg&usqp=CAU" width="150px" class={styles.hidebg}  />
              </div>
              <marquee className={styles.mark}> <b>🙏Enter the world of Bharat Jewels through our Admin Portal: Where elegance meets brilliance in timeless gemstones, waiting to be discovered and cherished🙏</b></marquee>
              <div className={styles.main3}>
              <form>
                  <div className={styles.passemss}>
                  <label htmlFor="email">Enter Email:</label>
                  <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                  />
                   <label htmlFor="password">Enter Password:</label>
                  <input
                      id="password"
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                  />
                  
                  </div>

                  <div className={styles.jarugu}>
                  <button className={styles.submitbtn5} onClick={handleAdmin}>
                      ADMIN LOGIN
                  </button>
                  </div>
                  <button className={styles.forbtn} type="button" onClick={handleForgotPassword}>Forgot Password</button>
                  <br />
              </form>
              
          </div>
            </div>
            )}
        </div>
        
    )
    
}
