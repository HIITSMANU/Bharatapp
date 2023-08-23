import React, { useState } from 'react';
import styles from "./ForgotPasswordForm.module.css"
import logo from "../Images/logo1.png"
export const ForgotPasswordForm = ({ onResetPassword }) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onResetPassword(email);
    setEmail('');
  };

  return (
   <div>
    <div className={styles.logo}>
    <img src={logo} width="350px" />
    </div>
     <div className={styles.forgot}>
        <h1>Reset Password ☟</h1>
        <form className={styles.forgotpasswordform} onSubmit={handleSubmit}>
        <label htmlFor="email">✉ Email:</label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <button type="submit">Reset Password</button>
    </form>
    </div>
   </div>
  );
};

export default ForgotPasswordForm;
