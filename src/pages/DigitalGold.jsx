import React from 'react';
import  styles from "./DigiGold.module.css";
import { Image } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
// import { HashLink } from 'react-router-hash-link';

import { Accordion,AccordionItem,AccordionButton,AccordionPanel,AccordionIcon,Box} from '@chakra-ui/react'

export const DigitalGold=()=>{
    return (
        <div className={styles.container}>
            <div className={styles.main100}>
            <div>

            <div className={styles.banner__container}>
                <Image src="https://banner.caratlane.com/live-images/5a293fdafd4f4ee3be79c6125e3d73d7.jpg" alt='digital banner' className={styles.digitalBanner}/>
                <div className ={styles.text}>
                <div className={styles.text_container}>
                    <div>
                       <p className={styles.para} >Here is an easier way of buying pure 24kt gold</p>
                       <p className={styles.para1} >Buy CaratLane DigiGld online to save money, grow your wealth, and convert your gold into beautiful jewellery—whenever you want it. Guaranteed, no-hassles buyback.</p>
                       
                    
                    <div className={styles.button__div}>
                        <div>
                        <button className={styles.b1}>Buy DigiGld Now</button>
                        </div>
                        <div>
                        <a href="#next"className
                        ={styles.anch}>Learn more <ChevronDownIcon/></a>
                        
                        </div>
                        
                    </div>
                </div>
            <div></div>
            </div>
            </div>
            </div>
            </div>
            </div>
            
            
            <div className={styles.dg1} id = "next">
                <div className={styles.dg2}>
                    <p>Know More</p>
                    <h1>Invest in a high-payoff digital gold. <br /> Buy, sell,  or  redeem your Tanishq <br /> DiGiGold in exchange for  beautiful <br /> jewellery.</h1>
                    <div className={styles.button__div}>
                        <button className={styles.button__play}>Buy DiGiGold</button>

                    </div>
                    {/* <h3>You don’t have to wait till the 6th month to redeem. Refer to the calculator below to feel the joy sooner!</h3> */}
                </div>
                <div className={styles.dg22}>
                    <div className={styles.dg22__inner}>
                        <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG9LcGU3435CverNYvPDS0v1ub__gadsxOPCXz7Xn69rnUkxcD" alt="" />
                        </div>
                        <div>
                            <h2><b>Unparalleled convenience</b></h2>
                            <p>Buy in-store or online 24x7. Purchase gold online or offline through one of our partner jewellery stores.</p>
                        </div>
                    </div>
                    <div className={styles.dg22__inner}>
                        <div className={styles.hand}>
                            <img src="data:image/webp;base64,UklGRoIDAABXRUJQVlA4IHYDAACwFACdASptAGQAPt1iqVCopSOiqxD7gRAbiWMA0psZ5K65R5PfQ9B+3Y59LTgN6QwEizvjF7c7pTKdrI2jTAfp++KHd7w7CmQvXNT+MQXT+NxXBQn8Jexul6gjXigfLVyk24jZlpYfk0JiWQYj+lHJXsy5GXH2OL7o2lCBchAHgYCqsimwIXSebU9chJBTWpm0dLkl1XG4BD/I3sRBv4zIm8tAefs7mNS3rqjsCgAA/uPtJPBZjCSz+CVbeADddaOb8k29t6DeUWLxoLkFedvT4s0gdWZ/2HwQXWQoFKWqdMaAohi/ZlYUAB1BgQkzsWgfH46QFcJHkWYpUb6SCx+Fl/0GccS61BuAR9HG6pjdyLh+ewfLo0lVMVcEebuBWtHXwvpwk/mBBjoqnPtUZwIksRB2+v1V+u7y8tnMoO79lKaAB4KRh6v8R2dWaE2tdNAuFvMjqp39evbsLV52BpzIsw0nJR0DelF6HdjoZKQ5Dkuyq25p4NNszjLZsBd44Iu0p/kxLBn7vh3p3g6mhaBngJ4XRkthcVr7tVTGYsMc8t2k5Mhp02Bl7aRZfECTvnPyn8E27fl2n+mveRW/30O/NKn1PrM7qLF0utHhawjLMFpCpOPlONI7+RlZpQv43uZtNFnqOZgI1hE2tE0luVYbsiygorXI16JLIBY8CbCP03bsVfCB/yMcW/GpVxR3IFdog2q1qZQ9vQaH/lnoX2B5NkqBTDo7qZ7r0LDzuxgjMIi+hq/GHhlGuXsNSnRzIHcuhB0S20WKGWtYcOLtp97aWAwxnPBy5rBy7cG5zV/WgtFjvSotJQaUvvezp0wGnsQ5O26EFx6qy79/7wEEaLAR9gGTGJx65u/iqXfJFRVAW58TPatliaSUntlorxlR2ntEJFkl1+NhQCpedWhh+5wbtT+J0oDcne7SDgqjq/mOzzieb/dcEfh+IVQ1VlbwOTqJbX9z6VLIv7yVpjix4bWlbaESR9Q0w9VRpLiFjZF+mUWwlL51eH9czS5cNRDZbt+d/8GAZXNWLqsaKL0LbP0kXJhn3JqVOHoGYaOhLchJL9z7+Ztjvt/QVgyiMr1gp+xWojU1y4dYuuv8G4cFJcRcg6wsjuLNEcd5YzbkAYCwOrOd7rp8HIgQD+3ZyTrFhpm17GTv11hgl9Vjnq25U50YFwAAAAAA"alt="" />
                        </div>
                        <div>
                            <br/>
                            <h2><b>What you buy is what you get</b></h2>
                            <p>No carrying cost or hidden charges. Every gram of Tanishq DiGiGold you buy online is backed by real gold deposits worth the same.</p>
                        </div>
                    </div>
                    <div className={styles.dg22__inner}>
                        <div>
                            <img src="data:image/webp;base64,UklGRroDAABXRUJQVlA4IK4DAADQGQCdASqHALEAPt1usFMopiUioPqp+RAbiWdu3V+nQHE/6JxArkvoc25PPKaY9/OP9V1WP/d9oT/Mv2N0J2HyrAgZoUSQJIUwAEkKX/7dC9JfUuWkmTTO81/Pcn4Gvb+Jw3ocLPt5CvdDghVexUHeIvUCiM9z5rd5tIVBLsdFVGczFIqjQ2AnVlDBb8epIZr7gjZRnP5YV1fRn/Vcr5ztawkcG7ykVFgSrSISYGuUdiGsPSAfSG4tEziDZsEywPyBOR5eUxq0Qf1YtemaSFMABKs/YWySAAD+8/UAAFjQ9KP5HvEGYTi1dziZdN0fmkKwvt+CRk5HtpOJkvnlpi9cRnjD8/W5ldaWvfz6GMykZMBff2Cm/EL+bOLIi4OwaB4LoLIt95+MQIvQ0UgqZJ3AXQQvWWHT8ct1SIV59KX1wCi3rTLsYOE2BSNz/o5PnZodfqWWNYLFwKvD28MOoTysmZoZthop1BBTipA0WVQgZ3psD1GJ15QsTamDv92gUmSxUWAiyO6EjEtbEoMaspNrHgUjIs+D2DohEOYq4YjuU3XhAdkENpXOK4eGOfjSxXQ6V/5k0nRG8y4BVk0C7dO4Snb1OEeFcYiHbKyJaR083K8tPuSS5fZcF4m37S0+Qoa+StwHNLwwW1n9m5xNB4+ozIztFqA2Ibk80J+o0ZULn7qK7PZsp0xoWqVkIIUC94afXN6bjn41vQiGmHdTquvFW7qCPIo4NVhxER+QnZutYFOJNGWPBFBkCja+1kcoIMAY+Y3FLB9p5wnkcnWARE0qoX8JMjhYgn6GrNTfwJzo41djiJ846q2KDAAMncxPhdhWRuXjbJqfCJPK7Ju5Lf9o0DGTwD4lQz++sfoqm8oY1NT5m43IEDS8hwHuCvmstKsCjLXakBRB73txuuahO5cSCUtu5FZYx009LjtI9lGTVmOgf3pNJ6ZC4nsSM2y6nWIZ4S9W359BP4ol1VKZcgwSRLBq+r0aw5OLQIfpbJPwkYXixnmrtMSkWDBjcr0jsfFW7GB8d6kXRIcQviswRvCfUJPHi98/MWgeQRSSg18DOOuoGa6ggqaGLt90BBibCrfbhqyv1/RQkBxsKAXIYSSnIE2jcGe3qrW9qTsGH4lByPmEIWP775Gws/A3cNK0L3NoRfNcRASllig0Z0CCLLm3JYV41keHc2Fb+VrjnHacVza8FlV7QaF3q5Vb6A9BPRlEgEkhgZyFAa92ElH4POvDy9R0gFdJiBoBAAAAAAA=" alt="" />
                        </div>
                        <div>
                            <h2><b>100% guaranteed buyback</b></h2>
                            <p>Redeem your Tanishq DiGiGold balance across our 450+ online stores and physical outlets—CaratLane, Mia, and Tanishq.</p>
                        </div>
                    </div>

                </div>
            </div>

            
            

            <div className={styles.dg3}>
                <h3>redeem</h3>

                <div className={styles.dg4}>
                    <h2>DiGiGold to jewellery, in a <br /> blink!</h2>
                    <p>You can redeem Tanishq DiGiGold online or <br /> offline through one of our many jewellery <br /> partner stores across India.</p>
                </div>
                <div className={styles.sectionimage}>
                    <div className={styles.dg3ImgContainer}>
                        <Image className={styles.dg3Image} src="data:image/webp;base64,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"alt='logo' />
                        <Image className={styles.dg3Imagearrow} src="data:image/webp;base64,UklGRsQAAABXRUJQVlA4ILgAAABQCACdASqCAFYAPt1stFOopaUiodVYyRAbiWdu3V+Y//gHSTsnZOydk7FvtI7VcN15zTf0D5QA9R4KQa6wYSFoGOe7dlYYYwxhi6AA/vGwA7gHLiEPbWxa2EdaQrtNl8EIHMBuIE8nTNVftEqACZEDUIZtAbEGGJmC3UZMGa79uJeU67yxKME4hNko6SXLMEWVsaR/u3a6Tbi0prPpTDinHBYO4ZUeyLbcjskDLcEsQJ5WyJtwgAAA" alt='logo' />
                        <Image className={styles.dg3Image} src="data:image/webp;base64,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" alt='logo' />
                        <Image className={styles.dg3Imagearrow} src="data:image/webp;base64,UklGRsQAAABXRUJQVlA4ILgAAABQCACdASqCAFYAPt1stFOopaUiodVYyRAbiWdu3V+Y//gHSTsnZOydk7FvtI7VcN15zTf0D5QA9R4KQa6wYSFoGOe7dlYYYwxhi6AA/vGwA7gHLiEPbWxa2EdaQrtNl8EIHMBuIE8nTNVftEqACZEDUIZtAbEGGJmC3UZMGa79uJeU67yxKME4hNko6SXLMEWVsaR/u3a6Tbi0prPpTDinHBYO4ZUeyLbcjskDLcEsQJ5WyJtwgAAA" alt='logo' />
                        <Image className={styles.dg3Image} src="data:image/webp;base64,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" alt='logo' />
                        <Image className={styles.dg3Image} src="data:image/webp;base64,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" alt='logo' />
                    </div>
                </div>
            </div>

            <div className={styles.queryConatainer}>
                <div>
                    <p className={styles.para23}>Got questions? We have all the answers!</p>
                    <h1 className={styles.header}>If you have any questions regarding Tanishq DiGiGold, give us your phone number and we will call you back to answer your questions.</h1>
                </div>
                <div></div>
                <div className={styles.dg5Container}>
                    <div className={styles.dg5}>
                        <Image className={styles.callImag} src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTHB-5cxhpdH1Sh4gxgwjKGlUe6UpFnt1beAVi4DAxpTQ_SbZKm" alt='logo' />
                        <span>At Your Service. Always.</span>
                        <p>Mobile Number</p>
                        <div className={styles.one}>
                        <input spellcheck="false" className={styles.two}placeholder="" type="number" name="mobile" maxlength="10" value=""/>
                        </div>
                        
                        <button className={styles.requestBtns}>Request Call Back</button>
                    </div>
                </div>
            </div>

            
            <div className={styles.N1}><h1 className={styles.gent}>General</h1></div>
            <div className={styles.Accordian_options} >
                
                <Accordion allowToggle>
                  
                    <AccordionItem className={styles.AccordianBtn}>
                        <h2 >
                            <AccordionButton  className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    What is digital gold?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton >
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            Digital Gold is an organised and transparent method of buying 24-carat gold in compliance with all applicable laws and regulations.
                            Digital Gold is neither a financial product nor a deposit but a method of purchasing gold for your personal needs.
                            Digital Gold gives the flexibility for customers to accumulate gold in any denomination, say as low as Rs. 10.
                            Physical gold will be bought by service providers and stored in very safe vaults for the customer. Customers need not go through the hassle of storing and securing the gold.
                            At the same time, customers have the flexibility to sell the gold at any time, convert to physical gold and ask for delivery or exchange digital gold for physical jewellery at a Tanishq/CaratLane website or store.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    What is Tanishq Digital Gold?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            Tanishq Digital Gold is a service offered by Titan group of companies (Tanishq, Caratlane, Mia) in Partnership with SafeGold to enable customers to accumulate digital gold, sell at any time, or exchange for physical Jewellery at Tanishq/Mia/Caratlane outlets.
                            SafeGold takes care of selling gold to the customers, storing, and buyback from customers, while Titan companies provide a seamless experience for customers to buy any jewellery from its participant brands through the sale proceeds of customers' gold balance.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    Why should I buy Tanishq Digital Gold?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            Tanishq Digital Gold has the Tata Seal of Trust and guarantees purity. Our digital gold is easily redeemable for Jewellery anytime, across any of our jewellery brands, which includes Tanishq, Caratlane, and Mia.
                            We offer the flexibility of redemption across all our 450+ physical outlets and online stores as well. Customers have the option to choose from our unique and exclusive 20000+ designs and purchase using the accumulated Tanishq Digital Gold value.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    How to buy Tanishq Digital Gold?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            Gold can be accumulated under the Tanishq Digital Gold Program by buying through:
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    Where will the Digital Gold be stored after I buy it?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            The Digital Gold purchased on your behalf is stored with Brink's the leading safe keeper of precious metals across the world.
                            The gold is insured, both for storage and transit, when being delivered to you. Further, IDBI Trusteeship has a charge on all gold stored in the vault in your favour.
                            This ensures that your gold is protected at all times regardless of any external events.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    What is the purity of gold bought under Tanishq Digital Gold?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            Tanishq Digital Gold offers 24-karat gold of 995 fineness (99.5% pure) or higher.
                            SafeGold, on behalf of Tanishq Digital Gold, sources LBMA “good delivery” bars from trusted sources for the digital gold offered to you.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    Why are the Tanishq Digital Gold rates different from Tanishq Jewellery gold rates?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            Tanishq Digital Gold is in bullion form and is safely stored in a central vault.
                            There is no movement for this gold. But for jewellery the gold has to travel between multiple entities to get the product manufactured.
                            The logistics costs incurred by the jewellery gold are substantially different from the gold stored in the central vault. Hence, the jewellery gold rate will always be higher than the digital gold.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    I have some other queries about my Tanishq Digital Gold Account. Who can I get in touch with?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            You can write to contactus@caratlane.com or call us at +91-44-42935000 or WhatsApp at +91 69000 86000
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    Is my Tanishq Digital Gold kept in safe custody?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            Yes. The gold purchased on your behalf is stored with Brink's, the leading safe keeper of precious metals across the world.
                            The gold is insured, both for storage and transit when being delivered to you. Further, IDBI Trusteeship has a charge on all gold stored in the vault in your favour.
                            This ensures that your gold is protected at all times regardless of any external events.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    Is the Physical Vault Insured?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            Yes. The secure storage provider (Brink's) has a comprehensive, global insurance policy that includes the insurance cover on your gold stored in their vaults.
                            In addition, SafeGold has an additional insurance policy to cover gold in transit.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    What is the role of the “Security Trustee”?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            Tanishq Digital Gold is powered by SafeGold, which has entered into a relationship with IDBI Trusteeship Services Limited to act as a Security Trustee for all digital gold customers.
                            The Security Trustee is entitled to act on your behalf and ensure that your interests are protected.
                            The Security Trustee will have a charge on the gold associated with accumulations held by you.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    What will happen to the gold associated with accumulations in my account, in the unlikely event of the SafeGold going into liquidation?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            The gold associated with the accumulations in your account is separate from the other assets of the SafeGold.
                            IDBI Trusteeship Services Limited, an independent trustee, acts for and on your behalf.
                            The gold purchased by the Company associated with the accumulations in your accounts is held with the Custodian.
                            When you ask for delivery, the requisite quantity of gold will be removed from the Custodian and delivered to you through a reputed courier service.
                            Since the Security Trustee has a charge over the gold, any unlikely adverse event happening to the company will not affect the gold associated with the accumulations in your account.
                            Further, the title of the gold clearly rests with you and the physical gold stored with the Custodian on account of SafeGold customers is not an asset of SafeGold in any way.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    Is there an automatic saving plan for Tanishq Digital Gold?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            No, we don’t offer this feature now. But will notify you if we launch in the future.
                            <br />
                            <br />
                            Please note: We may need to check the status of the customer's health on the Aarogya Setu App.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>

            <h1 className={styles.buy}>Buy</h1>
            <div className={styles.Accordian_options}>
                
                <Accordion allowToggle>
                  
                    <AccordionItem className={styles.AccordianBtn}>
                        <h2 >
                            <AccordionButton  className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    What is digital gold?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton >
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            Digital Gold is an organised and transparent method of buying 24-carat gold in compliance with all applicable laws and regulations.
                            Digital Gold is neither a financial product nor a deposit but a method of purchasing gold for your personal needs.
                            Digital Gold gives the flexibility for customers to accumulate gold in any denomination, say as low as Rs. 10.
                            Physical gold will be bought by service providers and stored in very safe vaults for the customer. Customers need not go through the hassle of storing and securing the gold.
                            At the same time, customers have the flexibility to sell the gold at any time, convert to physical gold and ask for delivery or exchange digital gold for physical jewellery at a Tanishq/CaratLane website or store.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    What is Tanishq Digital Gold?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            Tanishq Digital Gold is a service offered by Titan group of companies (Tanishq, Caratlane, Mia) in Partnership with SafeGold to enable customers to accumulate digital gold, sell at any time, or exchange for physical Jewellery at Tanishq/Mia/Caratlane outlets.
                            SafeGold takes care of selling gold to the customers, storing, and buyback from customers, while Titan companies provide a seamless experience for customers to buy any jewellery from its participant brands through the sale proceeds of customers' gold balance.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    Why should I buy Tanishq Digital Gold?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            Tanishq Digital Gold has the Tata Seal of Trust and guarantees purity. Our digital gold is easily redeemable for Jewellery anytime, across any of our jewellery brands, which includes Tanishq, Caratlane, and Mia.
                            We offer the flexibility of redemption across all our 450+ physical outlets and online stores as well. Customers have the option to choose from our unique and exclusive 20000+ designs and purchase using the accumulated Tanishq Digital Gold value.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    How to buy Tanishq Digital Gold?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            Gold can be accumulated under the Tanishq Digital Gold Program by buying through:
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    Where will the Digital Gold be stored after I buy it?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            The Digital Gold purchased on your behalf is stored with Brink's the leading safe keeper of precious metals across the world.
                            The gold is insured, both for storage and transit, when being delivered to you. Further, IDBI Trusteeship has a charge on all gold stored in the vault in your favour.
                            This ensures that your gold is protected at all times regardless of any external events.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    What is the purity of gold bought under Tanishq Digital Gold?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            Tanishq Digital Gold offers 24-karat gold of 995 fineness (99.5% pure) or higher.
                            SafeGold, on behalf of Tanishq Digital Gold, sources LBMA “good delivery” bars from trusted sources for the digital gold offered to you.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    Why are the Tanishq Digital Gold rates different from Tanishq Jewellery gold rates?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            Tanishq Digital Gold is in bullion form and is safely stored in a central vault.
                            There is no movement for this gold. But for jewellery the gold has to travel between multiple entities to get the product manufactured.
                            The logistics costs incurred by the jewellery gold are substantially different from the gold stored in the central vault. Hence, the jewellery gold rate will always be higher than the digital gold.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    I have some other queries about my Tanishq Digital Gold Account. Who can I get in touch with?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            You can write to contactus@caratlane.com or call us at +91-44-42935000 or WhatsApp at +91 69000 86000
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    Is my Tanishq Digital Gold kept in safe custody?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            Yes. The gold purchased on your behalf is stored with Brink's, the leading safe keeper of precious metals across the world.
                            The gold is insured, both for storage and transit when being delivered to you. Further, IDBI Trusteeship has a charge on all gold stored in the vault in your favour.
                            This ensures that your gold is protected at all times regardless of any external events.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    Is the Physical Vault Insured?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            Yes. The secure storage provider (Brink's) has a comprehensive, global insurance policy that includes the insurance cover on your gold stored in their vaults.
                            In addition, SafeGold has an additional insurance policy to cover gold in transit.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    What is the role of the “Security Trustee”?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            Tanishq Digital Gold is powered by SafeGold, which has entered into a relationship with IDBI Trusteeship Services Limited to act as a Security Trustee for all digital gold customers.
                            The Security Trustee is entitled to act on your behalf and ensure that your interests are protected.
                            The Security Trustee will have a charge on the gold associated with accumulations held by you.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    What will happen to the gold associated with accumulations in my account, in the unlikely event of the SafeGold going into liquidation?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            The gold associated with the accumulations in your account is separate from the other assets of the SafeGold.
                            IDBI Trusteeship Services Limited, an independent trustee, acts for and on your behalf.
                            The gold purchased by the Company associated with the accumulations in your accounts is held with the Custodian.
                            When you ask for delivery, the requisite quantity of gold will be removed from the Custodian and delivered to you through a reputed courier service.
                            Since the Security Trustee has a charge over the gold, any unlikely adverse event happening to the company will not affect the gold associated with the accumulations in your account.
                            Further, the title of the gold clearly rests with you and the physical gold stored with the Custodian on account of SafeGold customers is not an asset of SafeGold in any way.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    Is there an automatic saving plan for Tanishq Digital Gold?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            No, we don’t offer this feature now. But will notify you if we launch in the future.
                            <br />
                            <br />
                            Please note: We may need to check the status of the customer's health on the Aarogya Setu App.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>

            <h1 className={styles.sell}>Sell</h1>
            <div className={styles.Accordian_options}>
                
                <Accordion allowToggle>
                  
                    <AccordionItem className={styles.AccordianBtn}>
                        <h2 >
                            <AccordionButton  className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                How do I sell my gold?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton >
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                        You can sell gold by clicking on the sell option on the top after logging in to your account.
Tanishq Digital Gold provides a live sell price.
You can choose to sell any amount starting with a minimum of Rs. 10 to a maximum of the amount of gold that you own.
You can choose the bank account (previously saved) or enter a new bank account to get the money.
The money will be credited to your bank account.
For security reasons, newly added bank accounts will be verified by doing a penny drop bank verification—i.e., a small amount will be credited to your bank account for verification purposes.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                Is there any lock-in period to sell gold?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                        There is no lock-in period to sell gold. However, same-day selling is restricted, so you can sell the gold 24 hours after its purchase.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                How long will it take to get the money in my bank account?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                        The money will be transferred instantly within the next two hours. However, it can take a maximum of 48 hours in case of delays.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                Why is the buy and sell price different on the same day?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                        The buy and sell price difference due to a 3% GST and costs such as bank charges, payment costs, technology costs, and hedging costs that SafeGold undertakes.
                        </AccordionPanel>
                    </AccordionItem>


                </Accordion>
            </div>
            
        </div>
    )
}
