import React, { useEffect, useState } from "react";
import styles from "../Components/Navbar.module.css";

const Navbar= () =>{
    const [showmenu, setShowmenu]=useState(false);
    const [text, setText] = useState("Introducing Bharat Jewels PoP! Plan your purchase");
    const [datas, setDatas] = useState([]);
    const [data9,setData9] = useState([]);
    const classNames = {
        active: styles.mobile_btns ,
        inactive: styles.btns_2
      };
      
    useEffect(() => {
    const intervalId = setInterval(() => {
        if (text === "Bharat Jewels - A Tanishq Partnership")
            setText("Introducing Bharat Jewels PoP! Plan your purchase");
        else if (text === "Introducing Bharat Jewels PoP! Plan your purchase")
            setText("Bharat Jewels - A Tanishq Partnership");
    }, 3000);

    return () => clearInterval(intervalId);
    }, [text]);
    useEffect(() => {
        async function getCart() {
          let res = await fetch("http://localhost:3/cart");
          let data1 = await res.json();
          setDatas(data1);
        //   await getTotal(data1);
        } 
    
         getCart();
      }, []);
      useEffect(() => {
        async function getCart() {
          let res = await fetch("http://localhost:3/wishlist");
          let data1 = await res.json();
          setData9(data1);
        //   await getTotal(data1);
        } 
    
         getCart();
      }, []);

    return(
        <div>
            <div className={styles.above_nav}>
                <span className={styles.fade_out}>{text}</span>
            </div>
            <nav className={styles.main_nav}>
                <div className={styles.logo}>
                    <div className={styles.hamburger_menu}>
                        <a href="#" onClick={() => setShowmenu(!showmenu)}>
                            <img className={styles.hamburger_icon} src={require(`../Images/hamburger-icon6.png`)} alt="" />
                        </a>
                    </div>
                    <a href="/homepage"><img src={require(`../Images/logo1.png`)} alt="" /></a>
                </div>
                <div className={styles.btns}>
                    <ul>
                        <li>
                            <img className={styles.btn_logo} src={require(`../Images/home_icon1.png`)} alt="" />
                            <a className="btn" href="/freetry">FREE TRY AT HOME</a>
                        </li>
                        <li>
                            <img className={styles.btn_logo} src={require(`../Images/shop_icon.png`)} alt="" />
                            <a className="btn" href="/findstore">FIND STORE</a>
                        </li>
                        <li>
                            <img className={styles.btn_logo} src={require(`../Images/bag_icon.png`)} alt="" />
                            <a className="btn" href="/pop">PLAN OF PURCHASE</a>
                        </li>
                        <li>
                            <img className={styles.btn_logo} src={require(`../Images/goldbar_icon.png`)} alt="" />
                            <a className={styles.btn} href="/gold">BUY DIGITAL GOLD</a>
                        </li>
                    </ul>
                </div>
                {/* Toggle menu div */}
                {/* <div className={showmenu ? "mobile-btns" : "btns-2"}>
                    <ul>
                        <li>
                            <img className="btn-logo" src={require(`../Images/home_icon1.png`)} alt="" />
                            <a className="btn" href="">FREE TRY AT HOME</a>
                        </li>
                        <li>
                            <img className="btn-logo" src={require(`../Images/shop_icon.png`)} alt="" />
                            <a className="btn" href="">FIND STORE</a>
                        </li>
                        <li>
                            <img className="btn-logo" src={require(`../Images/bag_icon.png`)} alt="" />
                            <a className="btn" href="">PLAN OF PURCHASE</a>
                        </li>
                        <li>
                            <img className="btn-logo" src={require(`../Images/goldbar_icon.png`)} alt="" />
                            <a className="btn" href="">BUY DIGITAL GOLD</a>
                        </li>
                    </ul>
                </div> */}
                <div className={styles.search_bar}>
                    <input className={styles.search_box} type="text" placeholder="   Search"/>
                    <img src={require(`../Images/search_icon_5.png`)} alt="" />
                </div>
                <div className={styles.func_btns}>
                    <ul className={styles.func_btns_desktop}>
                        <li>
                            <a className={styles.navlocation} href="">
                                <img className={styles.location_img} src={require(`../Images/location_icon.png`)} alt="" />
                                <span className={styles.navlocation}>PINCODE</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img className={styles.india_img} src={require(`../Images/india_icon.png`)} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="/login">
                                <img className={styles.user_img} src={require(`../Images/user_icon.png`)} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="/wishlist">
                                <img className={styles.heart_img} src={require(`../Images/heart_icon.png`)} alt="" />
                                <strong> <span className={styles.hei}>{data9.length}</span></strong>
                            </a>
                        </li>
                        <li>
                            <a href="/cart">
                                <img className={styles.cart_img} src={require(`../Images/cart_icon.png`)} alt="" />
                               <strong> <span className={styles.hee}>{datas.length}</span></strong>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className={styles.search_bar_mobile_container}>
                <div className={styles.search_bar_mobile}>
                    <input className={styles.search_box} type="text" placeholder="   Search"/>
                    <img src={require(`../Images/search_icon_5.png`)} alt="" />
                </div>
            </div>    
            <div className={styles.below_nav}>
                <ul>
                    <li>
                        <a className={styles.bottom_btn} href="/bestsellers">BEST SELLERS</a>
                    </li>
                    <li>
                        <a className={styles.bottom_btn_c} href="newarrivals">NEW ARRIVALS</a>
                    </li>
                    <li>
                        <a className={styles.bottom_btn} href="/rings">RINGS</a>
                    </li>
                    <li>
                        <a className={styles.bottom_btn} href="/earrings">EARRINGS</a>
                    </li>
                    <li>
                        <a className={styles.bottom_btn} href="/bracelets">BRACELETS & BANGLES</a>
                    </li>
                    <li>
                        <a className={styles.bottom_btn} href="/solitaires">SOLITAIRES</a>
                    </li>
                    <li>
                        <a className={styles.bottom_btn_c} href="/specialdeals">SPECIAL DEALS</a>
                    </li>
                    <li>
                        <a className={styles.bottom_btn} href="jewellery">OTHER JEWELLERY</a>
                    </li>
                    <li>
                        <a className={styles.bottom_btn} href="/gift">GIFTING</a>
                    </li>
                </ul>
            </div>
            <div className= {showmenu ? classNames.active : classNames.inactive }>
                    <ul>
                        <li>
                            {/* <img className="btn-logo" src={require(`../Images/home_icon1.png`)} alt="" /> */}
                            <a className={styles.btn} href=""> FREE<br /> TRY AT<br />HOME</a>
                        </li>
                        <li>
                            {/* <img className="btn-logo" src={require(`../Images/shop_icon.png`)} alt="" /> */}
                            <a className={styles.btn} href="">GIFTS AND MORE</a>
                        </li>
                        <li>
                            {/* <img className="btn-logo" src={require(`../Images/bag_icon.png`)} alt="" /> */}
                            <a className={styles.btn} href="">PLAN OF PURCHASE</a>
                        </li>
                        <li>
                            {/* <img className="btn-logo" src={require(`../Images/goldbar_icon.png`)} alt="" /> */}
                            <a className={styles.btn} href="">BUY DIGITAL GOLD</a>
                        </li>
                    </ul>
                    {/* <div className="explore">
                        <a href="">
                            <img src={require(`../Images/aeroplane.png`)} alt="" />
                        </a>
                    </div> */}
                </div>
        </div>
    )
}

export default Navbar;
           
                          
                                
                      
