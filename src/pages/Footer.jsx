import React from "react";
import styles from "./Footer.module.css";

export const Footer=()=>{
    return(
        <div className={styles.Footer}>
            <div className={styles.bigContentsDiv}>
                <div className={styles.content1}>
                    <p className={styles.contentTitle}>Online Jewellery Store</p><br /><br />
                    <p className={styles.contentContent}>BharatJewels.com began in 2008 with the simple motto of democratising jewellery. 
                    And today, after 13 glorious years, it has come to be recognised as one of the top 20 e-commerce portals in India. 
                    Steadily growing from strength to strength since inception, 
                    BharatJewels has also established 165 stores across the length and breadth of India.</p><br /><br />

                    <p className={styles.contentContent}>Since July 2016, we joined forces with India’s most desired and largest jewellery brand, 
                    Tanishq, through a strategic investment made by Titan Company in BharatJewels. 
                    This takes us another step closer to achieving our shared mission - to make beautiful jewellery accessible to everyone.</p>
                </div>
                <div className={styles.content2}>
                    <p className={styles.contentTitle}>Shopping at BharatJewels</p><br /><br />
                    <p className={styles.contentContent}>Placing security first, BharatJewels ensures that every 
                    transaction made on the site is safe and smooth for the customers. 
                    To attain this, the company follows stern policies of transparency 
                    through the whole customer buying journey.</p><br /><br />
                        
                    <p className={styles.contentContent}>For further convenience, all BharatJewels products come backed with 
                    certification from international laboratories, and a blanket 15-day-return policy, 
                    no questions asked.</p><br /><br />

                    <p className={styles.contentContent}>BharatJewels provides the exquisite craftsmanship of beautiful 
                    jewellery designs such as rings, earrings, pendants, necklace, chains, 
                    bangles, bracelets, mangalsutra, nose pins. Apart from jewellery, 
                    BharatJewels offers 22k (916) and 24k (995) gold coins with certification 
                    and the guarantee of a BIS Hallmarked stamp.</p>
                </div>
                <div className={styles.content3}>
                    <p className={styles.contentTitle}>BharatJewels’s Vision</p><br /><br />
                    <p className={styles.contentContent}>BharatJewels works with the vision of offering tastefully designed jewellery at revolutionary prices. 
                    This is achieved by eliminating all inefficiencies which result in drastically reduced costs. 
                    With BharatJewels, users stand to save as much as 30% when compared to prices in the market.</p><br /><br />

                    <p className={styles.contentContent}>Our app is designed to bridge the vast gap between the virtual 
                    and the physical world. This has been attained with the help of the 
                    Virtual Try-on feature that permits the users to virtually put on 
                    1000s of earrings to see just how they look when placed on the ears.</p><br /><br />

                    <p className={styles.contentContent}>With over 100 thousand downloads, the BharatJewels app has emerged 
                    to be one of the most liked applications in the jewellery circuit.</p>
                </div>
            </div><br /><br />
            <div className={styles.pinkFotterPartDiv}>
                <div className={styles.upperRow}>
                <div className={styles.col1}>
                    <p className={styles.colHeading}>Know Your Jewellery</p><br />
                        <p className={styles.colOptions}>DIAMOND GUIDE</p>
                        <p className={styles.colOptions}>JEWELLERY GUIDE</p>
                        <p className={styles.colOptions}>GEMSTONES GUIDE</p>
                        <p className={styles.colOptions}>GOLD RATE</p>
                        <p className={styles.colOptions}>DIGITAL GOLD</p>
                </div>
                <div className={styles.col1}>
                    <p className={styles.colHeading}>BharatJewels Advantag</p><br />
                        <p className={styles.colOptions}>15-DAY RETURNS</p>
                        <p className={styles.colOptions}>FREE SHIPPING</p>
                        <p className={styles.colOptions}>FINANCING OPTIONS</p>
                        <p className={styles.colOptions}>OLD GOLD EXCHANGE</p>
                </div>
                <div className={styles.col1}>
                    <p className={styles.colHeading}>Customer Service</p><br />
                        <p className={styles.colOptions}>RETURN POLICY</p>
                        <p className={styles.colOptions}>ORDER STATUS</p>
                </div>
                <div className={styles.col1}>
                    <p className={styles.colHeading}>About Us</p><br />
                        <a href="/team" className={styles.team}>OUR TEAM</a>
                        <p className={styles.colOptions}>OUR STORY</p>
                        <p className={styles.colOptions}>PRESS</p>
                        <p className={styles.colOptions}>BLOG</p>
                        <p className={styles.colOptions}>CAREERS</p>
                </div>
                <div className={styles.col2}>
                    <p className={styles.colHeading}>Contact Us</p><br /><br />
                        <div className={styles.iconImages }>

                        </div>
                        <p className={styles.col2Options}>24X7 Enquiry Support ( ALL Days )</p>
                        <p className={styles.col2Options}>General : ContactUs@bharatJwellery.com</p>
                        <p className={styles.col2Options}>Corporate : B2B@bharatJwellery.com</p>
                        <p className={styles.col2Options}>HR : hr@bharatJwellery.com</p><br /><br />
                        <button className={styles.findStoreBtn}>Find Store</button>
                </div>
                </div>
                <div className={styles.socialMediaRow}>
                    <img className={styles.socialmediaIcon} src={require(`../Images/facebook-icon-removebg-preview (1).png`)} alt="" />
                    <img className={styles.socialmediaIcon} src={require(`../Images/insta-icon-removebg-preview.png`)} alt="" />
                    <img className={styles.socialmediaIcon} src={require(`../Images/twitter-icon-removebg-preview (1).png`)} alt="" />
                    <img className={styles.socialmediaIcon} src={require(`../Images/pintrest-icon-removebg-preview.png`)} alt="" />
                    <img className={styles.socialmediaIcon} src={require(`../Images/linkedin-icon-removebg-preview.png`)} alt="" />
                </div>
                <div className={styles.row2}>
                    <div className={styles.appstore}>
                        <img className={styles.appstoreImg} src={require(`../Images/gplay-icon.png`)} alt="" />
                        <img className={styles.appstoreImg} src={require(`../Images/applestore-icon-removebg-preview.png`)} alt="" />        
                    </div>
                    <div className={styles.payingIcons}>
                        <img className={styles.payingiconsImg} src={require(`../Images/americanexpress-icon-removebg-preview.png`)} alt="" />
                        <img className={styles.payingiconsImg} src={require(`../Images/amozon-icon-removebg-preview.png`)} alt="" />
                        <img className={styles.payingiconsImg} src={require(`../Images/mastercard-icon-removebg-preview.png`)} alt="" />
                        <img className={styles.payingiconsImg} src={require(`../Images/paypal-icon-removebg-preview.png`)} alt="" />
                    </div>                    
                </div>
                
            </div><br /><br />
            <div className={styles.popularSearchesDiv}>
                <p className={styles.popularSearchesHeading}>Popular Searches</p><br />
                <div className={styles.searchBlock}>
                    <p className={styles.searchBlockHeading}>Gold Rate in Major Cities</p>
                    <div className={styles.searchesDiv}>
                        <a href="">Gold Rate Today In Chennai</a>
                        <a href="">Gold Rate Today In Hyderabad</a>
                        <a href="">Gold Rate Today In Bengalore</a>
                        <a href="">Gold Rate Today In Mumbai</a>
                        <a href="">Gold Rate Today In Delhi</a><br />
                        <a href="">Gold Rate Today In Kerala</a>
                        <a href="">Gold Rate Today In Pune</a>
                        <a href="">Gold Rate Today In Vijiyawada</a>
                        <a href="">Gold Rate Today In Kolkata</a>
                        <a href="">Gold Rate Today In Ahmedabad</a>
                    </div>
                    <hr className={styles.designerHr}/>
                </div>
                <div className={styles.searchBlock}>
                    <p className={styles.searchBlockHeading}>For Women</p>
                    <div className={styles.searchesDiv}>
                        <a href="">Rings For Women</a>
                        <a href="">Earrings For Women</a>
                        <a href="">Bracelet For Women</a>
                        <a href="">Bamgles For Women</a>
                        <a href="">Pendants For Women</a>
                        <a href="">Necklaces For Women</a>
                    </div>
                    <hr className={styles.designerHr}/>
                </div>
                <div className={styles.searchBlock}>
                    <p className={styles.searchBlockHeading}>For Men</p>
                    <div className={styles.searchesDiv}>
                        <a href="">Rings For Men</a>
                        <a href="">Earrings For Men</a>
                        <a href="">Bracelet For Men</a>
                        <a href="">Men's Kada</a>
                    </div>
                    <hr className={styles.designerHr}/>
                </div>
                <div className={styles.searchBlock}>
                    <p className={styles.searchBlockHeading}>Mangalsutra</p>
                    <div className={styles.searchesDiv}>
                        <a href="">Gold Mangalsutra</a>
                        <a href="">Dimond Mangalsutra</a>
                        <a href="">Modern Mangalsutra</a>
                        <a href="">Fancy Mangalsutra</a>
                        <a href="">Black Beeds Mangalsutra</a>
                        <a href="">Gold Mangalsutra Under 20000</a><br />
                        <a href="">Traditional Mangalsutra</a>
                        <a href="">Light Weight Mangalsutra</a>
                        <a href="">Daily Mangalsutra</a>
                        <a href="">Infinity Mangalsutra</a>
                    </div>
                    <hr className={styles.designerHr}/>
                </div>
                <div className={styles.searchBlock}>
                    <p className={styles.searchBlockHeading}>Pendant</p>
                    <div className={styles.searchesDiv}>
                        <a href="">Gold Pendant</a>
                        <a href="">Dimond Pendant</a>
                        <a href="">Solitari Pendant</a>
                        <a href="">Evil Eye Pendant</a>
                        <a href="">Chain Pendants</a>
                        <a href="">Om Pendants</a>
                        <a href="">Butterfly Pendants</a>
                        <a href="">Heart Pendants</a>
                    </div>
                    <hr className={styles.designerHr}/>
                </div>
                <div className={styles.searchBlock}>
                    <p className={styles.searchBlockHeading}>Nose Pins</p>
                    <div className={styles.searchesDiv}>
                        <a href="">Nose Rings</a>
                        <a href="">Gold Nose Rings</a>
                        <a href="">Dimond Nose Rings</a>
                        <a href="">Nose Studs</a>
                        <a href="">Pressing Nose Rings</a>
                        <a href="">Stone Nose Rings</a>
                    </div>
                    <hr className={styles.designerHr}/>
                </div><br /><br /><br />
                <p className={styles.searchBlockHeading}>COPYRIGHT BHARAT JEWELLERS © 2023</p>
            {/* <button className="thankyou">Thank you</button> */}
            </div>
            <div className={styles.teamDiv}>
                <p className={styles.teamP1}>Made With Love </p>
                <img className={styles.heartTeamIcon} src={require(`../Images/red-heart-team-icon.png`)} alt="" />
                <p className={styles.teamP2}> By Code Crafters</p>
            </div>
        </div>
    )
}
