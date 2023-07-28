import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard.jsx";
// import sort from "../Images/Sort.png"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import "./ProductCard.css";
import { IconButton,Icon, Radio, Checkbox } from '@chakra-ui/react'
import {ChevronDownIcon,CloseIcon } from '@chakra-ui/icons'
export const Earrings = () => {
  const api = "http://localhost:3/products";
const [showmore,setShowmore]=useState(false);

  const [fData, setFData] = useState([]);
  const [fData1, setFData1] = useState([]);
  const [fData2, setFData2] = useState([]);

  const [pricerange,setpricerange]=useState(null);
  const [showDropdown, setShowDropdown]=useState(false);
 
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
    let newdata=fData.filter((el)=>el.category ==="earrings");
    setFData1(newdata);
    setFData2(newdata);
}
function handleprice(pricerange){
    setpricerange(pricerange);
    console.log(pricerange);
    if(pricerange){
        const[min,max]=pricerange.split("-");
        console.log(min)
        let newdata=fData2.filter((el)=>el.price>=parseInt(min)&&el.price<=parseInt(max));
        setFData1(newdata);}
}

  return (
    <div>
        <div id="banner">
            <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/04-APR/AppBanner/Earring/01/Desktop_1920x560_toplisting.jpg" alt="" />
        </div>
        <div classNameName="navdiv">
            <div classNameName="navlist">
                <div classNameName="head">
                <ul>
                    <li>
                        <a href="" style={{textDecoration:"none"}}>Earrings  <CloseIcon color="red"  /></a>
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
                        <div classNameName="selector">
                        <form action="#">
                <label>Sort By:</label>
                <select name="sort"  classNameName="sort-selection" >
                <option value="lowest">Latest</option>
                <option value="highest">Discount</option>
                <option value="highest">Featured</option>
                <option value="alpha">Price: Low to High</option>
                <option value="alpha">Price: High to Low</option>
                </select>  
            </form>
            </div>        
            </div>
        </div>
            <div className="total">
                <h1>Earrings </h1>
                <span className="count"> 2295 Designs
                </span>
            </div>
            <div classNameName="allpro">
                <div classNameName="filterdiv">
                    <div classNameName="filhead">Filter By</div>
                    <div classNameName="fillist">
                        <div classNameName="filsub">Price</div>
                        <div classNameName="fil">
                        <div classNameName="filcat">
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" checked value="0-300000" />
                                    <span classNameName="filtext">
                                        <span>Whole Range</span>
                                    </span>
                            </label>
                            </div>
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                    <input  type="radio" name="checkbox" id="checkbox" value="0-5000" onChange={(e)=>handleprice(e.target.value)}/>
                                    <span classNameName="filtext" >
                                        <span>Under ₹5,000 <em>(80)</em></span>
                                    </span>
                            </label>
                            </div>
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="5001-10000" onChange={(e)=>handleprice(e.target.value)} />
                                    <span classNameName="filtext">
                                        
                                        <span>₹5,001 - ₹10,000 <em>(261)</em> </span>
                                    </span>
                            </label>
                            </div>
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="10001-15000" onChange={(e)=>handleprice(e.target.value)} />
                                    <span classNameName="filtext" >
                                        <span>₹10,001 - ₹15,000 <em>(228)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="15001-20000" onChange={(e)=>handleprice(e.target.value)} />
                                    <span classNameName="filtext">
                                        <span>₹15,001 - ₹20,000 <em>(163)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="20001-30000" onChange={(e)=>handleprice(e.target.value)}/>
                                    <span classNameName="filtext">
                                        <span>₹20,001 - ₹30,000 <em>(329)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="30001-40000" onChange={(e)=>handleprice(e.target.value)} />
                                    <span classNameName="filtext">
                                        <span>₹30,001 - ₹40,000 <em>(259)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="40001-50000" onChange={(e)=>handleprice(e.target.value)} />
                                    <span classNameName="filtext">
                                        <span>₹40,001 - ₹50,000 <em>(203)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div classNameName="filcatsub">

                            <label >
                                <i></i>
                                    <input type="radio" bg="#8863fb" name="checkbox" id="checkbox" value="50001-75000" onChange={(e)=>handleprice(e.target.value)}/>
                                    <span classNameName="filtext">
                                        <span>₹50,001 - ₹75,000 <em>(342)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="75001-100000" onChange={(e)=>handleprice(e.target.value)}/>
                                    <span classNameName="filtext">
                                        <span>₹75,001 - ₹1,00,000 <em>(268)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="100001-150000" onChange={(e)=>handleprice(e.target.value)}/>
                                    <span classNameName="filtext">
                                        <span>₹1,00,001 - ₹1,50,000 <em>(116)</em></span>
                                       
                                    </span>
                            </label>
                            </div>
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="150001-200000" onChange={(e)=>handleprice(e.target.value)}/>
                                    <span classNameName="filtext">
                                        <span>₹1,50,001 - ₹2,00,000 <em>(33)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                    <input type="radio" bg="#8863fb" name="checkbox" id="checkbox" value="200001-250000" onChange={(e)=>handleprice(e.target.value)}/>
                                    <span classNameName="filtext">
                                        <span>₹2,00,001 - ₹2,50,000 <em>(6)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="250001-400000" onChange={(e)=>handleprice(e.target.value)}/>
                                    <span classNameName="filtext">
                                        <span>Over ₹2,50,000 <em>(8)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                        </div>
                        </div>
                        <div classNameName="filsub">Product Type</div>
                        <div classNameName="fil">
                        <div classNameName="filcat">
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                    <Radio name="checkbox" id="checkbox" bg="#8863fb"></Radio>
                                    <span classNameName="filtext">
                                        <span>Earrings <em>(2295)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                    <Radio name="checkbox" id="checkbox" ></Radio>
                                    <span classNameName="filtext">
                                        <span>Rings <em>(1924)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                    <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span classNameName="filtext">
                                        <span>Necklaces <em>(771)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                    <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span classNameName="filtext">
                                        <span>Pendants <em>(672)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span classNameName="filtext">
                                        <span>Bracelets <em>(955)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span classNameName="filtext">
                                        <span>Bangles <em>(118)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span classNameName="filtext">
                                        <span>Chains <em>(35)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div classNameName="filcatsub">

                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span classNameName="filtext">
                                        <span>Sets <em>(44)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span classNameName="filtext">
                                        <span>Mangalsutra <em>(313)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span classNameName="filtext">
                                        <span>Nose Pin <em>(124)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span classNameName="filtext">
                                        <span>Nath <em>(2)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span classNameName="filtext">
                                        <span>Charms <em>(97)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span classNameName="filtext">
                                        <span>Charm builders <em>(4)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                    </div>
                    </div>
                    <div classNameName="filsub">Weight Ranges</div>
                    <div classNameName="fil">
                        <div classNameName="filcat">
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span classNameName="filtext">
                                        <span>0 - 2 g <em>(872)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span classNameName="filtext">
                                        <span>2 - 5 g <em>(1046)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span classNameName="filtext">
                                        <span>5 - 10 g  <em>(271)</em></span>
                                       
                                    </span>
                            </label>
                            </div>
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span classNameName="filtext">
                                        <span>10 - 20 g <em>(26)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                    </div>
                    </div>                    
                    {showmore && (<div>
                    <div classNameName="fil">
                    <div classNameName="filsub">Materail</div>
                        <div classNameName="filcat">
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span classNameName="filtext">
                                        <span>Platinum <em>(14)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span classNameName="filtext">
                                        <span>Gold <em>(350)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span classNameName="filtext">
                                        <span>Diamond <em>(1882)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span classNameName="filtext">
                                        <span>Gemstone <em>(435)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span classNameName="filtext">
                                        <span>Solitaire <em>(39)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                    </div>
                    </div>
                    <div classNameName="filsub">Shop for</div>
                    <div classNameName="fil">
                        <div classNameName="filcat">
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span classNameName="filtext">
                                        <span>Women <em>(2165)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span classNameName="filtext">
                                        <span>Men <em>(27)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span classNameName="filtext">
                                        <span>Kids <em>(103)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                         </div>
                    </div>
                    <div classNameName="filsub">Occasion</div>
                    <div classNameName="fil">
                        <div classNameName="filcat">
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span classNameName="filtext">
                                        <span>Everyday <em>(1477)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span classNameName="filtext">
                                        <span>Work Wear <em>(48)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span classNameName="filtext">
                                        <span>Desk to Dinner <em>(6)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span classNameName="filtext">
                                        <span>Wedding <em>(5)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span classNameName="filtext">
                                        <span>Evening <em>(671)</em></span>
                                       
                                    </span>
                            </label>
                            </div>
                            <div classNameName="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span classNameName="filtext">
                                        <span>Party Wear <em>(54)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                        </div>
                        </div>
                    </div>)}
                    <button className="Show" onClick={()=>setShowmore(!showmore)}>{showmore?"Show Less Filters":"Show More Filters" }</button>
                </div>
            </div>
      <div style={{ display: "flex", flexWrap: "wrap",gap:"1.5rem" }}>
        {fData1.map((el) => {
          return <ProductCard key={el.id} {...el} />;
        })}
      </div>
      </div>
    </div>
  );
};
