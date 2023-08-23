import { useEffect, useState,React,useRef } from "react";
import { ProductCard } from "./ProductCard.jsx";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Stack,Button,FormLabel,Select, ButtonGroup,Heading
  } from '@chakra-ui/react'
import { IconButton,Icon, Radio, Checkbox, Flex,Box, useDisclosure, } from '@chakra-ui/react'
import {ChevronDownIcon,CloseIcon,HamburgerIcon,ChevronRightIcon, } from '@chakra-ui/icons'
export const Valentines = () => {
  const api = "http://localhost:3/Gifting";
const [showmore,setShowmore]=useState(false);
const navigate=useNavigate();
  const [fData, setFData] = useState([]);
  const [fData1, setFData1] = useState([]);
  const [fData2, setFData2] = useState([]);
  const [fData3, setFData3] = useState([]);

  const [pricerange,setpricerange]=useState([]);
  const [showDropdown, setShowDropdown]=useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [showham,setshowham]=useState(false);

  const[sortorder,setsortorder]=useState(null);

  const fetchData = async () => {
    let res = await fetch(api);
    let data1 = await res.json();
    setFData(data1);
    // setFData1(data1);

  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
handleFilter();
  }, [fData]);
  useEffect(()=>{
    setFData1(sort(sortorder,fData1));
  },[sortorder]);

