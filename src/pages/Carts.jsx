import { useContext } from "react"
import {CartContext} from "../Context/CartContext"
import { CartCard } from "../Components/CartCard"
import { ProductCard } from "../Components/TProductCard"
// import styles from "../pages/Trial.module.css"
import styles from "./Cartsnew.module.css"
import {useNavigate} from "react-router-dom"
export const Carts = () =>{
  const navigate = useNavigate();
  function navi() {
    return navigate('/freetry');
  }
  const {Cart} = useContext(CartContext)
  console.log(Cart,"in carts");
  if(Cart.length==0){
    return (
      <div className={styles.trialmain}>
        <div className={styles.trial}>
          <h1>Trial Cart({Cart.length})</h1>
        </div>
      <div>
          <div className={styles.one}>
              <div className={styles.two}>
                  <div className={styles.three}>
                      <div className={styles.four}>
                          <div className={styles.five}>
                          <img src="https://assets.cltstatic.com/images/responsive/empty-trail-cart.gif"/>
                          </div>
                          <div className={styles.nothing}>
                              <div className={styles.six}>
                                  Nothing to Try at Home?
                              </div>
                              <div className={styles.seven}>
                              Let's do some retail therapy.
                              </div>
                          </div>
                          </div>
                          <div className={styles.eight}>
                          <a  target="_blank" rel="noopener noreferrer" className={styles.a}>
                              <button onClick={navi} className={styles.b}>5 Designs to try at home!</button>
                          </a>
                      </div>
                  </div>
                  <div className={styles.nine}>
                      <div className={styles.ten}>
                      <h4 className={styles.heading}>How does try at home work?</h4>
                      <div className={styles.eleven}>
                          <div className={styles.twelve}>
                               <video  playsInline  >
                              <source src="https://banner.caratlane.com/live-images/4a56af38790c43f0a86cb04baef2853d.mp4" type="video/mp4"></source>
                              </video> 
                              <botton className={styles.bottom}>Play/Pause
                              </botton>
                              <div className={styles.thirteen}>
                                  <p>Pick your favorite designs to try out at the comfort of your home for free! If you don’t like it, don’t buy it. Zero compulsion.</p>
                              </div>
                          </div>
                      </div>
                      <div className={styles.fourteen}>
                          </div>
                          <span className={styles.span1}>Trusted professionals <br/>and expert jewellery consultants</span>
                          <div className={styles.e}>
                              <div className={styles.f}>
                                  <div className={styles.g}>
                                      <span className={styles.span2}>2</span>
                                      <span className={styles.span2}>3</span>
                                      <span className={styles.span2}>4</span>
                                      <span className={styles.span2}>5</span>
                                      <span className={styles.span2}>6</span>
                                      <span className={styles.span2}>7</span>
                                      <span className={styles.span2}>8</span>
                                      <span className={styles.span2}>9</span>
                                      <span className={styles.span3}>0</span>
                                      <span className={styles.span4}>1</span>
                                  </div>
                                  <div className={styles.g}>
                                      <span className={styles.span2}>3</span>
                                      <span className={styles.span2}>4</span>
                                      <span className={styles.span2}>5</span>
                                      <span className={styles.span2}>6</span>
                                      <span className={styles.span2}>7</span>
                                      <span className={styles.span2}>8</span>
                                      <span className={styles.span2}>9</span>
                                      <span className={styles.span2}>0</span>
                                      <span className={styles.span3}>1</span>
                                      <span className={styles.span4}>2</span>
                                  </div>
                                  <div className={styles.g}>
                                      <span class={styles.span2}>7</span>
                                      <span class={styles.span2}>8</span>
                                      <span class={styles.span2}>9</span>
                                      <span class={styles.span2}>0</span>
                                      <span class={styles.span2}>1</span>
                                      <span class={styles.span2}>2</span>
                                      <span class={styles.span2}>3</span>
                                      <span class={styles.span2}>4</span>
                                      <span class={styles.span3}>5</span>
                                      <span class={styles.span4}>6</span>
                                  </div>
                                  <div className={styles.g}>
                                      <span className={styles.span2}>2</span>
                                      <span className={styles.span2}>3</span>
                                      <span className={styles.span2}>4</span>
                                      <span className={styles.span2}>5</span>
                                      <span className={styles.span2}>6</span>
                                      <span className={styles.span2}>7</span>
                                      <span className={styles.span2}>8</span>
                                      <span className={styles.span2}>9</span>
                                      <span className={styles.span3}>0</span>
                                      <span className={styles.span4}>1</span>
                                  </div>
                                  <div className={styles.g}>
                                      <span className={styles.span2}>9</span>
                                      <span className={styles.span2}>0</span>
                                      <span className={styles.span2}>1</span>
                                      <span className={styles.span2}>2</span>
                                      <span className={styles.span2}>3</span>
                                      <span className={styles.span2}>4</span>
                                      <span className={styles.span2}>5</span>
                                      <span className={styles.span2}>6</span>
                                      <span className={styles.span3}>7</span>
                                      <span className={styles.span4}>8</span>
                                  </div>
                                  <div className={styles.g}>
                                      <span className={styles.span2}>8</span>
                                      <span className={styles.span2}>9</span>
                                      <span className={styles.span2}>0</span>
                                      <span className={styles.span2}>1</span>
                                      <span className={styles.span2}>2</span>
                                      <span className={styles.span2}>3</span>
                                      <span className={styles.span2}>4</span>
                                      <span className={styles.span2}>5</span>
                                      <span className={styles.span3}>6</span>
                                      <span className={styles.span4}>7</span>
                                  </div>
                              </div>
                              <p>happy customers so far!</p>
                          </div>
                      </div>
                      {/* <h3 className={styles.h3}>Contact us for further assistance</h3>
                      <div className={styles.h}>
                          <a className={styles.Call}>
                              ::before
                              "Call"
                          </a>
                          <a className={styles.Chat}>
                              ::before
                              "Chat"
                          </a>
                          <a className={styles.Whatssap}>
                              ::before
                              "Whatsapp"
                          </a>
                      </div> */}
                      </div>
                  </div>

              </div>

          </div>

      </div>
      

  );
  }
  return (
    <div className={styles.main}>
        <div className={styles.trial}>
          <h1>Trial Cart({Cart.length})</h1>
        </div>
      <div>
          <div className={styles.one}>
              <div className={styles.two}>
              <div className={styles.card}>
                 <div style={{display:"grid"}}>
                        {Cart.map((el) => {
                          console.log(el,"in el");
                          
                          return <CartCard {...el} />;
                        })}
                      </div>
                 </div>
                  <div className={styles.nine}>
                      <div className={styles.ten}>
                      <h4 className={styles.heading}>How does try at home work?</h4>
                      <div className={styles.eleven}>
                          <div className={styles.twelve}>
                               <video  playsInline  >
                              <source src="https://banner.caratlane.com/live-images/4a56af38790c43f0a86cb04baef2853d.mp4" type="video/mp4"></source>
                              </video> 
                              <botton className={styles.bottom}>Play/Pause
                              </botton>
                              <div className={styles.thirteen}>
                                  <p>Pick your favorite designs to try out at the comfort of your home for free! If you don’t like it, don’t buy it. Zero compulsion.</p>
                              </div>
                          </div>
                      </div>
                      <div className={styles.fourteen}>
                          </div>
                          <span className={styles.span1}>Trusted professionals <br/>and expert jewellery consultants</span>
                          <div className={styles.e}>
                              <div className={styles.f}>
                                  <div className={styles.g}>
                                      <span className={styles.span2}>2</span>
                                      <span className={styles.span2}>3</span>
                                      <span className={styles.span2}>4</span>
                                      <span className={styles.span2}>5</span>
                                      <span className={styles.span2}>6</span>
                                      <span className={styles.span2}>7</span>
                                      <span className={styles.span2}>8</span>
                                      <span className={styles.span2}>9</span>
                                      <span className={styles.span3}>0</span>
                                      <span className={styles.span4}>1</span>
                                  </div>
                                  <div className={styles.g}>
                                      <span className={styles.span2}>3</span>
                                      <span className={styles.span2}>4</span>
                                      <span className={styles.span2}>5</span>
                                      <span className={styles.span2}>6</span>
                                      <span className={styles.span2}>7</span>
                                      <span className={styles.span2}>8</span>
                                      <span className={styles.span2}>9</span>
                                      <span className={styles.span2}>0</span>
                                      <span className={styles.span3}>1</span>
                                      <span className={styles.span4}>2</span>
                                  </div>
                                  <div className={styles.g}>
                                      <span class={styles.span2}>7</span>
                                      <span class={styles.span2}>8</span>
                                      <span class={styles.span2}>9</span>
                                      <span class={styles.span2}>0</span>
                                      <span class={styles.span2}>1</span>
                                      <span class={styles.span2}>2</span>
                                      <span class={styles.span2}>3</span>
                                      <span class={styles.span2}>4</span>
                                      <span class={styles.span3}>5</span>
                                      <span class={styles.span4}>6</span>
                                  </div>
                                  <div className={styles.g}>
                                      <span className={styles.span2}>2</span>
                                      <span className={styles.span2}>3</span>
                                      <span className={styles.span2}>4</span>
                                      <span className={styles.span2}>5</span>
                                      <span className={styles.span2}>6</span>
                                      <span className={styles.span2}>7</span>
                                      <span className={styles.span2}>8</span>
                                      <span className={styles.span2}>9</span>
                                      <span className={styles.span3}>0</span>
                                      <span className={styles.span4}>1</span>
                                  </div>
                                  <div className={styles.g}>
                                      <span className={styles.span2}>9</span>
                                      <span className={styles.span2}>0</span>
                                      <span className={styles.span2}>1</span>
                                      <span className={styles.span2}>2</span>
                                      <span className={styles.span2}>3</span>
                                      <span className={styles.span2}>4</span>
                                      <span className={styles.span2}>5</span>
                                      <span className={styles.span2}>6</span>
                                      <span className={styles.span3}>7</span>
                                      <span className={styles.span4}>8</span>
                                  </div>
                                  <div className={styles.g}>
                                      <span className={styles.span2}>8</span>
                                      <span className={styles.span2}>9</span>
                                      <span className={styles.span2}>0</span>
                                      <span className={styles.span2}>1</span>
                                      <span className={styles.span2}>2</span>
                                      <span className={styles.span2}>3</span>
                                      <span className={styles.span2}>4</span>
                                      <span className={styles.span2}>5</span>
                                      <span className={styles.span3}>6</span>
                                      <span className={styles.span4}>7</span>
                                  </div>
                              </div>
                              <p>happy customers so far!</p>
                          </div>
                      </div>
                      
                      </div>
                  </div>

              </div>

          </div>

      </div>
    

);
}