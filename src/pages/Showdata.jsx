import React, { useEffect, useState } from "react";
import { Showproddata } from "../Components/Showproddata";
import styles from "./Showdata.module.css";

export const Showdata=()=>{
    const [fdata,setFdata]=useState([]);

    const api="http://localhost:3/products";

    let fetchdata=async() =>{
        let res=await fetch(api);
        let data=await res.json();
        setFdata(data);
    }

    useEffect(() =>{
        fetchdata();
    },[]);
    return(
        <div  className={styles.showdata_allprod_main_div}>
            <div>
                <p className={styles.showdata_allprod_title}>All Products</p><br />
                {
                    fdata.map((val,key)=>{
                        return <Showproddata {...val}/>;
                    })
                }
                {/* <button onClick={(handleButtonClick)}>Add</button> */}
                {/* <table>
                   <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Shipping</th>
                        <th>Rating</th>
                        <th>Category</th>
                    </tr>
                    {
                        fdata.map((val,key)=>{
                            return(
                                <tr key={key}>
                                <td><img src={val.image} alt="" /></td>
                                <td>{val.name}</td>
                                <td>{val.price}</td>
                                <td>{val.shipping}</td>
                                <td>{val.star}</td>
                                <td>{val.category}</td>
                        </tr>
                            )
                        })
                    }
                </table> */}
            </div>
        </div>
    )
}