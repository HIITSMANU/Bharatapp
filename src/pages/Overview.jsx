import { Text ,Link,Image, Box, background, Radio,IconButton} from '@chakra-ui/react'
import { InfoIcon } from '@chakra-ui/icons'; 
import styles from "./Overview.module.css";
import Calender from "../Images/Calender.png"
import Gift from "../Images/Gift.png"
import pay from "../Images/pay.png"
import icon from  "../Images/i.png"
import call2 from "../Images/call.png"
import {
  Accordion,Button, HStack,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { useState } from 'react';
export const Overview=()=>{
    const [state,setstate]=useState(false);
    return(
        <div className={styles.pop}>
          <div className={styles.nav}>
    <Box paddingLeft={28} paddingTop={2} >
    <Link >
        <img src="https://assets.cltstatic.com/images/responsive/pop-logo.png" alt="logo" />
    </Link>
    </Box>
    <Box>
    <HStack spacing={10} fontSize={"xs"}>
    <div className={styles.Link}><Link href="#text">Overview</Link></div>
    <div className={styles.Link}><Link href="#next">How It Works</Link></div>
    <div className={styles.Link}><Link href="#calc">Calculate Your PoP!</Link></div>
    <div className={styles.Link}><Link href="#why1">Why Bharat Jewels PoP!</Link></div>
    <Button className={styles.buttonx}>Plan Now</Button></HStack></Box>
    </div>
        <div style={{background:"rgb(35, 21, 53);"}}>
            <div className="text" >
            Introducing Bharat Jewels PoP! A hassle-free Plan Of Purchase to buy jewellery quickly, without burning a hole in your pocket.
            <a href="#next"style={{color:"#de57e5" }}> Learn More </a>
            </div>
            <Box>
                <Image src="https://banner.caratlane.com/live-images/9092e728b0544264bb618317c1285b91.jpg" width={'100'}>
                </Image>
            </Box>
            <div className={styles.box}>
            <div className={styles.para}>
                    <p>  
                        Plan Of Purchase!
                        <br />
                        Own Your Favourite Design In 6 Easy Instalments.
                        <br />
                    </p>
            </div>
            <div className={styles.bt}>
            <button className={styles.buttn}>Plan Now</button>
            <a href="#next">Learn More</a></div>
            </div>
        </div>
        <div className={styles.howitworks}>
        <div className={styles.howit}>
      <p>How It Works</p>
      <h1>
      It's such a hassle-free process that the only thing you need to worry about is choosing the outfit you'll be wearing with your favourite jewellery.
      </h1>
      <div>
        <button className={styles.planbt}>Plan Now</button>
      </div>
      <p className={styles.redeem}>
        You don't have to wait till the 6th month to redeem. Refer to the
        calculator below to feel the joy sooner!
      </p>
    </div>
    <div className={styles.how2}>
          <div className={styles.img1}>
            <div >
              <img className={styles.icon} src={Calender} alt="Calender" />
            </div>
            <div className={styles.tag}>
              <h3>Pay Monthly</h3>
              <p>
              Take easy steps by choosing a fixed plan amount to keep aside with CaratLane every month.
              </p>
            </div>
          </div>
          <div className={styles.img1}>
            <div>
            <img className={styles.icon} src={pay} alt="Pay" />
            </div>
            <div className={styles.tag}>
              <h3>Our gift* to you</h3>
              <p>
              At the end of 6 months, CaratLane will issue a gift* value equivalent to 30% of your first month's plan amount.
              </p>
            </div>
          </div>
          <div className={styles.img1}>
            <div>
              <img className={styles.icon} src={Gift} alt="Gift" />
            </div>
            <div className={styles.tag}>
              <h3>Purchase</h3>
              <p>
              You can redeem by purchasing jewellery of your choice, either at our stores or online.
              </p>
            </div>
          </div>
        </div>
        </div>
        <div className={styles.calc}>
        <div className={styles.howitworks}>
        <div className={styles.howit}>
          <p>Calculate PoP!</p>
          <h1>
          A plan for you to keep adding to your jewellery collection every 6 months! Here’s how you can calculate your purchase better. Enter the amount you want to set aside with us for 6 months to see the value of our gift*.
          </h1>
          <div>
            <button className={styles.planbt}>Plan Now</button>
          </div>
          <div className={styles.gestsec}>
          <div className={styles.gest}>
            <h1><b>Our Gesture</b></h1>
            <p>If you want to feel the joy sooner, redeem before the 6th month. Here’s how:</p>
          </div>
          <ul className={styles.mos}>
            <li>
              4-5 Months
              <IconButton icon={<InfoIcon/>} bg="rgb(228, 219, 255)" onClick={()=>setstate(!state)}></IconButton></li>
                {/* <img src={icon} alt="" className='install'/> */}
                {state &&
                <span className={styles.content}><p>If you want to redeem your plan within 4-5 months, CaratLane will give you a gift Voucher* equivalent to 10% (if you redeem on the 4th month) & 20% (if you redeem on the 5th month) of your first month plan amount.</p></span>}
            </ul>
          </div>
          </div>
        <div className={styles.how2}>
          <div className={styles.label}>
            <label><label class={styles.amt}>Enter Any Amount </label><span>Min ₹1,000</span></label>
          </div>

          <div className={styles.inputbtn}>
            <div className={styles.input2}>
              <input
                spellCheck="false"
                name="Amount"
                className={styles.inp}
                placeholder="1000"
              />       <button
              className={styles.check}
            >
              check
            </button>
            </div>
     
          </div>
          <div>
            <p className={styles.cust}>Customers Usually Prefer</p>
            <div className={styles.prefer_btn}>
              <button disabled="true">₹10,000</button>
              <button disabled="true">₹20,000</button>
              <button disabled="true">₹30,000</button>
            </div>
          </div>
          <div className={styles.chartsec}>
          <div className={styles.chart}>
            <img src="https://banner.caratlane.com/live-images/bc845fab40734da19844c26daa4b820e.png" alt="chart" />
            <p>
              YOU PAY
              <br />
              <span><b>6,000</b></span>
            </p>
          </div>
          <div className={styles.get}>
          <p>
              YOU GET
              <br />
              <span><b>300</b></span>
            </p>
          </div>
          </div>
          <div>
            <div className={styles.price}>
              <Radio bg='rgb(228, 219, 255);
    display: inline-block;'>
              <h2> YOU PAY (6 months) </h2></Radio>
              <h2> 6,000</h2>
            </div>

            <div className={styles.price}>
              <Radio bg='linear-gradient(to right, rgb(222, 87, 229), rgb(136, 99, 251))'>
              <h2> YOU GET (30% of 1 month) </h2></Radio>
              <h2> 300</h2>
            </div>
          </div>

          <hr />
          <div className={styles.price}>
            <h2>
              Total Amount
              <br />
              <p>(Redeemable) </p>
            </h2>
            <h2> 6,300</h2>
          </div>
        </div>
      </div>
      </div>
      <div >
        <div className={styles.why1}>
        <div className={styles.banner}>
        <img src="https://banner.caratlane.com/live-images/210e79132db04bfdb30d349b28834876.jpg" alt="" />
        </div>
        <div className={styles.Why}>
        <div>
          <p>Why CaratLane PoP!</p>
        </div>
        <div>
          <h1 className={styles.whyh1}>
          In the true spirit of making fine jewellery accessible and affordable to all, we've introduced CaratLane PoP! The easiest way to keep adding to your jewellery collection.
          </h1>
        </div>
        <div>
          <button className={styles.planbt1}>Plan Now</button>
        </div>
      </div>
        </div>
        </div>
        <div className={styles.ques}>
        <div className={styles.howitworks}>
        <div className={styles.howit}>
          <p>Frequently Asked Questions</p>
          <h1>
            If it's still too good to be true, read through these questions to
            get a clearer picture. You can also drop in your number and we will
            get in touch regarding your PoP!
          </h1>
        </div>
        <div className={styles.call}>
          <div className={styles.call1}>
            <img className={styles.icon1} src={call2} alt="call" />
            <p className="p">At Your Service. Always.</p>
          </div>
          <div className={styles.num}>
            <p className={styles.label1}>Mobile Number </p>
            <div>
            <input className={styles.input3} type="number" name="mobile" value /></div>
            <button className={styles.planbtreq}>Request Call Back</button>
          </div>
        </div>
      </div>
      </div>
      <div className={styles.Acc}>
      <div className={styles.Accordian}>
        <h1>Generic</h1>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                  What is the minimum amount that I need to set aside every
                  month?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
              You can start your Plan of Purchase with a minimum amount of
              ₹1,000 every month.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                  What is the maximum amount limit of PoP!?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
              There is no maximum limit
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                  Is PoP applicable on all categories of products?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
              You can purchase any Diamond/Gemstone/Platinum/Plain Gold
              Jewellery/Shaya designs. But you can't purchase Gold coins, Loose
              Diamonds, Mounts, 22kt Jewellery, Gift Cards using PoP! balance.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                  Can I club two or more PoP! accounts with my PoP! account?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
              No, you are eligible to have only 1 active plan in your account.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
      <div className={styles.Accordian}>
        <h1>Enrolment</h1>
        <Accordion allowToggle>
          
            
            <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                  Can a nominee be eligible to redeem on behalf of the
                  enrollment person?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
              In the event of the death of the enrolling individual, the nominee
              gets that amount. The nominee has to submit the required documents
              to transfer the PoP! balance to the nominee
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                  Do I have to come to a store to redeem the PoP! Value?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
              You can redeem your PoP! balance anywhere online or in-store.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                  How long do I have to wait for the CaratLane gift*?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
              You need to wait for 30 days after your last instalment payment.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                  How can I pay my balance amount if I purchase more than my
                  PoP! account balance?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
              You can use any online payment mode (Debit card/Credit
              Card/Netbanking/UPI) to pay the balance while redeeming online or
              at the store. Additionally, cash can also be paid for the
              remaining balance.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                  Can I place an order for customized/ personalized design with
                  PoP account value?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
              Yes, you can.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                  What is the redemption window for my PoP! Balance?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
              Your redemption window opens 30 days after your last instalment
              payment, and it remains open for 3 months post that.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                  When can I redeem my PoP! plan?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
              Once the final instalment is paid, you will have to wait for 30
              days before you can redeem your PoP! amount. This redemption
              period continues for the next 3 months, in which you can redeem
              your balance.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>

      <div className={styles.Accordian}>
        <h1>Policy</h1>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                If I cancel the order, how will the CaratLane gift* be treated? 
                Will I get it in my account or is it lost?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
            In case of cancellations, PoP! Balance used will be credited back to your account, which you can use to place another order.
             This balance will remain in your account until the end of the redemption window. 
             We will refund your payments to your bank account if you do not make a CaratLane purchase with PoP! 
             balance (but you will not receive the CaratLane gift* value of 30%).
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                If I do a 15 day return, how will the CaratLane gift* value be treated? Will I get it in my account or is it lost?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
            In case of a 15 Day Return, the customer will not receive the CaratLane gift* value of 30%.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                If I do a 15 day exchange, how will the CaratLane gift* value be treated? Will I get it in my account or is it lost?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
            In the case of a 15 day exchange, the customer will be able to use PoP balance until the end of the redemption window.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                If I do an LTE on the product, will this amount be deducted as “discount recovery”?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
            No. PoP! Balance used in the invoice will be treated as Payment mode.
             So there won't be any deduction in the CaratLane gift* value given.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        </div>
        </div>
        <div className="vou">
        *Gift/Gift Voucher shall carry the meaning of discount vouchers provided by the Company for the monthly installments made by customer scheme under the PoP! and should not be construed as any other benefits and/or contribution by the company to the customers in this regard.
        </div>
      </div>
    )
}