function handleFilter(){
    let newdata=fData.filter((el)=>el.gifttype ==="valentine's");
    setFData1(newdata);
    setFData2(newdata);
    setFData3(newdata);

}
function handlenav(value){
    let newdata=fData3.filter((el)=>el.category ===value);
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

function sort(sortorder,data){
    if(sortorder==="low"){
    data.sort(function(a,b){
        return a.price - b.price;
    })} if(sortorder==="high"){
            data.sort(function(a,b){
                return b.price - a.price;
            })
        }
        return data;
}

function handleham(){
    setshowham(!showham);
}


  return (
    <div>
        <div id="banner">
            <picture>
            <source media="(min-width: 993px)" srcset="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/AppBanner/Vday/HP/02/Desktop_1920%20x560_toplisting.jpg 1x" type="image/jpeg"/>
            <source media="(min-width: 768px)" srcset="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/AppBanner/Vday/HP/02/mobile_768x432_toplisting.jpg 1x" type="image/jpeg"/>
            <source media="(min-width: 320px)" srcset="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/AppBanner/Vday/HP/02/mobile_768x432_toplisting.jpg 1x" type="image/jpeg"/>
            <img class="egpsk3h2 css-z9akz8 e1nln7oz0" data-src="" src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/AppBanner/Vday/HP/02/Desktop_1920%20x560_toplisting.jpg" alt="Best romantic Valentines day gift ideas for your spcial one at best price. Surprise your loved one this valentines day with a gift from CaratLane." ></img>
           </picture>
        </div>
        <div className="navdiv">
        <div className="Ham"> 
        <IconButton icon ={<HamburgerIcon />} bg='none' color='black' onClick={onOpen}>
      </IconButton>
     <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Stack spacing='24px'>
              <Box>
                <ButtonGroup spacing="5" display="flex" flexWrap="wrap" gap="2">
                <Button>All</Button>
                <Button>Try at Home</Button>
                <Button>Designs in Store</Button>
                <Button>Fast Delivery</Button>
                <Button>New In</Button></ButtonGroup>
              </Box>
              <Box>
                <FormLabel htmlFor='owner'>Sort By:</FormLabel>
                <Select id='owner' onChange={(e)=>setsortorder(e.target.value)}>
                  <option value='latest'>Latest</option>
                  <option value='featured'>Featured</option>
                  <option value='discount'>Discount</option>
                  <option value='low'>Price: Low to High</option>
                  <option value='high'>Price: High to Low</option>
                </Select>
              </Box>
              <Box>
              <Heading size="md">Filter By
              </Heading>
              </Box>
              <Box>
                <FormLabel >Price:</FormLabel>
                <Select >
                <option value='whole'>Whole Range</option>
                <option value="0-5000" onChange={(e)=>handleprice(e.target.value)}>Under ₹5,000</option>
                <option value="5001-10000" onChange={(e)=>handleprice(e.target.value)}>₹5,001 - ₹10,000</option>
                <option value="10001-15000" onChange={(e)=>handleprice(e.target.value)}>₹10,001 - ₹15,000</option>
                <option value="15001-20000" onChange={(e)=>handleprice(e.target.value)} >₹15,001 - ₹20,000</option>
                <option value="20001-30000" onChange={(e)=>handleprice(e.target.value)}>₹20,001 - ₹30,000</option>
                <option value="30001-40000" onChange={(e)=>handleprice(e.target.value)}>₹30,001 - ₹40,000</option>
                <option value="40001-50000" onChange={(e)=>handleprice(e.target.value)}>₹40,001 - ₹50,000</option>
                <option value="50001-75000" onChange={(e)=>handleprice(e.target.value)}>₹50,001 - ₹75,000</option>
                <option value="75001-100000" onChange={(e)=>handleprice(e.target.value)}>₹75,001 - ₹1,00,000</option>
                <option value="100001-150000" onChange={(e)=>handleprice(e.target.value)}>₹1,00,001 - ₹1,50,000</option>
                <option value="150001-200000" onChange={(e)=>handleprice(e.target.value)}>₹1,50,001 - ₹2,00,000</option>
                <option value="200001-250000" onChange={(e)=>handleprice(e.target.value)}>₹2,00,001 - ₹2,50,000</option>
                <option value="250001-400000" onChange={(e)=>handleprice(e.target.value)}>Over ₹2,50,000</option>
                </Select>  
              </Box>
              <Box>
                <FormLabel >Product Type:</FormLabel>
                <Select  >
                <option value='earrings'onChange={(e)=>handlenav(e.target.value)}>Earrings</option>
                <option value="rings" onChange={(e)=>handlenav(e.target.value)}>Rings</option>
                <option value="Necklaces" onChange={(e)=>handlenav(e.target.value)}>Necklaces</option>
                <option value="bracelet" onChange={(e)=>handlenav(e.target.value)}>Bracelets</option>
                <option value="Bangles" onChange={(e)=>handlenav(e.target.value)} >Bangles</option>
                <option value="Pendants" onChange={(e)=>handlenav(e.target.value)} >Pendants</option>
                <option value="chains" onChange={(e)=>handlenav(e.target.value)}>Chains</option>
                <option value="sets" onChange={(e)=>handlenav(e.target.value)}>Sets</option>
                <option value="mangalsutra" onChange={(e)=>handlenav(e.target.value)}>Mangalsutra</option>
                <option value="nosepin">Nose Pin</option>
                <option value="nath" >Nath</option>
                <option value="charms" onChange={(e)=>handlenav(e.target.value)}>Charms</option>
                <option value="charms" onChange={(e)=>handlenav(e.target.value)}>Charm Builders</option>
                </Select>  
              </Box>
              </Stack>
              </DrawerBody>
              </DrawerContent>
      </Drawer>
        </div>
            <div className="navlist">
                <div className="navdiv1">
                <div className="head">
                <ul>
                    <li>
                        <a href="" style={{textDecoration:"none"}}>valentines day gifts <CloseIcon color="red"  /></a>
                        <span></span>
                        <a href="" style={{textDecoration:"underline"}} id="clear">Clear All</a>
                    </li>
                </ul>
                </div>
                <div class="navsmall">
                    <div>
                        <button id="all">All</button>
                    </div>
                    <div class="hovnav1">
                        <button class="span">Try at Home</button>
                        <span class="hovspan1">Click here to see all designs available for Free Try at Home Service - Book an appointment to see designs at your home</span>
                    </div>
                    <div class="hovnav2">
                        <button class="span">Designs in Store
                        </button>
                        <span class="hovspan2">
                        Click to see designs available at any store. OR place your order online & pickup from the selected store on the same day
                        </span>
                    </div>
                    <div class="hovnav3">
                        <button class="span">Fast Delivery
                        </button>
                        <span class="hovspan3">
                        Designs that will reach you faster. Click to check designs ready for a Sure & Swift delivery.
                        </span>
                    </div>
                    <div> 
                        <button class="span">
                        New In
                        </button>
                    </div>
                </div>   
                </div>
                <div className="selector">
                        
                <label>Sort By:</label>
                <select name="sort"  onChange={(e)=>setsortorder(e.target.value)}>
                <option value="latest">Latest</option>
                <option value="discount">Discount</option>
                <option value="featured">Featured</option>
                <option value="high">Price: Low to High</option>
                <option value="low">Price: High to Low</option>
                </select>  
           
            </div>      
        </div>
        </div>
            <div class="total">
                <h1><b>Valentines day gifts</b> <span class="count">1295 Designs</span></h1>
        
                
            </div>
            <div className="allpro">
                <div className="filterdiv">
                    <div className="fildiv">
                    <div className="filhead">Filter By</div>
                    <div className="fillist">
                        <div className="filsub">Price</div>
                        <div className="fil">
                        <div className="filcat">
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <input type="radio" name="checkbox" id="checkbox" checked value="0-300000" />
                                    <span className="filtext">
                                        <span>Whole Range</span>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input  type="radio" name="checkbox" id="checkbox" value="0-5000" onChange={(e)=>handleprice(e.target.value)}/>
                                    <span className="filtext" >
                                        <span>Under ₹5,000 <em>(80)</em></span>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="5001-10000" onChange={(e)=>handleprice(e.target.value)} />
                                    <span className="filtext">
                                        
                                        <span>₹5,001 - ₹10,000 <em>(261)</em> </span>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="10001-15000" onChange={(e)=>handleprice(e.target.value)} />
                                    <span className="filtext" >
                                        <span>₹10,001 - ₹15,000 <em>(228)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="15001-20000" onChange={(e)=>handleprice(e.target.value)} />
                                    <span className="filtext">
                                        <span>₹15,001 - ₹20,000 <em>(163)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="20001-30000" onChange={(e)=>handleprice(e.target.value)}/>
                                    <span className="filtext">
                                        <span>₹20,001 - ₹30,000 <em>(329)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="30001-40000" onChange={(e)=>handleprice(e.target.value)} />
                                    <span className="filtext">
                                        <span>₹30,001 - ₹40,000 <em>(259)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="40001-50000" onChange={(e)=>handleprice(e.target.value)} />
                                    <span className="filtext">
                                        <span>₹40,001 - ₹50,000 <em>(203)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">

                            <label >
                                <i></i>
                                    <input type="radio" bg="#8863fb" name="checkbox" id="checkbox" value="50001-75000" onChange={(e)=>handleprice(e.target.value)}/>
                                    <span className="filtext">
                                        <span>₹50,001 - ₹75,000 <em>(342)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="75001-100000" onChange={(e)=>handleprice(e.target.value)}/>
                                    <span className="filtext">
                                        <span>₹75,001 - ₹1,00,000 <em>(268)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="100001-150000" onChange={(e)=>handleprice(e.target.value)}/>
                                    <span className="filtext">
                                        <span>₹1,00,001 - ₹1,50,000 <em>(116)</em></span>
                                       
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="150001-200000" onChange={(e)=>handleprice(e.target.value)}/>
                                    <span className="filtext">
                                        <span>₹1,50,001 - ₹2,00,000 <em>(33)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="radio" bg="#8863fb" name="checkbox" id="checkbox" value="200001-250000" onChange={(e)=>handleprice(e.target.value)}/>
                                    <span className="filtext">
                                        <span>₹2,00,001 - ₹2,50,000 <em>(6)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="250001-400000" onChange={(e)=>handleprice(e.target.value)}/>
                                    <span className="filtext">
                                        <span>Over ₹2,50,000 <em>(8)</em></span>
                                        
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
                                <input type="radio" name="checkbox" id="checkbox" value="earrings" onChange={(e)=>handlenav(e.target.value)}/>
                                    
                                    <span className="filtext">
                                        <span>Earrings <em>(2295)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="rings" onChange={(e)=>handlenav(e.target.value)}/>
                                    <span className="filtext">
                                        <span>Rings <em>(1924)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <input type="radio" name="checkbox" id="checkbox" value="Necklaces" onChange={(e)=>handlenav(e.target.value)}/>
                                    <span className="filtext">
                                        <span>Necklaces <em>(771)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <input type="radio" name="checkbox" id="checkbox" value="Pendants" onChange={(e)=>handlenav(e.target.value)}/>
                                    <span className="filtext">
                                        <span>Pendants <em>(672)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <input type="radio" name="checkbox" id="checkbox" value="bracelet" onChange={(e)=>handlenav(e.target.value)}/>
                                    <span className="filtext">
                                        <span>Bracelets <em>(955)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <input type="radio" name="checkbox" id="checkbox" value="Bangles" onChange={(e)=>handlenav(e.target.value)}/>
                                    <span className="filtext">
                                        <span>Bangles <em>(118)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <input type="radio" name="checkbox" id="checkbox" value="chains" onChange={(e)=>handlenav(e.target.value)}/>
                                    <span className="filtext">
                                        <span>Chains <em>(35)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">

                            <label >
                                <i></i>
                                <input type="radio" name="checkbox" id="checkbox" value="sets" onChange={(e)=>handlenav(e.target.value)}/>
                                    <span className="filtext">
                                        <span>Sets <em>(44)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <input type="radio" name="checkbox" id="checkbox" value="mangalsutra" onChange={(e)=>handlenav(e.target.value)}/>
                                    <span className="filtext">
                                        <span>Mangalsutra <em>(313)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Nose Pin <em>(124)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Nath <em>(2)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <input type="radio" name="checkbox" id="checkbox" value="charms" onChange={(e)=>handlenav(e.target.value)}/>
                                    <span className="filtext">
                                        <span>Charms <em>(97)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <input type="radio" name="checkbox" id="checkbox" value="charms" onChange={(e)=>handlenav(e.target.value)}/>
                                    <span className="filtext">
                                        <span>Charm builders <em>(4)</em></span>
                                        
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
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>0 - 2 g <em>(872)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>2 - 5 g <em>(1046)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>5 - 10 g  <em>(271)</em></span>
                                       
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>10 - 20 g <em>(26)</em></span>
                                        
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
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Platinum <em>(14)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Gold <em>(350)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Diamond <em>(1882)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Gemstone <em>(435)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Solitaire <em>(39)</em></span>
                                        
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
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Women <em>(2165)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Men <em>(27)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Kids <em>(103)</em></span>
                                        
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
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Everyday <em>(1477)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Work Wear <em>(48)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Desk to Dinner <em>(6)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Wedding <em>(5)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Evening <em>(671)</em></span>
                                       
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Party Wear <em>(54)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                        </div>
                        </div>
                    </div>)}
                    <button class="Show" onClick={()=>setShowmore(!showmore)}>{showmore?"Show Less Filters":"Show More Filters" }</button>
                </div>
                </div>
            </div>
      <div className="box">
        {fData1.map((el) => {
          return <ProductCard key={el.id} {...el} />;
        })}
      </div>
      </div>
    </div>
  );
};
