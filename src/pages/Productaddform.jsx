import React from "react";
import styles from "./Productaddform.module.css";

export const Productaddform = () => {
  const api = "http://localhost:3/products";

  const handlesubmit = async (event) => {
    event.preventDefault();
    const obj = {
      name: event.target.name.value,
      price: event.target.price.value,
      image: event.target.image.value,
      star: event.target.star.value,
      shipping: event.target.shipping.value,
      category: event.target.category.value,
    };
    console.log(obj);
    const res = await fetch(api, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    alert("Product successfully added");
  };

  return (
    <div className={styles.body_div}>
      <h1 className={styles.admin_form_title}>Product Adding Form</h1>
      <form action="#" onSubmit={handlesubmit} className={styles.mainform}>
        <div className={styles.row1}>
          <input
            type="text"
            name="name"
            className={styles.name}
            placeholder="  Product name"
            required
          />
          <input
            type="text"
            name="image"
            className={styles.img_link}
            placeholder="  Image link"
            required
          />
        </div>
        <div className={styles.row2}>
          <input
            type="number"
            name="price"
            className={styles.price}
            placeholder="  Price"
            required
          />
          <input
            type="text"
            name="shipping"
            className={styles.shipping}
            placeholder="  Shipped by"
          />
        </div>
        <div className={styles.row3}>
          <input
            type="number"
            name="star"
            className={styles.stars}
            placeholder="  Rating"
            required
          />
          <input
            type="text"
            name="category"
            className={styles.category}
            placeholder="  Category"
            required
          />
        </div>
        <button className={styles.admin_form_submit_btn} type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};
