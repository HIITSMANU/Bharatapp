import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard.jsx";
import Sort from "../images/Sort.png"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import "./ProductCard.css";


export const Products = () => {
    const[setShowmore,showmore]=useState(false);
  const api = "http://localhost:3/products";

  const [fData, setFData] = useState([]);
  const [fData1, setFData1] = useState([]);

  const fetchData = async () => {
    let res = await fetch(api);
    let data1 = await res.json();
    setFData(data1);
    setFData1(data1);

  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
handleFilter();
  }, [fData]);
function handleFilter(){
    let newdata=fData1.filter((el)=>el.category ==="earrings");
    setFData1(newdata);
}
  return (
    <div>
        <div id="banner">
            <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/04-APR/AppBanner/Earring/01/Desktop_1920x560_toplisting.jpg" alt="" />
        </div>
        <div className="navdiv">
            <div className="navlist">
                <div className="head">
                <ul>
                    <li>
                        <a href="" style={{textDecoration:"none"}}>Earrings </a>
                        <span></span>
                        <a href="" style={{textDecoration:"underline"}} id="clear">Clear All</a>
                    </li>
                </ul>
                </div>
                <div className="navsmall">
                    <div>
                        <span id="all">All</span>
                    </div>
                    <div className="hovnav">
                        <span className="span">Try at Home</span>
                        <span className="hovspan1">Click here to see all designs available for Free Try at Home Service - Book an appointment to see designs at your home</span>
                    </div>
                    <div className="hovnav">
                        <span className="span">
                        Designs in Store
                        </span>
                        <span className="hovspan2">
                        Click to see designs available at any store. OR place your order online & pickup from the selected store on the same day
                        </span>
                    </div>
                    <div className="hovnav">
                        <span className="span">
                        Fast Delivery
                        </span>
                        <span className="hovspan3">
                        Designs that will reach you faster. Click to check designs ready for a Sure & Swift delivery.
                        </span>
                    </div>
                    <div> 
                        <span className="span">
                        New In
                        </span>
                    </div>
                </div>
            </div>
            <div className="sortdiv">
            <form action="#">
                        <label htmlFor="sort"></label>
                        <select name="sort" id="sort" className="sort-selection" >
                        <option value="lowest">Price(lowest)</option>
                        <option value="highest">Price(highest)</option>
                        <option value="alpha">Price(a-z)</option>
                        <option value="alpha">Price(z-a)</option>
                        </select>  
                    </form>
                    </div>
        </div>
            <div className="total">
                <h1>Earrings </h1>
                <span className="count"> 2295 Designs
                </span>
            </div>
            <div className="allpro">
                <div className="filterdiv">
                    <div className="filhead">Filter By</div>
                    <div className="fillist">
                        <div className="filsub">Price</div>
                        <div className="fil">
                        <div className="filcat">
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>Under ₹5,000</span>
                                        <em>(80)</em>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>₹5,001 - ₹10,000 </span>
                                        <em>(261)</em>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>₹10,001 - ₹15,000 </span>
                                        <em>(228)</em>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>₹15,001 - ₹20,000</span>
                                        <em>(163)</em>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>₹20,001 - ₹30,000 </span>
                                        <em>(329)</em>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>₹30,001 - ₹40,000</span>
                                        <em>(259)</em>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>₹40,001 - ₹50,000</span>
                                        <em>(203)</em>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">

                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>₹50,001 - ₹75,000</span>
                                        <em>(342)</em>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>₹75,001 - ₹1,00,000</span>
                                        <em>(268)</em>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>₹1,00,001 - ₹1,50,000</span>
                                        <em>(116)</em>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>₹1,50,001 - ₹2,00,000</span>
                                        <em>(33)</em>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>₹2,00,001 - ₹2,50,000</span>
                                        <em>(6)</em>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>Over ₹2,50,000 </span>
                                        <em>(8)</em>
                                    </span>
                            </label>
                            </div>
                        </div>
                        </div>
                        <div className="filsub">Product Type</div>
                        <div className="fil">
                        <div className="filcat">
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>Earrings</span>
                                        <em>(2295)</em>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>Rings </span>
                                        <em>(1924)</em>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>Necklaces</span>
                                        <em>(771)</em>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>Pendants</span>
                                        <em>(672)</em>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>Bracelets</span>
                                        <em>(955)</em>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>Bangles</span>
                                        <em>(118)</em>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>Chains</span>
                                        <em>(35)</em>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">

                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>Sets</span>
                                        <em>(44)</em>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>Mangalsutra</span>
                                        <em>(313)</em>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>Nose Pin</span>
                                        <em>(124)</em>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>Nath</span>
                                        <em>(2)</em>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>Charms</span>
                                        <em>(97)</em>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>Charm builders</span>
                                        <em>(4)</em>
                                    </span>
                            </label>
                            </div>
                    </div>
                    </div>
                    <div className="filsub">Weight Ranges</div>
                    <div className="fil">
                        <div className="filcat">
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>0 - 2 g</span>
                                        <em>(872)</em>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>2 - 5 g</span>
                                        <em>(1046)</em>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>5 - 10 g</span>
                                        <em>(271)</em>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>10 - 20 g</span>
                                        <em>(26)</em>
                                    </span>
                            </label>
                            </div>
                    </div>
                    </div>                    
                    {showmore && (<div>
                    <div className="fil">
                    <div className="filsub">Materail</div>
                        <div className="filcat">
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>Platinum</span>
                                        <em>(14)</em>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>Gold</span>
                                        <em>(350)</em>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>Diamond</span>
                                        <em>(1882)</em>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>Gemstone</span>
                                        <em>(435)</em>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>Solitaire</span>
                                        <em>(39)</em>
                                    </span>
                            </label>
                            </div>
                    </div>
                    </div>
                    <div className="filsub">Shop for</div>
                    <div className="fil">
                        <div className="filcat">
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>Women</span>
                                        <em>(2165)</em>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>Men</span>
                                        <em>(27)</em>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>Kids</span>
                                        <em>(103)</em>
                                    </span>
                            </label>
                            </div>
                         </div>
                    </div>
                    <div className="filsub">Occasion</div>
                    <div className="fil">
                        <div className="filcat">
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>Everyday</span>
                                        <em>(1477)</em>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>Work Wear</span>
                                        <em>(48)</em>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>Desk to Dinner</span>
                                        <em>(6)</em>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>Wedding</span>
                                        <em>(5)</em>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>Evening</span>
                                        <em>(671)</em>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <span className="filtext">
                                        <span>Party Wear</span>
                                        <em>(54)</em>
                                    </span>
                            </label>
                            </div>
                        </div>
                        </div>
                    </div>)}
                    <button className="Show" onClick={()=>setShowmore(!showmore)}>{showmore?"Show Less Filters":"Show More Filters" }</button>
                </div>
            </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {fData1.map((el) => {
          return <ProductCard key={el.id} {...el} />;
        })}
      </div>
      </div>
    </div>
  );
};
