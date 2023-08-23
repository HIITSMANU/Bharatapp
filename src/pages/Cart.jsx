import React from "react";
import styles from "../pages/Cart.module.css";
import { useEffect, useState } from "react";
// import { Link as RouterLink } from "react-router-dom";
import {ChevronDownIcon} from "@chakra-ui/icons";
import { CloseButton } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { Cart_nav } from "../pages/Cart_nav";

export const Cart = () => {
  const [status, setStatus] = useState(false);
  const [datas, setDatas] = useState([]);
  const [total, setTotal] = useState(0);
  const [yousaved, setYousaved] = useState(0);
  const [subtot, setSubtot] = useState(0);
  const navigate = useNavigate();
  const placeorder = () => {
     navigate("/address")
  }

  const deleteCart = async (id) => {
    let res = await fetch(`http://localhost:3/cart/${id}`, {
      method: "Delete",
    });
    setStatus(!status);
  };

  function getTotal(data) {
    let totalamt = 0;
    let yousaved = 1681;
    let subtot = 0;
    for (let i = 0; i < data.length; i++) {
      totalamt += data[i].price;
      yousaved += i*1681;
    }
    subtot = totalamt+yousaved; 
    setYousaved(yousaved);
    setSubtot(subtot);
    setTotal(totalamt);
    localStorage.setItem("totalAmount",totalamt)
  }    

  useEffect(() => {
    async function getCart() {
      let res = await fetch("http://localhost:3/cart");
      let data1 = await res.json();
      setDatas(data1);
      await getTotal(data1);
    } 

     getCart();
  }, [status]);

  if (datas.length === 0) {
    return (
        
        <div className={styles.main666}>
            <Cart_nav/>
            <div>
                <div className={styles.u666}>
                    <div >
                        <div className={styles.v666}>
                            <div className={styles.w666}>
                                <div>
                                    <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRsRmgAUBZpb2-XPUK2Gms8BJC-aC-tFEjbha3VI-7GhWuvUFeM" alt="" className={styles.imagew666}/>
                                </div>
                            </div>
                            <div>
                                <div className={styles.x666}>
                                    There is nothing here!
                                </div>
                                <div className={styles.y666}>
                                Let's do some retail therapy.
                                </div>
                            </div>
                        </div>
                        <div className={styles.shopbutton}>
                        <a href="/homepage" className={styles.home1234}>
                            <button className={styles.but5666} content="START SHOPPING">START SHOPPING</button>
                        </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
  }

  return (
    
    <div className={styles.main666}>
        <Cart_nav/>
        <div>
            <div className={styles.one666}>
                <div className={styles.two666}>
                    <div className={styles.three666}>
                         <div className={styles.four666}> 
                             <div className={styles.five666}>
                                 <div className={styles.six666}>
                                    {/* "Get ₹1095 xCLusive points on this Order"
                                    <p>"Redeem these points on your next order"
                                        <a>Know more</a>
                                    </p> */}
                                 </div> 
                                <div className={styles.seven666}> 
                                    {/* "Order Online & pick up from a store"
                                    <p>on the same day </p> */}
                                 </div>
                            </div> 
                         </div>  
                        <div className={styles.eight666}>
                            <div className={styles.nine666}>
                            {datas.map((data) => (
                                <div className={styles.ten666}>
                                    <div>
                                        <div className={styles.e666}
                                        >
                                            <a className={styles.a23450}>
                                                <img className = {styles.khushi666} src={data.image} alt="jewel"/>
                                            </a>
                                        </div> 
                                    </div>
                                    <div className={styles.f666}>
                                        <div className={styles.g666}>
                                            <p className={styles.para1666}>{data.name}</p>
                                            <p className={styles.para2666}>₹{data.price}
                                            <span className={styles.span1666}>₹{data.price+1681}</span>
                                            <span className={styles.span2666}>Save
                                            ₹1,681
                                            </span>
                                            </p>
                                            <div className={styles.h666}>
                                                <div className={styles.iu666}>
                                                    <span>Size:</span>
                                                    <div >
                                                        <span>12
                                                        <ChevronDownIcon/>
                                                        </span>
                                                    </div>    
                                                </div>&nbsp;
                                                <div className={styles.iu666}>
                                                    <span>Quantity:</span>
                                                    <div >
                                                        <span>1
                                                        <ChevronDownIcon/>
                                                        </span> 
                                                    </div>    
                                                </div>
                                                </div>
                                            </div>
                                            <div className={styles.j666}>
                                                <p className={styles.para3666}>Delivered within 6 to 7 days.</p>
                                                </div>
                                                <div className = {styles.pbm666}>
                                                <span className={styles.span16666}>
                                                <CloseButton onClick={() => deleteCart(data.id)} className={styles.icon666}/>
                                                </span>
                                                </div>
                                        </div>
                                </div>))}
                                <div className={styles.k666}>
                                    <div className={styles.l666}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.m666}>
                        <h5 className={styles.head2666}>Bharat jewels Offers!</h5>
                        <div className={styles.n666}>
                            <div className={styles.o666}>
                                <span>EXTRA3</span>
                                <p className={styles.para4666}>Save another ₹1,681 on this order </p>
                            </div>
                            <div className={styles.p666}>Apply
                            </div>
                        </div>
                        <button className={styles.but1666}>Apply More Coupons<div className={styles.q666}></div></button>
                        <h5 className={styles.head3666}>Order Summary</h5>
                        <div className={styles.r666} id="first666" data-name="order-summary-box">   
                            <div>
                            
                                <div>
                                
                                <p className={styles.para5666}>SubTotal
                                <span className={styles.span59666}>₹{subtot}</span>
                                </p>
                                <p className={styles.para6666}>You Saved
                                <span id ="s349"className={styles.span59666}>-₹{yousaved}</span> 
                                </p>
                                <p className={styles.para6666}>Coupon Discount
                                <span className={styles.span59666}><a className={styles.anc31666}>Apply Coupon</a></span> 
                                </p>
                                <p className={styles.para7666}>Shipping
                                <span>(Standard)
                                </span>
                                <span className={styles.span59666}>
                                    <span className={styles.span69666}>Free</span>
                                </span>
                                </p>
                            </div>
                            <div>
                                <p className={styles.para8666}>Total Cost
                                <div className={styles.par45666}>
                                <span className={styles.span59666}>₹{total}</span> 
                                </div>
                                </p>
                            </div>
                            </div>
                            
                        </div>
                            
                        
                        <div className={styles.s666}>
                            <button  onClick={() => placeorder()}className={styles.but3666}>Place Order</button>
                        </div>
                    </div>
                            
                </div>
            </div>
        </div>
    </div>
  );
};
