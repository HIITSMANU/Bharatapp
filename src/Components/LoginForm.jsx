import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import ForgotPasswordForm from './ForgotPasswordForm';
import gif from "../Images/gifg.gif"
import styles from  "./LoginForm.module.css"
import { Link } from 'react-router-dom';
export const LoginForm = () => {
  const { login, forgotPassword } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(formData);
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

  return (
    <div className={styles.log}>
      {showForgotPasswordForm ? (
        
        <ForgotPasswordForm onResetPassword={handleResetPassword} />
      ) : (
    
        <div>
            <div className={styles.gifg}>
        <img src={gif} width="100px" />
        </div>
        <div className={styles.midelem}>
        <h1>Login to भारत Jewels</h1>
        <br />
        <p>Unlock Best prices and become an insider for our exclusive<br /> launches & offers. Complete your profile and get ₹250 worth< br /> of xCLusive Points.</p>
        </div>
        < br />
        <br />
            <form className={styles.loginform}>
            <label htmlFor="email">✉ Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">⌨ Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" onClick={handleLogin}>Login</button>
          <button type="button" onClick={handleForgotPassword}>Forgot Password</button>
        </form>
        <br />
      <br />
      <div className={styles.newelem}>
      <h2>New to भारत Jewels? <a  style={{color:"#da21a3"}}><Link to='/signup'>SignUp</Link></a></h2>
      <br />
      <h2>Are you a Admin ?<a  style={{color:"#da21a3"}}><Link to='/admin'>Admin</Link></a></h2>
      <br />
      <h5>You can also login with</h5>
      </div>
      <div className={styles.imageclone}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0X2KnwXTF3JHoMex8Fx8pltOJt0geF3ApczwhsBd6grk1-PQi' />
        <img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTJWrYWHEvXHPvlbjPIxCtzIdB0LC4M5bbXVN2QnsHnyl0tADJM' />
      </div>
        </div>
      )}
     
    </div>
  );
};

export default LoginForm;
