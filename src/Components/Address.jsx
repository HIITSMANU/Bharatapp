import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Address.module.css"
import { Select ,Stack } from '@chakra-ui/react';
 import { useToast } from '@chakra-ui/react';


 export const Address = () => {
  const FnameRef = useRef(null);
  const LnameRef = useRef(null);
  const shRef = useRef(null);
  const addiRef = useRef(null);
  const pinRef = useRef(null);
  const cityRef = useRef(null);
  const stateRef = useRef(null);
  const counRef = useRef(null);
  const navigate = useNavigate();
  const toast = useToast();
  const statuses = ['success', 'error'];

  const pay1 = () => {
    if (
      FnameRef.current.value == "" ||
     LnameRef.current.value == "" ||
      addiRef.current.value == "" ||
      cityRef.current.value == "" ||
      stateRef.current.value == "" || pinRef.current.value == "" || counRef.current.value == "" || shRef.current.value == ""   
    ) {
        toast({
            title: "Please fill the complete form ",
            status:statuses[1],
            duration: 1000,
            position: 'top',
            isClosable: true,
           
          });
    
          return;
        }
    
     
      
    

    let addressObj = {
      firstName: FnameRef.current.value,
      lastname:LnameRef.current.value,
       addinfo:addiRef.current.value,
       pin:pinRef.current.value,
      city: cityRef.current.value,
      sh:shRef.current.value,
      state: stateRef.current.value,
      coun:counRef.current.value
    };

    // console.log(addressObj);
    localStorage.setItem("addreddObj", JSON.stringify(addressObj));
    toast({
        title: "Form Submitted successfully!! ",
        status: statuses[0],
        duration: 1000,
        position: "top",
        isClosable: true
      });


    // window.location.reload(true);
    
    navigate("/Payment");
    
    // console.log();
  };

  return (
    <div classNameName = {styles.main599}>
        <h3 className={styles.head1599}>Shipping Address</h3>
        <div>
            <div className={styles.one599}>
                <div>
                    <div className={styles.two599}>
                        <div className={styles.three599}>
                            
                            <div className={styles.four599}>
                                <div className = {styles.new599}>
                                <div className={styles.five599}>
                                    <label className={styles.lab1599}></label>
                                    <input spellcheck="false" placeholder="First Name" className={styles.in1599} type="text" name="firstName" autocomplete="shipping Name"  required ref={FnameRef}   ></input>
                                    
                                </div>
                                </div>
                                <div className = {styles.new599}>
                                <div className={styles.five599}>
                                    <label className={styles.lab1599}></label>
                                    <input spellcheck="false" placeholder="Last Name" className={styles.in1599} type="text" name="LastName" autocomplete="shipping Name"  ref={LnameRef}></input>
                                </div> 
                                </div>
                                      
                            </div>

                            {/* <div className="six"> */}
                                <div className = {styles.new1599}>
                            <div className={styles.five599}>
                                    <label className={styles.lab1599}></label>
                                    <input spellcheck="false"placeholder="Street and House Number" className={styles.in1599} type="text" name="Street and House Number" autocomplete="shipping Name"  maxLength="300" ref={shRef} ></input>
                                </div>&nbsp;
                                </div>
                                <div className = {styles.new599}>
                                <div className={styles.five599}>
                                    <label className={styles.lab1599}></label>
               
                                    <input spellcheck="false" placeholder="Additional Information" className={styles.in1599} type="text" name="Additional Information" autocomplete="shipping Name" ref={addiRef} ></input>
                                </div> 
                                </div>   
                            {/* </div> */}
                            <div className={styles.seven599}>
                            <div className = {styles.new599}>
                            <div className={styles.five599}>
                                    <label className={styles.lab1599}></label>
                                    <input spellcheck="false" placeholder="PinCode" className={styles.in1599} type="text" name="PinCode" autocomplete="shipping Name"  ref={pinRef} ></input>
                                </div> 
                                </div>
                                <div className = {styles.new599}>
                                <div className={styles.five599}
                                >
                                    <label className={styles.lab1599}></label>
                                    <input spellcheck="false" placeholder="City" className={styles.in1599} type="text" name="City" autocomplete="shipping Name"  ref={cityRef} ></input>
                                </div> 
                                </div> 
                            </div>
                            <div className={styles.eight599}>
                                <div className={styles.nine599}>
                                    <div className={styles.ten599}>
                                    <div className = {styles.new599}>
                                        <div className={styles.f599}>
                                         <div>
                                            <Stack spacing={3} className={styles.i599}>
                                            <Select variant='outline' placeholder='State' className={styles.j599} ref={stateRef}>
                                             <option value='option1'>Jharkhand</option>
                                             <option value='option2'>Assam</option>
                                             <option value='option3'>Gujarat</option>
                                             <option value='option3'>Odisha</option>
                                             <option value='option3'>Tamil Nadu</option>
                                            </Select>
                                            </Stack>
                                         </div> 
                                         </div>   
                                    </div>
                                </div>
                            </div>
                        </div>&nbsp;
                        <div className={styles.eight599}>
                                <div className={styles.nine599}>
                                    <div className={styles.ten599}>
                                    <div className = {styles.new1599}>
                                        <div className={styles.f599}>
                                        
                                         <div>
                                            <Stack spacing={3} className={styles.i599}>
                                            <Select variant='outline' placeholder='Country' className={styles.j599} ref={counRef}>
                                             <option value='option1'>India</option>
                                             <option value='option2'>Australia</option>
                                             <option value='option3'>Nepal</option>
                                             <option value='option3'>America</option>
                                             <option value='option3'>Europe</option>
                                            </Select>
                                            </Stack>
                                         </div>
                                         </div>    
                                    </div>
                                </div>
                                </div>
                                </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className={styles.l599}>
    <button content="CONTINUE" className={styles.but1599} onClick={() => pay1()}>CONTINUE TO PAY</button>
    </div>
    </div>
    
  );
 };

// export default Address;
