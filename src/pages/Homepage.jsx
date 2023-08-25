import React, { Component, useRef } from "react";
import styles from '../pages/Homepage.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { color } from "framer-motion";
//import useCitySelect from './useCitySelect';

export const Homepage=()=>{
    const sliderRef = useRef(null);
    // useCitySelect(selectRef);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    const settings1 = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true
      };

    return (
        <div>
            <div className={styles.main_homepage}>
                
                <div className={styles.carosel}>
                    <Slider className={styles.carosel_slider} ref={sliderRef} {...settings}>
                        <div>
                            <img className={styles.casarol_img1} src={require(`../Images/casarol-img2.webp`)} styles={{ width: "100%" }} alt="" />
                        </div>
                        <div>
                            <video className={styles.video_c} autoPlay loop playsInline muted styles={{ width: "100%" }}>
                                <source src={require(`../Images/casarol-vid1.mp4`)} type="video/mp4" />
                            </video>
                        </div>
                        <div>
                            <img className={styles.casarol_img1} src={require(`../Images/casarol-img3.webp`)} styles={{ width: "100%" }} alt="" />
                        </div>
                    </Slider>
                    {/* <img src={require(`../Images/casarol-img3.webp`)} alt="" /> */}
                </div><br />

                <div className={styles.top_images_div}>
                    <div><img className={styles.photo_top_left} src={require(`../Images/photo-top-left.jpg`)} alt="" /></div>
                    <div className={styles.photo_top_right}>
                        <img className={styles.photo_top_right_1} src={require(`../Images/photo-top-right-1.webp`)} alt="top-rigth-photo" />
                        <img className={styles.photo_top_right_1} src={require(`../Images/photo-top-right-2.webp`)} alt="top-rigth-photo" />
                    </div>
                </div>
                <br />
                <div className={styles.middle_vid_div}>
                    <video className={styles.video_middle} autoPlay loop playsInline muted>
                        <source src={require(`../Images/video-middle.mp4`)} type="video/mp4" />
                    </video>
                    <img className={styles.arrow_img} src={require(`../Images/arrow.png`)} alt="" />
                </div><br />
                <div className={styles.pill_part}>
                    <div className={styles.pill_row}>
                            <img className={styles.pill_photo} src={require(`../Images/pill-photo-1.png`)} alt="pill-photo" />
                              <img className={styles.pill_photo} src={require(`../Images/pill-photo-2.png`)} alt="pill-photo" />
                            <img className={styles.pill_photo} src={require(`../Images/pill-photo-3.png`)} alt="pill-photo" />
                    </div>
                    <div className={styles.pill_row}>
                        <img className={styles.pill_photo} src={require(`../Images/pill-photo-4.png`)} alt="pill-photo" />
                        <img className={styles.pill_photo} src={require(`../Images/pill-photo-5.png`)} alt="pill-photo" />
                        <img className={styles.pill_photo} src={require(`../Images/pill-photo-6.png`)} alt="pill-photo" />
                    </div>
                </div>
                <div>
                    <div className={styles.effect_part_div}>
                        <div className={styles.side_photo_container}>
                            <img className={styles.effect_photo_side} src={require(`../Images/effect-photo1.webp`)} alt="effect-photo" />
                        </div>
                        <div className={styles.effect_mid}>
                            <div className={styles.effect_mid_img_div}>
                                <img className={styles.effect_photo_mid} src={require(`../Images/effect-photo2.webp`)} alt="effect-photo" />
                            </div>
                            <div className={styles.view_btn_div}><button className={styles.view_btn} style={{color: "black"}}>View All Collections</button></div>
                        </div> 
                        <div className={styles.side_photo_container}>
                            <img className={styles.effect_photo_side} src={require(`../Images/effect-photo3.webp`)} alt="effect-photo" />
                        </div>
                    </div>
                </div>
                <div className={styles.four_img_div}>
                    <div className={styles.four_img_row}>
                        <img className={styles.four_img} src={require(`../Images/four-img-2.jpg`)} alt="four-img" />
                        <img className={styles.four_img} src={require(`../Images/four-img-1.jpg`)} alt="four-img" />
                    </div>
                    <div className={styles.four_img_row}>
                        <img className={styles.four_img} src={require(`../Images/four-img-3.jpg`)} alt="four-img" />
                        <img className={styles.four_img_webp} src={require(`../Images/four-img-4.jpg`)} alt="four-img" />  {/* Can put .gif here If want animations */}
                    </div>
                </div>
                <div className={styles.trail_img_div}>
                    <div className={styles.trail_img_div_1}>
                        <div className={styles.trail_img1_contents}>
                            <p className={styles.trail_title} styles={{fontWeight: "medium"}}>Unsure Which<br/>   Design To Pick?</p>
                            <br /><br />
                            <p styles={{fontWeight: "100"}}>Book A FREE Home Trail!</p><br /><br />
                            <button className={styles.appointment_btn}>Schedule Appointment</button>
                        </div>
                        <img className={styles.trail_img_1} src={require(`../Images/trail-photo1.jpg`)} alt="trail-photo" />
                    </div>
                    <div className={styles.trail_img_div_2}>
                        <div className={styles.trail_img2_contents}>
                            <p className={styles.trail_title} styles={{fontWeight: "medium"}}>Come visit us at any<br/>   of our stores!</p>
                            <br /><br /><br />
                            <select name="city" id="">
                                <option disabled selected value="">Enter City</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Kolkata">Kolkata</option>
                                <option value="Chennai">Chennai</option>
                            </select>
                        </div>
                        <img className={styles.trail_img_2} src={require(`../Images/trail-photo2.jpg`)} alt="trail-photo" />
                    </div>
                </div>
                <div className={styles.old_gold_div}>
                    <img className={styles.old_gold_img} src={require(`../Images/OLD-GOLD.png`)} alt="Old-gold" />
                    <div className={styles.old_gold_content}>
                        <h1 className={styles.old_gold_heading}>Your precious gold. Our new designs!</h1><br />
                        <hr className={styles.design_hr}/>
                        <hr className={styles.design_hr}/><br /><br />
                        <p className=""> - A Gold Exchange Program that lets you preserve your memories and make new ones!<br/>  
                            Please note: 
                            The old gold doesn’t have to be from only CaratLane, it can be any gold jewellery you have.  </p><br /><br />
                            <button className={styles.knowmore_oldgold_btn}>
                            <p encoding="UTF-8">Know more</p>
                                </button>
                    </div>
                </div>
                <div className={styles.Trust_div}>
                   <div className={styles.Trust_div_image}>
                   <img className={styles.Trust_purple_img} src={require(`../Images/True-purple.png`)} alt="Old-gold" /><br />
                   </div>
                    <p>The highest quality of craftsmanship and innovation,<br />
                        that brings you modern, everyday designs</p><br />
                    <button className={styles.knowmore_trust_btn}>Know more</button>
                </div><br /><br />
                <div className={styles.banner_div}>
                    <img className={styles.banner_img2} src={require(`../Images/banner-img2.jpg`)} alt="" />
                </div>
                <br /><br /><hr />
                <div className={styles.perks_div}>
                    <div className={styles.row1}>
                        <div className={styles.truck_div}>
                            <img className={styles.perks_img} src={require(`../Images/truck-no-bg.png`)} alt="Truck" />
                            <div className={styles.content}>
                                <h3>100% Certified &<br /> Free Shipping</h3><br />
                                <p>Our jewellery always comes with a certificate of authentication.</p>
                            </div>
                        </div>
                        <div className={styles.spinned_div}>
                            <img className={styles.perks_img} src={require(`../Images/spinned-no-bg.png`)} alt="Spinned" />
                            <div className={styles.content}>
                                <h3>15 Day Money-Back</h3><br />
                                <p>Get 100% refund if you don't like your jewellery.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.row2}>
                        <div className={styles.hand_div}>
                            <img className={styles.perks_img} src={require(`../Images/hand-no-bg.png`)} alt="Hand" />
                            <div className={styles.content}>
                                <h3>Lifetime Exchange</h3><br />
                                <p>Exchange your old designs anytime you want an upgrade.</p>
                            </div>
                        </div>
                        <div className={styles.dimond_div}>
                            <img className={styles.perks_img} src={require(`../Images/dimond-no-bg.png`)} alt="Dimond" /> 
                            <div className={styles.content}>
                                <h3>One Year<br/> Replacement Warranty</h3><br />
                                <p>If your jewellery has a defect, we will fix it.</p>
                            </div>   
                        </div>    
                    </div> 
                </div>
                <div className={styles.review_cards}>
                    <Slider ref={sliderRef}  {...settings1}>
                        <div className={styles.review_card_div}>
                            <div className={styles.icon_div}>
                                <img className={styles.insta_icon} src={require(`../Images/Insta-review-card-icon.png`)} alt="" /><br />
                            </div>
                            <div className={styles.review_content}>
                            <p className={styles.review}><i> “I got this necklace as my wedding gift and instantly loved it.
                                 It is literally the only accessory I wore on my entire honeymoon. 
                                 I love how delicate and beautiful it is.”</i></p><br />
                                    <hr className={styles.hr_style_line}/><br />
                                <p className={styles.review_author}>- Tanya Gupta via Instagram</p>
                            </div>
                        </div>
                        <div className={styles.review_card_div}>
                            {/* <h3>2</h3> */}
                            <div className={styles.icon_div}>
                                <img className={styles.insta_icon} src={require(`../Images/Insta-review-card-icon.png`)} alt="" /><br />
                            </div>
                            <div className={styles.review_content}>
                            <p className={styles.review}><i>”The six of us wanted to celebrate our year of togetherness with something 
                                which will stay with us forever. So, all of us bought this beautiful ring which is the perfect 
                                symbol of our friendship and is just so classy!”</i></p><br />
                                    <hr className={styles.hr_style_line}/><br />
                                <p className="review-author">- Shilpa Praveen via Instagram</p>
                            </div>
                        </div>
                        <div className={styles.review_card_div}>
                            {/* <h3>3</h3> */}
                            <div className={styles.icon_div}>
                                <img className={styles.insta_icon} src={require(`../Images/Insta-review-card-icon.png`)} alt="" /><br />
                            </div>
                            <div className={styles.review_content}>
                                <p className={styles.review}><i>”My fiance wanted to give me something classic and unique. 
                                    He searched everywhere, literally half of the Chandigarh for the unique design. 
                                    Our search was complete when we entered CaratLane store. 
                                    My fiance selected the diamond and I selected the design. 
                                    I love it because it is designed just for me.”</i></p><br />
                                    <hr className={styles.hr_style_line}/><br />
                                    <p className="review-author">- Pooja Rajpoot via Instagram</p>
                            </div>
                        </div>
                    </Slider>
                    <button className={styles.read_more_review_btn}>Read More</button>
                </div>
                <div className={styles.shop_insta_div}>
                    <div className={styles.title}>
                        <div className={styles.title1}>
                            <p styles={{fontStretch: "extra-condensed"}}>Shop Our Instagram</p>
                        </div>
                        <div className={styles.title2}>
                            <p><i>#MyCaratLaneStory</i></p>
                        </div>
                    </div>
                    <div className={styles.insta_all_photos}>
                    <div className={styles.insta_photos}>
                        <div className={styles.photo_big}>
                            <img src={require(`../Images/insta-photo1.jpg`)} alt="" className={styles.photo_big_img} />
                        </div>
                    </div>
                    <div className={styles.small_photo_div}>
                            <div className={styles.small_row_1}>
                                <div className={styles.photo_small}>
                                    <img src={require(`../Images/insta-photo2.jpg`)} alt="" className={styles.photo_small_img} />
                                </div>
                                <div className={styles.photo_small}>
                                    <img src={require(`../Images/insta-photo3.jpg`)} alt="" className={styles.photo_small_img} />
                                </div>
                                <div className={styles.photo_small}>
                                    <img src={require(`../Images/insta-photo4.jpg`)} alt="" className={styles.photo_small_img} />
                                </div>
                            </div>
                            <div className={styles.small_row_2}>
                                <div className={styles.photo_small}>
                                    <img src={require(`../Images/insta-photo5.jpg`)} alt="" className={styles.photo_small_img} />
                                </div>
                                <div className={styles.photo_small}>
                                    <img src={require(`../Images/insta-photo6.jpg`)} alt="" className={styles.photo_small_img} />
                                </div>
                                <div className={styles.photo_small}>
                                    <img src={require(`../Images/insta-photo7.jpg`)} alt="" className={styles.photo_small_img} />
                                </div>
                            </div>                       
                        </div>
                    </div>          
                </div>
                <div className={styles.home_last_div}>
                    <div className={styles.aeroplane}>
                        <img className={styles.aeroplane_img} src={require(`../Images/aeroplane.png`)} alt="Aeroplane" />
                    </div>
                    <p className={styles.tile_last}>Sign up to be a CaratLane Insider</p>
                    <div className={styles.form_div_last}>
                        <input type="text" className={styles.input_box_form_div} style={{width: "36%"}}/>
                        <button className={styles.submitbtn}>Submit</button>
                    </div>
                    <div styles={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <p className={styles.knowmore}>Know more </p>
                        <p className={styles.caratlan_line}> about CaratLane</p>
                    </div>
                </div>
                <div className={styles.arrow_part_div}>
                    <div className={styles.upward_arrow}></div>
                    {/* <div className="upward-arrow1"></div> */}
                </div>
            </div>
        </div>
    );
}
