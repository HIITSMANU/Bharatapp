import React, { useState } from 'react';
import axios from 'axios';
import line from "../Images/Line.png";
import gif from "../Images/gifg.gif"
import {Link} from "react-router-dom"
import styles from "./SignupPage.module.css"
import { useToast,Button } from '@chakra-ui/react'
import {Navigate,useNavigate} from "react-router-dom"
const API_BASE_URL = 'http://localhost:3';

export const SignupPage = () => {
  const [formData, setFormData] = useState({
    number:'',
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    clearErrors();

    const {number, name, email, password } = formData;
    let formErrors = {};
    if(number.length<10){
      formErrors.number = '*Number is required'
    }

    if (!name) {
      formErrors.name = '*Name is required';
    }

    if (!email) {
      formErrors.email = '*Email is required';
    } else if (!isValidEmail(email)) {
      formErrors.email = '*Invalid email format';
    }

    if (!password) {
      formErrors.password = '*Password is required';
    } else if (password.length < 6) {
      formErrors.password = '*Password should be at least 6 characters long';
    }

    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      // Perform signup API call using Axios
      axios
        .post(`${API_BASE_URL}/users`, formData)
        .then((response) => {
          toast({
            title: "You are Successfully signed into भारत Jewels ",
            status: "success",
            duration: 1000,
            position: "top",
            isClosable: true
        });
          // console.log('Signup successful:', response.data);
          // alert('Signup successful!');
          setFormData({
            number:'',
            name: '',
            email: '',
            password: '',
          });
          return navigate('/')
        })
        .catch((error) => {
          toast({
            title: "Try Again ",
            status: "error",
            duration: 1000,
            position: "top",
            isClosable: true
        });
          console.error('Error during signup:', error);
        });
    }
  };

  const clearErrors = () => {
    setErrors({});
  };

  const isValidEmail = (email) => {
    // Basic email format validation using regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <div>
      <div className={styles.gif}>
      <img src={gif} width="100px" />
      </div>
     <div className={styles.signmidle}>
     <h1 style={{fontSize:"20px",fontWeight:"bold"}}>SignUp With भारत Jewels</h1>
      <br />
      <p>Unlock Best prices and become an insider for our exclusive<br /> launches & offers. Complete your profile and get ₹250 worth< br /> of xCLusive Points.</p>
     </div>
      <div className={styles.image}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0X2KnwXTF3JHoMex8Fx8pltOJt0geF3ApczwhsBd6grk1-PQi' />
      <img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTJWrYWHEvXHPvlbjPIxCtzIdB0LC4M5bbXVN2QnsHnyl0tADJM' />
      </div>
      <div className={styles.or}>
      <img src={line} />  
      <p>or continue with</p>
      <img src={line} />  
      </div>
      < br />
      <br />
      <div className={styles.container}>
      <form onSubmit={handleSubmit}>
      <div className={`{styles.formGroup} ${errors.number ? '{styles.invalid}' : ''}`}>
          <label htmlFor="number">✆ Number:</label>
          <input
            type="number"
            placeholder='Enter Number'
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            className={`${errors.number ? '{styles.invalid}' : '{styles.valid}'}`}
            required
          />
          {errors.number && <div className={styles.error}>{errors.number}</div>}
        </div>
        <div className={`{styles.formGroup} ${errors.name ? '{styles.invalid}' : ''}`}>
          <label htmlFor="name">👤 Name:</label>
          <input
            type="text"
            placeholder='Enter Name'
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`${errors.name ? '{styles.invalid}' : '{styles.valid}'}`}
            required
          />
          {errors.name && <div className={styles.error}>{errors.name}</div>}
        </div>
        <div className={`{styles.formGroup} ${errors.email ? '{styles.invalid}' : ''}`}>
          <label htmlFor="email">✉ Email:</label>
          <input
            type="email"
            placeholder='Enter Email'
            // id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`${errors.email ? '{styles.invalid}' : '{styles.valid}'}`}
            required
          />
          {errors.email && <div className={styles.error}>{errors.email}</div>}
        </div>
        <div className={`{styles.formGroup} ${errors.password ? '{styles.invalid}' : ''}`}>
          <label htmlFor="password">⌨ Password:</label>
          <input
            type="password"
            placeholder='Enter Password'
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`${errors.password ? '{styles.invalid}' : '{styles.valid}'}`}
            required
          />
          {errors.password && <div className={styles.error}>{errors.password}</div>}
        </div>
        <button className={styles.submitbtn} type="submit">Sign Up</button>
      </form>
      
    </div>
    <br />
    <br />
    <div className={styles.whatsmid}>
          <button className={styles.btn}>
          <h3>✅ Opt for Whatsaap support</h3>
              <div className={styles.wtImg} style={{display:"flex"}}>
              <p>We will be sharing Delivery & precious order related communication.Also provide with an interactive whatssap support</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSRxPxgWhkcaMyVf9oVXj4ywhzv8r9nIEIFYT9RNjnVcoGEsj7" style={{width:"40px"}}/>
              </div>
          </button>
          
          </div>
          <div className={styles.rad} style={{display:"flex"}}>
                 <input type="radio" name='gender' />
                 
                        <label> Male </label>
                        <input type="radio" name='gender' />
                        <label>  Female  </label>
                        <input type="radio"  name='gender'/>
                        <label> I don't want to specify </label>
           
           </div>
           <br />
          <div className={styles.already}>
          <h3 className={styles.p}>Already have an account?  <a style={{color:"#da21a3"}}><Link to='/login'>LogIn</Link></a></h3>

            </div>           
    </div>
  );
};

export default SignupPage;
