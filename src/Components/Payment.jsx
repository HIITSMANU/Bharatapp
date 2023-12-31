import styles from "./Payment.module.css";
import {HStack,Radio,FormLabel,RadioGroup,FormHelperText,FormControl,useToast,Box} from "@chakra-ui/react";
// import { Home } from "./Home";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
export const Payment = () => {
    const addressObj = JSON.parse(localStorage.getItem("addreddObj"));
    const navigate = useNavigate();
    const toast = useToast();
    const pay = () => {
        toast({
            title: "Form Submitted successfully!! ",
            status: "success",
            duration: 1000,
            position: "top",
            isClosable: true
          });
        navigate("/ty");
        
    }
    
    return(
        
        
        <div className={styles.main}>
            <h1 className={styles.head1}>Payment Method</h1>
            <FormControl as='fieldset'  >
  <FormLabel  as='legend'  margin="20px" >
    Choose a Payment Type
  </FormLabel>
  <RadioGroup defaultValue=''>
     <HStack  margin = "20px"border = "1px solid black" spacing='5px'>
      <Radio padding="8px"value='Credit Card'>Credit Card</Radio>
      </HStack>
       <HStack margin = "20px"border = "1px solid black" spacing='5px'>
      <Radio  padding="8px" value='Debit Card'>Debit Card</Radio>
       </HStack>
       <Accordion allowToggle margin = "20px"border = "1px solid black" spacing='5px'>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          UPI
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
     <HStack  margin = "20px"border = "1px solid black" spacing='5px'>
      <Radio padding="8px"value='Credit Card'></Radio>
      <svg className={styles.paysvg} xmlns="http://www.w3.org/2000/svg" width="103.964" height="103.908" id="google-pay"><g data-name="google pay"><circle cx="51.954" cy="51.954" r="51.954" fill="#fff" data-name="Ellipse 24"></circle><path fill="#6e7bf2" d="M51.954 103.908a51.716 51.716 0 0 1-27.331-7.76L59.423.533a51.954 51.954 0 0 1-7.473 103.375Z" data-name="Path 186"></path><path fill="#4285f4" d="M34.331 51.726a11.01 11.01 0 0 0-.267-2.6H22.107v4.725h7.02a6.215 6.215 0 0 1-2.6 4.132l-.025.156 3.779 2.929.262.025a12.455 12.455 0 0 0 3.789-9.365" data-name="Path 187"></path><path fill="#34a853" d="M22.107 64.178a12.144 12.144 0 0 0 8.434-3.085l-4.016-3.115a7.526 7.526 0 0 1-4.413 1.273 7.677 7.677 0 0 1-7.247-5.294l-.151.015-3.93 3.04-.05.141a12.694 12.694 0 0 0 11.373 7.025" data-name="Path 188"></path><path fill="#fbbc05" d="M14.86 53.964a7.8 7.8 0 0 1-.423-2.521 8.268 8.268 0 0 1 .413-2.521l-.005-.166-3.981-3.09-.131.06a12.706 12.706 0 0 0 0 11.433l4.127-3.2" data-name="Path 189"></path><path fill="#eb4335" d="M22.107 43.635a7.026 7.026 0 0 1 4.922 1.9l3.595-3.507a12.246 12.246 0 0 0-8.52-3.311 12.721 12.721 0 0 0-11.378 7.02l4.116 3.2a7.707 7.707 0 0 1 7.267-5.294" data-name="Path 190"></path><path fill="#fff" d="M54.375 52.86v9.254h-2.959V39.252h7.845a7.125 7.125 0 0 1 5.083 1.978 6.58 6.58 0 0 1 .377 9.3q-.181.2-.377.377a7.106 7.106 0 0 1-5.083 1.947l-4.886.005Zm0-10.794v7.981h4.957a3.979 3.979 0 0 0 3.029-6.663l-.03-.03a1.036 1.036 0 0 0-.076-.076 3.869 3.869 0 0 0-2.924-1.213Zm18.9 3.9a7.352 7.352 0 0 1 5.178 1.741 6.149 6.149 0 0 1 1.9 4.771v9.642h-2.828v-2.174h-.126a5.662 5.662 0 0 1-4.891 2.682 6.354 6.354 0 0 1-4.353-1.535 4.884 4.884 0 0 1-1.751-3.83 4.635 4.635 0 0 1 1.847-3.86 7.844 7.844 0 0 1 4.937-1.434 8.819 8.819 0 0 1 4.338.956v-.674a3.324 3.324 0 0 0-1.223-2.6 4.2 4.2 0 0 0-2.853-1.067 4.546 4.546 0 0 0-3.92 2.073l-2.6-1.63a7.226 7.226 0 0 1 6.351-3.065Zm-3.83 11.363a2.349 2.349 0 0 0 .976 1.917 3.62 3.62 0 0 0 2.3.765 4.712 4.712 0 0 0 3.326-1.374 4.28 4.28 0 0 0 1.469-3.226 6.084 6.084 0 0 0-3.86-1.1 5.016 5.016 0 0 0-3 .861 2.607 2.607 0 0 0-1.208 2.154Zm27.145-10.85-9.874 22.53h-3.055l3.664-7.886-6.5-14.654h3.216l4.7 11.237h.065l4.564-11.237Z" data-name="Path 191"></path></g></svg>
      </HStack>
       <HStack margin = "20px"border = "1px solid black" spacing='5px'>
      <Radio   padding="8px" value='Debit Card'></Radio>
      <svg className={styles.paysvg} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 1366 768" id="phonepe"><defs><clipPath id="a"><rect width="1366" height="768" fill="none"></rect></clipPath></defs><g clip-path="url(#a)"><path fill="#5f259f" d="M332.63 514.18c-3.88-.38-7.78-.64-11.64-1.15-25.26-3.35-47.76-13.07-67.18-29.6a127.87 127.87 0 0 1-41.44-65.75 124.29 124.29 0 0 1-3.78-42.55c2-24.95 10.33-47.61 25.5-67.51 21.24-27.87 49.33-44.9 84-50.05 37.84-5.63 72 3.92 101.51 28.13 25.43 20.83 40.77 47.94 45.43 80.46 5.5 38.35-4.36 72.79-29.38 102.44-21.07 25-48.24 39.43-80.53 44.3-4.05.62-8.16.86-12.24 1.28zm-23.78-171c-10.43 0-20.85 0-31.28 0-2.78 0-3.77.84-4 3.58a35.11 35.11 0 0 0 .15 8 9.19 9.19 0 0 0 9.18 8.06c2.4.05 4.8 0 7.2 0 3 0 3 0 3 2.95q0 16.75 0 33.5a50.67 50.67 0 0 0 1.73 13.2c3.21 12 10.21 20.59 22.36 24.17 10.15 3 20.34 2.27 30.36-1 2.35-.77 2.39-.77 2.4 1.72 0 6.92-.05 13.84 0 20.76a11.07 11.07 0 0 0 11.25 11.22c3.29 0 6.59.06 9.88 0a4.2 4.2 0 0 0 4.29-4.3c0-.82 0-1.64 0-2.46q0-48.42 0-96.81c0-3.68 0-3.68 3.58-3.68 4.18 0 8.37 0 12.55 0 3.1 0 4-.95 4-4.1q0-3.07 0-6.17c-.07-5.6-3.83-9.33-9.48-9.38q-7.41-.06-14.81 0a4 4 0 0 1-3.41-1.51c-1.85-2.2-3.77-4.35-5.66-6.51Q346 315.77 329.79 297.18a13.29 13.29 0 0 0-10.6-5c-6.67.08-12.59 3-18.74 5.07-1.87.62-2.07 3-.76 4.5a20 20 0 0 0 1.46 1.45Q321.07 322.11 341 341c.48.45 1.36.88 1.14 1.57-.28.9-1.29.53-2 .53-10.43 0-20.85 0-31.28 0M1158.42 427c-1.38 2.26-3.36 3.07-6.05 3.05-13.65-.1-27.3 0-40.95-.09-2 0-2.9.46-2.82 2.59.07 1.56-.34 3.13-.36 4.7-.11 7.55 4.75 12.61 12.33 13.16s14.78-1.54 21.66-4.74c4.91-2.27 5.88-2 8.89 2.6 2.14 3.26 4 6.58 2.52 10.73a10 10 0 0 1-4.77 5.69c-10.45 5.53-21.64 7.14-33.3 6.12a42.24 42.24 0 0 1-15.77-4.33c-11.57-6-17.36-15.76-17.91-28.45-.46-10.6-.24-21.24-.06-31.86.29-18.13 12.62-31.35 31-33.51a57.6 57.6 0 0 1 19.64.67c14.66 3.35 23.45 12.93 25.57 27.82.08.53.23 1.06.35 1.59zm-36.92-12.42c3.84 0 7.68 0 11.52 0 1.39 0 2-.5 2-1.92 0-2.19 0-4.38 0-6.57-.25-7-4.21-11.67-11.19-12.56-8.84-1.13-15.34 3.42-15.52 12.79 0 2 .07 4 0 6s.67 2.36 2.42 2.31c3.63-.09 7.26 0 10.9 0M550.94 450.08c0 4.8 0 9.59 0 14.39 0 3.27-1.71 5.18-5 5.26q-7.71.18-15.42 0c-3-.07-4.64-1.74-5-4.68a18.35 18.35 0 0 1-.13-2.46q0-54.66 0-109.32c0-1 .09-1.92.18-2.87a6.32 6.32 0 0 1 4.67-5.67c11.27-3.75 22.81-6 34.72-5.69 9.35.27 18.19 2.5 26 7.88 9 6.17 14.39 14.76 15.69 25.46a114.65 114.65 0 0 1-.17 32.15 37.2 37.2 0 0 1-32.62 30.79c-7.15.87-14.24.86-21.12-1.65-1.53-.56-1.77.13-1.77 1.42 0 5 0 10 0 15m.79-63.37c0 7.12.06 14.23 0 21.35a3.19 3.19 0 0 0 2.24 3.38c3.77 1.71 7.71 1.75 11.7 1.53 9.35-.51 16-7.36 16-16.72-.05-6.94.53-13.88-.75-20.82-1-5.57-3.43-9.93-8.67-12.37-6.18-2.88-12.49-2.51-18.84-.59-1.44.44-1.61 1.4-1.61 2.68 0 7.18 0 14.37 0 21.56M990.88 407.68V353.2c0-5.69 1.28-7.39 6.65-9.08 10.54-3.31 21.29-5.35 32.36-5.1 10.67.24 20.62 2.91 29.1 9.78a35.37 35.37 0 0 1 13.21 23.86 114.3 114.3 0 0 1 0 30.75c-2.49 16.62-13.65 27.94-30.3 31.43a43 43 0 0 1-23.15-1c-1.82-.64-2.24-.15-2.23 1.65.06 9.39 0 18.78 0 28.16 0 4.41-1.69 6.15-6 6.17s-8.78 0-13.17 0-6.35-1.86-6.4-6.38V407.68zm26.42-21c0 7.19.05 14.39 0 21.58a3 3 0 0 0 2 3.12c3.75 1.77 7.69 1.84 11.69 1.64 9.49-.45 16.12-7.31 16.21-16.78 0-4.59 0-9.19 0-13.78a39.82 39.82 0 0 0-1.77-10.63 13.1 13.1 0 0 0-7.08-8.4c-6.09-3.1-12.41-2.85-18.83-1.17a2.64 2.64 0 0 0-2.27 3c.1 7.13 0 14.25 0 21.38M620.67 404q0-29.81 0-59.62c0-4.51 1.64-6.19 6.21-6.16 3.29 0 6.59-.28 9.86.27a10.91 10.91 0 0 1 9.27 9.65c.67 6.63.14 13.29.27 19.93 0 1.78.06 3.56 0 5.34-.06 1.51.33 2.15 2 1.68a69.5 69.5 0 0 1 13.78-2.15c17.51-1.32 31.54 8.93 35.3 26a54.47 54.47 0 0 1 1.36 12c0 17.62 0 35.23 0 52.84 0 4.13-1.74 5.92-5.83 6q-3.92.06-7.82 0a11.92 11.92 0 0 1-12-12.08q-.06-22.41 0-44.81a29.29 29.29 0 0 0-1-8.75c-1.49-4.84-4.8-7.51-9.75-8.26a36.52 36.52 0 0 0-13.65.92c-1.9.43-2.49 1.37-2.48 3.29q.09 30.84 0 61.67c0 .82 0 1.65 0 2.47-.27 3.74-2 5.49-5.76 5.54q-7.1.09-14.2 0c-3.87 0-5.62-1.86-5.62-5.73q0-30 0-60M712.11 420.9c.23-4.79-.42-11 .33-17.11 1.81-14.86 10-24.47 24.27-28.7a53.23 53.23 0 0 1 35.12 1.13c13.13 5.1 20 15.06 21.11 29 .81 10.25.38 20.54.27 30.81s-3.26 19.68-11.48 26.68c-6.17 5.26-13.53 7.69-21.41 8.7a54.73 54.73 0 0 1-25.17-2.34c-14.06-4.85-22.83-16.93-23-31.78-.07-5 0-10 0-16.37m26.94.25c0 5.54-.07 10 0 14.44.15 7.85 3.83 12.37 11.43 13.33 9 1.15 16.81-2 17.09-12.94.23-9.1.16-18.21 0-27.32-.13-7.43-4-12.17-10.56-13.47a24.66 24.66 0 0 0-5.95-.19c-6.47.31-10.85 4.42-11.7 10.82-.71 5.46-.11 10.95-.34 15.33M949.33 430c-7.07 0-14.13.06-21.2 0-1.78 0-2.52.66-2.58 2.33-.07 2.32-.7 4.61-.38 7 .86 6.36 5.53 10.62 12.08 11.14 7.62.6 14.68-1.28 21.47-4.52 5.36-2.56 6.43-2.26 9.62 2.82 2.13 3.38 3.9 6.85 2 11a8.66 8.66 0 0 1-3.72 4.52c-16.52 8.35-33.49 10-50.45 1.88-10.56-5-16.23-14.28-17.12-25.86a263.21 263.21 0 0 1 0-37.15c.89-13.92 10.1-24.95 24-28.92a51.91 51.91 0 0 1 29.23-.07c13 3.79 20.43 12.79 22.58 26 1.32 8.22.85 16.54.7 24.82-.07 3.51-2 5.05-5.63 5.06H949.33m-10.8-15.42c3.9 0 7.81 0 11.71 0 1.28 0 1.9-.42 1.86-1.78-.06-2.12.06-4.25-.05-6.36-.37-7.28-4.38-12-11.37-12.9-7.22-.95-14.13 1.85-15.39 10.94-.38 2.73-.1 5.47-.22 8.2-.07 1.44.56 1.92 1.95 1.9 3.84-.05 7.67 0 11.51 0M808 424.22q0-19.22 0-38.44c0-4.34 1.42-6.12 5.53-7.49a99.42 99.42 0 0 1 31.89-5.45c10.53 0 20.65 1.84 29 9 6.7 5.75 9.8 13.34 11.14 21.84a53.77 53.77 0 0 1 .45 8.4q0 25.8 0 51.6c0 4.41-1.64 6.09-6.1 6.06-3.35 0-6.72.3-10.06-.24-5.57-.91-9.18-5-9.2-10.64-.06-14.6 0-29.19 0-43.79a48.87 48.87 0 0 0-.75-9.81c-1.32-6.41-5.54-10-12.06-10.29a61 61 0 0 0-11.68.69c-2 .31-2.55 1.19-2.54 3.11q.07 31.44 0 62.9c0 .82 0 1.65 0 2.46a5 5 0 0 1-5 4.81c-5.28.1-10.57.11-15.85 0-3-.06-4.77-2.09-4.78-5.27q0-19.74 0-39.47"></path><path fill="#5f259f" d="M350,388.34c0,7.61-.05,15.21,0,22.81a3,3,0,0,1-2.31,3.3,36.61,36.61,0,0,1-15.21,1.84c-8.75-.83-13.64-6-14.38-14.87-.68-8.14-.18-16.29-.32-24.44-.06-4,0-7.94,0-11.91,0-1.65.54-2.32,2.27-2.31,9.19.06,18.38.08,27.56,0,2,0,2.42.81,2.41,2.58-.06,7.67,0,15.34,0,23"></path></g></svg>
       </HStack>
       <HStack  margin = "20px"border = "1px solid black" spacing='5px'>
      <Radio  padding="8px" value='UPI'></Radio>
      <svg className={styles.paysvg} xmlns="http://www.w3.org/2000/svg" enable-background="new -164 191.6 512 193" viewBox="-164 191.6 512 193" id="paytm"><path fill="#02b9ef" d="M229.8,243.2c2-1.6,3-2.4,4-3.2c13.9-11.8,31.7-10.5,43.6,3.5c1.2,1.4,1.8,1.5,3,0.3c0.8-0.9,1.7-1.6,2.5-2.5   c9.3-9.1,21.6-11.8,33.1-6.7c12.1,5.4,18.6,14.9,18.7,28.2c0.2,28.7,0.1,57.3,0.1,86c0,10.2-6.3,16.6-16.4,16.6c-4,0-8-0.3-12,0.1   c-4.1,0.4-5.3-0.9-5.3-5.2c0.2-28,0.1-56,0.1-84c0-1.2,0-2.3,0-3.5c-0.1-6.5-2.7-9.2-8.9-9.5c-5.6-0.3-9.5,3.1-10.1,8.8   c-0.1,1.3,0,2.7,0,4c0,24.2,0,48.3,0,72.5c0,10.6-6.1,16.8-16.7,16.7c-5.4-0.1-12.7,2.4-15.8-1.1c-2.7-3-0.9-10.1-0.9-15.4   c0-24.8,0-49.7,0-74.5c0-8.8-5.7-13.3-13.1-10.3c-4.6,1.9-6.1,5.6-6.1,10.4c0.1,23.2,0,46.3,0,69.5c0,1.8,0,3.7,0,5.5   c-0.3,9.7-6.5,15.8-16.1,15.9c-4,0.1-8-0.3-12,0.1c-4.3,0.4-5.6-0.8-5.5-5.4c0.2-39.3,0.1-78.6,0.1-118c0-1.7,0.1-3.3,0-5   c-0.2-2.2,0.7-2.9,2.9-2.9c9.2,0.1,18.3,0.1,27.5,0c2.3,0,3.4,0.6,3.2,3.1C229.5,239,229.7,240.6,229.8,243.2z"></path><path fill="#06306f" d="M17.8 297.4c0 13.7 0 27.3 0 41-.1 17.8-9.4 27-27.2 27.1-7.8 0-15.7.1-23.5 0-15.8-.2-27.4-10.7-28.2-26.5-.6-11.3-.7-22.7-.1-34 .8-16.2 13.2-27.6 29.6-27.8 4.3-.1 8.7 0 13 0 4.2-.1 5.8-2.5 5.7-6.5 0-4-1.8-5.8-5.8-5.6-4.5.1-9 .1-13.5 0-11-.2-17.1-6.2-17-17 0-4.4-2-10.3.9-12.9 2.5-2.2 8.2-.8 12.5-.8 11.2-.1 22.3 0 33.5 0 11.9 0 20 8.1 20.1 20.1C17.9 268.7 17.8 283.1 17.8 297.4zM-12.8 320.1c0-1.7 0-3.3 0-5 0-10.2 0-10.2-10.2-9.8-5.1.2-7.9 2.8-8 8.1-.1 4.2-.1 8.3 0 12.5.1 7.2 3.3 9.1 13.7 9.4 7.7.2 3.8-5.2 4.5-8.2C-12.4 324.9-12.9 322.4-12.8 320.1zM106.8 286.5c0 15.3.2 30.7-.1 46-.2 11.8-3 22.5-14.4 28.8-4.6 2.5-9.6 3.9-14.8 4-11.5.2-23 0-34.5.2-2.8 0-3.4-1-3.3-3.5.2-4.2-.1-8.3.1-12.5.2-8 6.3-14.1 14.3-14.4 5.2-.2 10.3-.1 15.5 0 4.2 0 6.5-1.7 6.5-6.2 0-4.6-2.2-6.2-6.4-6.3-7-.2-14 .8-20.9-1.2-11.9-3.5-20.6-13.4-20.9-25.7-.6-19.5-.2-39-.3-58.5 0-2.2.7-2.9 2.9-2.8 8.2.1 16.3.2 24.5 0 3.6-.1 3.1 1.9 3.1 4.1 0 14.7 0 29.3 0 44 0 6.4 3 9.8 8.6 10 6.6.2 9.5-2.5 9.5-9.2 0-14.8.1-29.7-.1-44.5 0-3.5.9-4.5 4.4-4.4 7.3.3 14.7.4 22 0 4-.2 4.6 1.3 4.5 4.8C106.7 254.9 106.8 270.7 106.8 286.5zM-148 309.2c0-16.3 0-32.7 0-49 0-16 9.8-26 25.9-25.8 10.5.1 21-1.2 31.4.8 13.3 2.6 21.7 12.9 21.8 26.6.1 14.5 0 29 0 43.5 0 18.2-10.7 29.3-28.9 29.8-5.5.2-11 .1-16.5 0-2.5-.1-3.6.7-3.5 3.4.2 4 .1 8 0 12-.2 8.6-6.3 14.8-14.8 14.9-5 .1-11.3 2.1-14.5-.8-3-2.7-.8-9.1-.9-13.9C-148.1 336.9-148 323-148 309.2zM-117.8 284.7c0 3.2 0 6.3 0 9.5 0 11.3 0 11.3 11.3 10.3 4.9-.4 7.2-2.8 7.3-7.7.1-5.6-.2-11.3.1-16.9.6-16.2-2.4-14.6-15.6-14.7-2.4 0-3.2.7-3.2 3.1C-117.7 273.7-117.8 279.2-117.8 284.7z"></path><path fill="#02b9ef" d="M135.1,309.4c0-13.3-0.1-26.7,0.1-40c0-3.1-0.7-4.4-4.1-4.3c-4.5,0.2-10.5,1.5-13-0.7   c-3.1-2.9-0.7-9.1-1.1-13.9c0-0.3,0-0.7,0-1c0-4.7-1.5-10.2,0.5-13.7s8.1-1.3,12.4-2.4c8.5-2.2,14.9-7.1,20.1-13.9   c3.6-4.6,8.1-7.9,13.9-9c3.1-0.6,5-0.2,4.8,3.8c-0.3,5.6,0,11.3-0.1,17c-0.1,2.4,0.8,3.2,3.2,3.1c4-0.1,8,0.1,12-0.1   c2.4-0.1,3.2,0.8,3.1,3.2c-0.1,8.2-0.1,16.3,0,24.5c0,2.3-0.6,3.5-3.1,3.2c-0.5-0.1-1,0-1.5,0c-4.4,0.4-10.5-2-12.8,1   c-2.2,2.8-0.8,8.6-0.8,13.1c0,27.2-0.1,54.3,0.1,81.5c0,3.8-1,5-4.8,4.7c-3.6-0.3-7.3,0-11-0.1c-10.8-0.4-17.9-7.7-17.9-18.5   C135.1,334.4,135.1,321.9,135.1,309.4z"></path></svg>
      </HStack>
    </AccordionPanel>
  </AccordionItem>
  </Accordion>
       <HStack  margin = "20px"border = "1px solid black" spacing='5px'>
      <Radio  padding="8px" value='Net Banking'>Net Banking</Radio>
      </HStack>
      <HStack  margin = "20px"border = "1px solid black" spacing='5px'>
      <Radio  padding="8px" value='Offline Payment'>Offline Payment</Radio>
      </HStack>

  </RadioGroup>
  <FormHelperText>Please select any one</FormHelperText>
</FormControl>
        <button onClick={() => pay()}content="Pay" className={styles.but1}>Pay</button>
        <div className={styles.one1}>
            <div className={styles.two2}>
            <h3 className={styles.head3}>Shipping Address</h3>
            <div className={styles.three3}>
                    <div className={styles.eleven11}>
                        <b>Name</b>:{addressObj.firstName}
                    </div>
                    <div className={styles.six6}>
                        <b>Address</b>:{addressObj.sh}
                    </div>
                    <div >
                    <b> Pincode</b>:{addressObj.pin}
                    </div>
                    <div className={styles.murder}>
                    <b>City</b>:{addressObj.city}
                    </div>
                    {/* <div>
                    <b> State</b>:{addressObj.state}
                    </div> */}
                    </div>
            </div>
        </div>
         </div>
    )
};
