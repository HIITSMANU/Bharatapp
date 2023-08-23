import React from "react";
import "./Showproddata.css";

export const Showproddata = ({ id, image, name, price, shipping, star, category }) => {

    const handleRemoveProduct = async () => {
        try{
            const res = await fetch(`http://localhost:3/products/${id}`,{
            method: "DELETE",
            });
            if (res.ok) {
                console.log("Product removed successfully.");
                alert("Product removed successfully.")
            }
            else{
                console.log("Failed to remove product.");
                alert("Failed to remove product.")
            }
            }
        catch(error){
            console.error("Error while removing product:", error);
        }
      };

  return (
    <div className="showprod-main-div">
      <div className="product-data-showing-box">
        <div className="product-show-image">
          <img src={image} alt="" />
        </div>
        <div className="product-show-product-details">
          <p className="product-show-product-details-name">
            <span>Name :</span> {name}
          </p>
          <p className="product-show-product-details-category">
            <span>Category :</span> {category}
          </p>
          <p className="product-show-product-details-price">
            <span>Price :</span> Rs. {price}
          </p>
          <p className="product-show-product-details-shipping">
            <span>Shipped by :</span> {shipping}
          </p>
          <p className="product-show-product-details-star">
            <span>Current rating :</span> {star} / 5
          </p>
          <button className="remove-product-from-database-btn" onClick={handleRemoveProduct}>Remove</button>
        </div>
      </div>
    </div>
  );
};
