import styles from  "./CartCard.module.css"
import  {useContext} from "react";
import {CartContext} from "../Context/CartContext"
import { useToast,Button } from '@chakra-ui/react'

export const CartCard = ({id,image,name,price,shipping,star,category}) => {
  const toast = useToast()
    const {Cart,removeFromCart} = useContext(CartContext);
  console.log(Cart);
    function remove(){
        removeFromCart({id,image,name,price,shipping,star,category});
        toast({
          title: "Item Removed From The Cart ",
          status: "error",
          duration: 1000,
          position: "bottom",
          isClosable: true
        });
    }
    

    return (
        <div id={styles.Card1}>
          <div id={styles.ImgDiv1}>
            <img style={{ width: "200px" }} src={image} alt={name} />
          </div>
          <div id={styles.DetailsDiv1}>
            <p style={{fontWeight:"bold",fontSize:"18px"}}>{name}</p>
            <div className={styles.helo} style={{display:"flex"}}>
            <h1>₹{price}</h1>
            <h2>{price + 2141}</h2>
            
            </div>
           
            <h3>Save upto ₹{price + 2141 - price}</h3>
            <div>
            <p>JL04632-1RP900</p>
            <h1 style={{fontSize:"17px"}}>FREE TRAIL</h1>
            </div>
            
            <h4 style={{color:"blue"}}>Availiable to try from 30 jul onwards</h4>
            <br />
            <button className={styles.btn1} onClick={remove}>Remove From The Cart</button>
          </div>
        </div>
      );
}
