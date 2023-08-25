import styles from "./Freetryathome.module.css"
import bag from "../Images/bag.png"
import mobile from "../Images/mobile.png"
import person from "../Images/person.png"
import calender from "../Images/Calender.png"
import call from "../Images/call.png"
import line from "../Images/Line.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
 import "slick-carousel/slick/slick-theme.css";
 import {Link} from "react-router-dom"
import coma from "../Images/coma.png";
import {Products}  from "../pages/TProducts"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from "@chakra-ui/react";
export const Freetryathome = () =>{
    const settings = {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplaySpeed:2000,
                autoplay:true,
                cssEase:"linear"
              };
    return(
        <div className={styles.main}>
            <div className={styles.videocontainer}>
            <video className={styles.video1} autoPlay loop playsInline muted>
          <source
            src="https://assets.cltstatic.com/images/responsive/TAH-Desktop-Snippet.mp4"
            type="video/mp4"
          />
        </video>
        <video className={styles.video2}  autoPlay loop playsInline muted>
          <source
            src="https://assets.cltstatic.com/images/responsive/TAH-Mobile-Snippet.mp4"
            type="video/mp4"
          />
        </video>
        <div className={styles.textcontain}>
          <h2 className={styles.text}>
            Your Favourite Designs at Your Doorstep!
          </h2>
          <div className={styles.inputbutton}>
            <div className={styles.inputbox}>
              <span className={styles.loclogo}></span>
              <input
                value="751024"
                name="Pincode"
                className={styles.locinput}
                placeholder="Enter PinCode"
              />
            </div>
            <button
              content="See Designs"
              className={styles.locbtn}
            >
              See Designs
            </button>
          </div>
          <span className={styles.videobtn}></span>
          <p>See How It Works</p>
        </div>
            </div>
            <div className={styles.products}>
        <div className={styles.productspart}>
          <div>
            <img
              src="https://assets.cltstatic.com/images/responsive/tah-gift-ribbon.png"
              alt=""
            />
          </div>
          <div className={styles.productdata}>
            <h3>Give Her the Gift of Choice!</h3>
            <p>
              Book a surprise Try at Home and let her pick from 5 stunning
              designs.
            </p>
          </div>
        </div>
        <div className={styles.productspart}>
          <div>
            <img
              src="https://assets.cltstatic.com/images/responsive/tah-gift-ring.png"
              alt=""
            />
          </div>
          <div className={styles.productdata}>
            <h3>Ensure the Perfect Fit...</h3>
            <p>Always...</p>
          </div>
        </div>
      </div>
      <div className={styles.options}>
        <div className={styles.optionspart}>
          <h1>It Doesn't Get Easier than This!</h1>
          <p>It's free and there's no obligation to buy!</p>
        </div>
        <div className={styles.optionimg}>
          <section className={styles.optionsec}>
            <div className={styles.optionsec1}>
              <div className={styles.optionsec2}>
                <img src={mobile} alt="" />
                {/* <img src={line} /> */}
              </div>
              
              <div className={styles.optiondata}>
                <h3>
                  <p>
                    Pick your favourite
                    <br />
                    designs online
                  </p>
                </h3>
                <p>Add Minimum 1 design</p>
              </div>
            </div>
            <div className={styles.optionsec1}>
              <div className={styles.optionsec2}>
                <img src={calender} alt="" />
                {/* <img src={line} /> */}
              </div>
              <div className={styles.optiondata}>
                <h3>
                  <p>
                    Book an appointment
                    <br />
                    (It's Free!)
                  </p>
                </h3>
                <p>Select your convenient date, time and place.</p>
              </div>
            </div>
            <div className={styles.optionsec1}>
              <div className={styles.optionsec2}>
                <img src={person} alt="" />
                {/* <img src={line} /> */}
              </div>
              <div className={styles.optiondata}>
                <h3>
                  <p>Try the designs </p>
                </h3>
                <p>
                  Our Try at Home consultants will get you your chosen designs -
                  at home or at work!
                </p>
              </div>
            </div>
            <div className={styles.optionsec1}>
              <div className={styles.optionsec2}>
                <img src={bag} alt="" />
                {/* <img src={line} /> */}
              </div>
              <div className={styles.optiondata}>
                <h3>
                  <p>Buy Only if You like</p>
                </h3>
                <p>
                  Buy on the spot! And if you don't like it, there's no
                  obligation to buy.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className={styles.bestsell}>
        <div className={styles.bestsellpart}>
          <h2 className={styles.bestsellh2}>Pick from Our Bestsellers</h2>
        </div>
        <div className={styles.inputbox}>
          <div className={styles.inputpart}>
            <span className={styles.inputpart1}></span>
            <label htmlFor="" className={styles.partlabel}>
              Enter Pincode
            </label>
            <input
              spellCheck="false"
              className={styles.inputdata}
              name="pincode"
              placeholder="PINCODE"
              id="pincode"
              style={{ width: "20rem", height: "3.6rem", color: "#33363e" }}
              value="751024"
            />
          </div>
          <button className={styles.submitbtn}>Submit</button>
          <p>OR</p>
          <div className={styles.locate}>
            <button className={styles.locatebtn}>Locate Me</button>
          </div>
        </div>
        <div className={styles.sellp}>
          <img src="" width="150px"/>
        </div>
        <div className={styles.prodmidle}>
        <Products />
        </div>
        <button className={styles.submitbtn123} >
               <Link to='/carts'>Show Trial Cart</Link>
        </button>
      </div>
      <div className={styles.customerques}>
        <h1>Hear it from Our Customers</h1>
        <div className={styles.customerimg}>
        <img src={coma} width="200px" className={styles.comas} />
        </div>
      </div>
      <Slider {...settings}>
        <div className={styles.review}>
           <h2 className={styles.name}>Navya pradeep,Bengaluru</h2>
        <br />
           <span>⭐⭐⭐⭐⭐</span>
           <br />
           <br />
           <p className={styles.talk}>
             It was wonderful to have a ability to see and try these at home.
             <br />
             Classic designs made affordable. Bravo
           </p>
           </div>
           <div className={styles.review}>
           <h2 className={styles.name}>Preeti Singh,Bengaluru</h2>
           <br />
           <span>⭐⭐⭐⭐⭐</span>
           <br />
           <br />
           <p className={styles.talk}>
             It was a great experience of try at home . It saves time . Products were also good.
             <br />
             Behaviour of person is professional
           </p>
           </div>
           <div className={styles.review}>
           <h2 className={styles.name}>Gokul Karki,New Delhi</h2>
           <br />
           <span>⭐⭐⭐⭐⭐</span>
           <br />
           <br />
           <p className={styles.talk}>
            Try at home service very useful for people like us. Thanks for the excellent service by the executive
             <br />
             .Very polite person,had good knowledge about the product I will recommend my friends as well about this service
           </p>
           </div>
         </Slider>
         <div className={styles.Accordian}>
         <div className={styles.quest}>
          <h3>Have Some Questions?</h3>
          <div className={styles.contact}>
            <img src={call} alt="" />
            <div className={styles.call}>
              <p>Just give us a call</p>
              <a href="+91-44-42935000" className={styles.tocall}>
                +91-44-42935000
              </a>
            </div>
          </div>
        </div>
        <div className={styles.Accordopt}>
    <Accordion allowToggle>
        <AccordionItem className={styles.Accordbtn}>
        <h1>
                <AccordionButton>
                <Box as="span" flex="1" textAlign="left" className="boxes">
                    What is Try at Home?
                </Box>
                    <AccordionIcon />
                </AccordionButton>
        </h1>
            <AccordionPanel className={styles.panel} pb={4}>
            Try at Home is a service that you can avail to try our designs
            in the comfort of your home. It is a free service, with
            absolutely no obligation to buy. All you have to do is pick your
            favourite designs, and schedule an appointment as per your
            convenience.
           </AccordionPanel>
        </AccordionItem>
        <AccordionItem className={styles.Accordbtn}>
        <h1>
                <AccordionButton>
                <Box as="span" flex="1" textAlign="left" className="boxes">
                    Is Try at Home avaliable outside India
                </Box>
                    <AccordionIcon />
                </AccordionButton>
        </h1>
            <AccordionPanel className={styles.panel} pb={4}>
            No.Try at Home availiable only within India.
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem className={styles.Accordbtn}>
        <h1>
            <AccordionButton>
            <Box as="span" flex="1" textAlign="left" className="boxes">
            Which are the cities in which this service is available?
            </Box>
                <AccordionIcon />
            </AccordionButton>
        </h1>
            <AccordionPanel className={styles.panel} pb={4}>
            Try at Home service is currently available in Agra, Ahmedabad, Bangalore, Bhubaneswar, Bokaro, Chandigarh, Chennai, Cuttack, Dehradun, Delhi-NCR, Gandhinagar, Guwahati, Haridwar, Hyderabad, Jaipur, Kochi, Kolkata, Lucknow, Ludhiana, Mumbai, Nagpur, Pathankot, Patna, Pune, Ranchi, Surat, Vijayawada & Visakhapatnam.
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem className={styles.Accordbtn}>
        <h1>
            <AccordionButton>
            <Box as="span" flex="1" textAlign="left" className="boxes">
            Is the Try at Home service free?
            </Box>
                <AccordionIcon />
            </AccordionButton>
         </h1>
            <AccordionPanel className={styles.panel} pb={4}>
            Yes, there are absolutely no charges for Try at Home.
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem className={styles.Accordbtn}>
        <h1>
              <AccordionButton>
              <Box as="span" flex="1" textAlign="left" className="boxes">
              Which products can I try?
              </Box>
                  <AccordionIcon />
              </AccordionButton>
        </h1>
            <AccordionPanel className={styles.panel} pb={4}>
            The products available for you are based on your location. Once you enter your pincode on the Try at Home page, you can select any of those designs.
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem className={styles.Accordbtn}>
            <h1>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                How many products can I try?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h1>
            <AccordionPanel className={styles.panel} pb={4}>
            You can select up to 5 products for Try at Home. If you would like to select a few more designs to try, please contact us on 1800-102-0103 (Toll Free), and we will help you with it
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem className={styles.Accordbtn}>
            <h1>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                How will you send me the products for trial?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h1>
            <AccordionPanel className={styles.panel} pb={4}>
            Our Try at Home consultant will visit your location to show you the designs, at a time and place that is convenient to you.
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem className={styles.Accordbtn}>
            <h1>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                Can I request for a Try at Home at my office?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h1>
            <AccordionPanel className={styles.panel} pb={4}>
            Absolutely! You can request for the appointment to take place at your office, or any other indoor location.
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem className={styles.Accordbtn}>
            <h1>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                What if the date or time slot convenient to me is not available?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h1>
            <AccordionPanel className={styles.panel} pb={4}>
            In such cases, we request you to contact us on 1800-102-0103 (Toll Free), and we will try to arrange the appointment as per your convenience.
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem className={styles.Accordbtn}>
            <h1>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                After trying on the products at home, can I place the order immediately?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h1>
            <AccordionPanel className={styles.panel} pb={4}>
            Yes, if you would like to purchase any of the designs you tried, you can place an order on the spot with our Try at Home consultant.
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem className={styles.Accordbtn}>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                Are all the jewellery sent for the Try at Home appointment made of real gold?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel className={styles.panel} pb={4}>
            Yes, the jewellery we send to your home for trial is crafted with real gold and diamonds. If you place an order after the trial, you will receive the certificate of authenticity too.
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem className={styles.Accordbtn}>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                What are the measures CaratLane is taking to ensure the Try at Home consultants are healthy and safe?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel className={styles.panel} pb={4}>
            - Our jewellery consultants use mask, gloves & sanitisers
- We monitor & record the temperature of all our consultants every day via thermal screening
- Every consultant uses the Aarogya Setu App to ensure they are healthy, and they have a limited number of appointments per day
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem className={styles.Accordbtn}>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                What are the safety measures taken during the Try at Home appointments?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel className={styles.panel} pb={4}>
            - All our jewellery is sanitised with alcohol swabs before and after the appointment
            <br />
            - We sanitise our bag, jewellery kit, mirrors, ring sizer, bangle sizer, iPad, and everything else we bring, to ensure your safety
            <br />
            - For appointments in containment zones, we will first double-check with the customer if the entry is allowed and if it's a non-infected zone
            <br />
            - Proper social distancing during the appointment is practised, and we also bring a new mask for the customer to wear
            <br />
            Please note: We may need to check the status of the customer's health on the Aarogya Setu App.
            </AccordionPanel>
        </AccordionItem>

    </Accordion>
        </div>
         </div>
      
        </div>
    )
}
export default Freetryathome
