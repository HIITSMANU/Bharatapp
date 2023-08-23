import React, { createContext, useState } from 'react';
import axios from 'axios';
import { useToast,Button } from '@chakra-ui/react'
import {useNavigate} from "react-router-dom"

const apiUrl = "http://localhost:3/users";
const admiapi = "http://localhost:3/Admin";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const toast = useToast();
  const navigate = useNavigate();


  const login = async (userData) => {
    try {
      const response = await axios.get(apiUrl);
      const users = response.data;
      const foundUser = users.find(
        (user) => user.email === userData.email && user.password === userData.password
      );
      if (foundUser) {
        setUser(foundUser);
        toast({
            title: "You are Successfully signed into भारत Jewels ",
            status: "success",
            duration: 1000,
            position: "top",
            isClosable: true
        });
        console.log('Login successful:', foundUser);
        // alert('Login successful!');
      } else {
        toast({
            title: "Login Unsuccessful Please Try Again ",
            status: "warning",
            duration: 1000,
            position: "top",
            isClosable: true
        });
        // alert('Invalid email or password.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Login failed. Please try again later.');
    }
  };

  const logout = () => {
    setUser(null);
  };

  const forgotPassword = async (email) => {
    try {
      const response = await axios.get(apiUrl);
      const users = response.data;
      const foundUser = users.find((user) => user.email === email);
      if (foundUser) {
        // In a real-world application, you might send a password reset link to the user's email.
        toast({
            title: "Password Reset Link Sent To Your Email ",
            status: "success",
            duration: 1000,
            position: "top",
            isClosable: true
        });
        // alert('Password reset link sent to your email.');
      } else {
        toast({
            title: "Please Check Your Email Once Again ",
            status: "warning",
            duration: 1000,
            position: "top",
            isClosable: true
        });
        // alert('Email not found.');
      }
    } catch (error) {
      console.error('Error processing forgot password:', error);
      alert('An error occurred. Please try again later.');
    }
  };
  const admin = async(userData) =>{
    try {
      const response = await axios.get(admiapi);
      const users = response.data;
      const foundUser = users.find(
        (user) => user.email === userData.email && user.password === userData.password
      );
      if (foundUser) {

        setUser(foundUser);
          toast({
              title: "WELCOME TO भारत JEWELS ",
              status: "success",
              duration: 1000,
              position: "top",
              isClosable: true
            });
            return navigate('/adminindex')//here write the next page route
         
        console.log('Admin Login successful:', foundUser);
        // alert('Login successful!');
      } else {
        toast({
          title: "Invalid Email and Password ",
          status: "error",
          duration: 1000,
          position: "top",
          isClosable: true
        });
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Admin failed. Please try again later.');
    }
  }

  return (
    <AuthContext.Provider value={{admin, user, login, logout, forgotPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
