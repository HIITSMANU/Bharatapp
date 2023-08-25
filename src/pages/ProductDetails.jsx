import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Stack,Button,Wrap,WrapItem} from "@chakra-ui/react"
import { FaShoppingCart } from "react-icons/fa";
import styles from "../pages/AppStyle.module.css";

export let ProductDetails = () => {
    let [product, setProduct] = useState([]);
    let { id } = useParams();

    let fetchProductDetails = async () => {
      try {
        let response = await fetch(`http://localhost:3/products/${id}`);
        let data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
    useEffect(() => {
      fetchProductDetails();
    }, []);
  
    if (!product) {
      return <div>Loading...</div>;
    }

  
      ;let AddToCart = async () => {
          let p_image = product.image;
          let product_price = product.price;
          let pname = product.name;
          let p_shipping = product.shipping;
          let p_star = product.star;
          let p_category = product.catgory;
          let cartProducts = {
            image: p_image,
            price: product_price,
            name: pname,
            shipping: p_shipping,
            star : p_star,
            category: p_category
          };
          console.log(cartProducts);
          let res = await fetch("http://localhost:3/cart",{
            method: "POST",
            body: JSON.stringify(cartProducts),
            headers: {
              "Content-Type": "application/json"
            }
          });
          alert("Product added to cart successfully!");
    }
   /*<Item id={product.id} img={product.image} pname={product.name} price={product.price} category={product.category} />*/
    return (
      <>
      <div className={styles.item}>
      <div className={styles.item_head}>
          <div className={styles.item_head_image} id="item-head-image">
          <img src={product.image} id='item-head-image'  alt="product-image" />
          </div>
          <div className={styles.item_head_price}>
              <div className={styles.head_elements}>
              <div className={styles.first_div}>
                  <div className={styles.product_name_div}>
                      <div className={styles.rating}>
                      <img src={require(`../Images/rating.png`)} alt="heart" />
                      </div>
                      <div><h1 className={styles.product_name} id='product-name'>{product.name}</h1></div>
                  </div>
                  <div className={styles.space_div}>
                  </div>
                  <div className={styles.icon}>
                     {/*
                        <div className="heart-icon">
                        <span id="">
                        <img src={require(`../Images/heart.png`)} alt="heart" />  
                        </span>
                    </div>
                    <div className="share-icon">
                    <span id="share-icon">
                        <img src={require(`../Images/share.png`)} alt="share" />  
                        </span>
    </div>*/ } 
                  </div>
              </div>
              <div className={styles.bestseller}>
                  <span>BESTSELLER</span>
              </div>
              <div className={styles.price} id="price">
                  <span className={styles.actual_price} id="actual-price">₹{product.price}</span>
                  <span className={styles.strike_price} id="strike-price">₹{product.price+ 1081}</span>
              </div>
              <div className={styles.item_category}>
              <p>Upon price drop,<span color="purple">Notify Me</span></p>
              <p>Caterory: {product.category}</p>
              <p>Shipping: {product.shipping}</p>
              <p>Star: {product.star}</p>
              <div>

              </div>
              </div>
              <div className={styles.second_div}>
                  <div className={styles.product_price}>
                      <Stack>
                          <Wrap spacing={4}>
                              <WrapItem>
                                  <button className={styles.add_button} onClick={AddToCart}><FaShoppingCart /> ADD TO CART</button>
                              </WrapItem>
                          </Wrap>
                      </Stack>
                  </div>
                  <div className={styles.price_space_div}>
                  </div>
                  <div className={styles.find_store}>
                      <Stack>
                          <Wrap spacing={4}>
                              <WrapItem>
                                  <button className={styles.find_button}>FIND IN STORE</button>
                              </WrapItem>
                          </Wrap>
                      </Stack>
                  </div>
              </div>
                  </div>
          </div>
      </div>
     <div className={styles.item_details}>
     </div>
  </div>
  </>
  );
};