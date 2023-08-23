import styles from "./Gift.module.css";
// import { Earrings } from "./Earrings";
import { useNavigate } from "react-router-dom";
export const Gifting = () => {
    const navigate = useNavigate();
    const anniversary = () => {
    navigate("/anniversary");
  }
  const birthday= () => {
    navigate("/birthday");
  }
  const Personalised= () => {
    navigate("/personalised");
  }
  const price= () => {
    navigate("/price");
  }
    return(
        <div className={styles.main100}>
            <div className={styles.one}>
                <div className={styles.two}>
                    <button className={styles.b1}>
                        {/* <span className="sp"><b>BACK TO CATEGORIES</b></span> */}
                    </button>
                </div>
                <div className={styles.three}>
                    <div className={styles.six}>
                    <button className = {styles.an2} onClick={() => price()}>
                        <img src="https://banner.caratlane.com/live-images/9900271d1c4c41a884cbe8b5b0e9992b.jpg" alt="" srcset="" className={styles.img1} />
                        <div className={styles.seven}></div>
                        </button>
                    </div>
                    <div className={styles.six}>
                    <button className = {styles.an2} onClick={() => Personalised()}>
                            <img src="https://banner.caratlane.com/live-images/f2980d24fe424b8db0c3f67fc46c59f0.jpg" alt="" srcset="" className={styles.img2}/>
                            <div className={styles.seven}></div>
                            </button>
                    </div>
                    <div className={styles.six}>
                    <button className = {styles.an2} onClick={() => birthday()}>
                            <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/04-APR/HP-Banner/DropDown/01/Birthday_gift.jpg" alt="" srcset="" className={styles.img2}/>
                            <div className={styles.seven}></div>
                            </button> 
                    </div>
                     <div className={styles.six}>
                        <button className= {styles.an2} onClick={() => Personalised()} >
                            <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/HPBanner/DropDown/FirstSalary.jpg" alt="" srcset="" className={styles.img2}/>
                            <div  className={styles.seven}></div>
                        </button>
                    </div> 
                </div>
                <div className={styles.eight}>
                    <div className={styles.nine} type="list_block">
                        <h3 className={styles.head1}><b>GIFTS</b></h3>
                        <ul className={styles.unl1}>
                            <li className={styles.list1}>
                            <button className={styles.an4}
                             onClick={() => birthday()}>Birthday Gifts</button>
                            </li>
                            <li className={styles.list1}>
                                <button className={styles.an4}onClick={() => anniversary()}>Anniversary Gifts</button>
                            </li>
                            <li className={styles.list1}>
                            <button className={styles.an4}onClick={() => anniversary()}>Valentine's Gifts</button>
                            </li>
                            <li className={styles.list1}>
                            <button onClick={() => Personalised()}>Personalised Gifts</button>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.nine} type="list_block">
                        <h3 className={styles.head1}><b>SHOP BY</b></h3>
                        <ul className={styles.unl1}>
                            <li className={styles.list1}>
                                <a className={styles.an4} href=""><h4 className={styles.head2}>For Kids</h4></a>
                            </li>
                            <li className={styles.list1}>
                                <a className={styles.an4} href=""><h4 className={styles.head2}>For Sister</h4></a>
                            </li>
                            <li className={styles.list1}>
                                <a className={styles.an4} href=""><h4 className={styles.head2}>For Wife</h4></a>
                            </li>
                            <li className={styles.list1}>
                                <a className={styles.an4} href=""><h4 className={styles.head2}>For Mom</h4></a>
                            </li>
                            <li className={styles.list1}>
                                <a className={styles.an4} href=""><h4 className={styles.head2}>International Gifting</h4></a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.nine} type="list_block">
                        <h3 className={styles.head1}></h3>
                        <ul className={styles.unl1}>
                            <li className={styles.list1}>
                                <a className={styles.an4} href=""><h4 className="head2"><strong>SILVER GIFTS BY SHAYA</strong></h4></a>
                            </li>
                            <li className={styles.list1}>
                                <a className={styles.an4} href=""><h4 className="head2"><strong>GIFT CARD</strong></h4></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.two}>
                    <button className={styles.b1}>
                        {/* <span className={styles.sp}><b>BACK TO CATEGORIES</b></span> */}
                    </button>
                </div>
            </div>
        </div>

    )

    
}
