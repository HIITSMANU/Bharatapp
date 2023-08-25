import React from "react";
import styles from  "./Wishlist.module.css";
import { useEffect, useState } from "react";
import { CloseButton } from '@chakra-ui/react';
// import {Alert,AlertIcon,AlertTitle,} from '@chakra-ui/react'
const Wishlist = () => {
  const [status, setStatus] = useState(false);
  const [datas, setDatas] = useState([]);
  console.log(datas);
   const addtocart = async (data) => {
    let res = await fetch("http://localhost:3/cart", {
      method: "POST",
      body: JSON.stringify({ ...data }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    alert("product added to cart!");
  };
  const deleteWishlist = async (id) => {
    let res = await fetch(` http://localhost:3/wishlist/${id}`, {
      method: "Delete",
    });
    setStatus(!status); 
  };
  useEffect(() => {
    async function getWishList() {
      let res = await fetch(" http://localhost:3/wishlist");
      let data1 = await res.json();
      setDatas(data1);
    }
    getWishList();
  }, [status]);
  if (datas.length === 0) {
    return (
      <div className={styles.wish_main}>
        <section className={styles.sec1334}>
          <div className={styles.j334}>
            <div className={styles.k334}>
              <hr className={styles.hr5334}/>
              <h3 className={styles.head5334}>Your Wishlist</h3>
            </div>
            <div className={styles.l334}>
              <span className={styles.span5334}></span>
              <p className={styles.para}>Uh Oh!</p>
              <p className={styles.para}>Your Wishlist Seems to be Empty!</p>
              <a href="">
                <button content="Start_shopping" className={styles.b5334}>Start Shopping</button>
              </a>
            </div>
          </div>
        </section>
      </div>    
    );
  }
  return (
    <div className={styles.main}>
      <div className = {styles.main500}>
      <section className={styles.sec1334}>
        <div className={styles.one334}>
          <div className={styles.two334}>
            <hr className={styles.hr1334}/>
            <h3 className={styles.head1334}>Your Wishlist</h3>
          </div>
          <div className={styles.three334}>
            <div className={styles.four334}>
              {
            datas.map((data) =>( 
              <div span="1334" className={styles.five334}>
                <div className={styles.six334}>
                  <div  data-sku="JL04632-1RP900" className={styles.seven334}>
                  {/* { 
                      datas.map((data) =>(  */}
                    <div role="presentation">
                      <div className={styles.eight334}>
                        <img src={data.image} alt="" srcset="" className={styles.img1334}/>
                      </div>
                      {/* <div className={styles.nine334} role="presentation"> */}
                         <div className={styles.ten334}> 
                          <span className={styles.span2334}>
                          <CloseButton onClick={() => deleteWishlist(data.id)}/>
                          </span>
                        </div>  
                        {/* </div>  */}
                        <div className={styles.e334}>
                          <div className={styles.f334}>
                            <p className={styles.p1334}>
                            <span className="" data-name="regPrice" locale="en_IN"><strong>₹{data.price}</strong></span>
                            <span className={styles.span3334}>
                            <span className="" data-name="strikePrice" locale="en_IN">
                              <span className={styles.span4334}>₹{data.price+540}</span>
                              </span>
                            </span>
                            </p>
                           </div>
                           <div className={styles.g334}>
                            <a href="" className={styles.a2334}>
                              <p className={styles.p2334}>{data.name}</p>
                            </a>
                           </div>
                           <div className={styles.h334}>
                         {/* { 
                              datas.map((data) =>(  */}
                            <button content="Move to Cart" className={styles.b1334} onClick={() => addtocart(data)}>Move to Cart</button>
                           {/* ))} */}
                    
                            </div>
                         </div> 
                    </div>
                  </div>
                </div>
              
              </div>
))}
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};
export default Wishlist;
