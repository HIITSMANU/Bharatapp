//import { useContext } from "react";
//import { Link } from "react-router-dom";
// import './cart_nav.css';
import logo1 from"../Images/logo1.png";
import { useNavigate } from 'react-router-dom';
import styles from "./cart_nav.module.css";
// import {ArrowBackIcon} from "@chakra-ui/icons";
// import { Grid,GridItem } from '@chakra-ui/react';
// import { Link } from 'react-router-dom';

export const Cart_nav = () => {
  //const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const Shop = () => {
        navigate("/cart");
  }
  const Trial = () => {
    navigate("/carts");
}

  return (
    <div className={styles.main34567}>
    <section className={styles.one11}>
      <span className={styles.two22}>
      </span>
      <div className={styles.three33}>
        <h2 className={styles.four44}>
          <div to="/" className={styles.five55}>Home
          <img  className ={styles.mun} src={logo1} alt="logo"  />
          </div>
        </h2>
      </div>
      <div className={styles.six66}>
        <span className={styles.seven77}></span>
        <div className={styles.eight88}>
          <span className = {styles.one98} >
            {/* <Link to="/Cart"> */}
            <button  onClick={() => Shop()}className={styles.nine99}>Shopping Cart</button>
            <button onClick={() => Trial()}className={styles.ten10}>Trial Cart</button>
          </span>
        </div>
      </div>
      <div className={styles.eleven1155}>
        <p className={styles.ek52}>Need assistance?</p>
        <span className = {styles.mum5}></span>
      </div>
    </section>
    </div>
    
       
  
  );
};
