import { useEffect, useState,React,useRef } from "react";
import { ProductCard } from "./ProductCard.jsx";
import { useNavigate } from "react-router-dom";
import styles from "./ProductCard.module.css";
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
export const BestSellers = () => {
  const api = "http://localhost:3/products";
const [showmore,setShowmore]=useState(false);
const navigate=useNavigate();
  const [fData, setFData] = useState([]);
  const [fData1, setFData1] = useState([]);
  const [fData2, setFData2] = useState([]);

  const [pricerange,setpricerange]=useState([]);
  const [showDropdown, setShowDropdown]=useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [showham,setshowham]=useState(false);

  const[sortorder,setsortorder]=useState(null);
  const fetchData = async () => {
    let res = await fetch(api);
    let data1 = await res.json();
    setFData(data1);
    setFData1(data1);
    setFData2(data1);

  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(()=>{
    setFData1(sort(sortorder,fData1));
  },[sortorder]);

function handleFilter(pro){
    if(pro!="bestsellers"){
        
    let newdata=fData.filter((el)=>el.category ===pro);
    setFData1(newdata);
    setFData2(newdata);}
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
        return b.price - a.price;
    })}else if(sortorder==="high"){
            data.sort(function(a,b){
                return a.price - b.price;
            })
    }
    return data;
}

function handleham(){
    setshowham(!showham);
}

function handlenav(value){
    navigate(`/${value}`)
}

  return (
    <div>
        <div id="banner">
        <picture>
<source media="(min-width: 993px)" srcset="https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/AppBanner/Best/03/Desktop_1920-x560_toplisting.jpg 1x" type="image/jpeg"/>
<source media="(min-width: 768px)" srcset="https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/AppBanner/Best/03/mobile_768x432_toplisting.jpg 1x" type="image/jpeg"/>
<source media="(min-width: 320px)" srcset="https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/AppBanner/Best/03/mobile_768x432_toplisting.jpg 1x" type="image/jpeg"/>
    
    
    
    <img src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/AppBanner/Best/03/Desktop_1920-x560_toplisting.jpg" alt="" /></picture>
        </div>
        <div className={styles.navdiv}>
        <div className={styles.Ham}>  
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
                <Select id='owner' defaultValue='latest' onChange={(e)=>setsortorder(e.target.value)}>
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
                <FormLabel htmlFor='owner'>Price:</FormLabel>
                <Select id='owner' defaultValue='whole'>
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
                <FormLabel htmlFor='owner'>Product Type:</FormLabel>
                <Select id='owner' >
            
                <option value='earrings'onChange={(e)=>handleFilter(e.target.value)}>Earrings</option>
                <option value="rings" onChange={(e)=>handleFilter(e.target.value)}>Rings</option>
                <option value="Necklaces" onChange={(e)=>handleFilter(e.target.value)}>Necklaces</option>
                <option value="bracelet" onChange={(e)=>handleFilter(e.target.value)}>Bracelets</option>
                <option value="Bangles" onChange={(e)=>handleFilter(e.target.value)} >Bangles</option>
                <option value="Pendants" onChange={(e)=>handleFilter(e.target.value)} >Pendants</option>
                <option value="chains" onChange={(e)=>handleFilter(e.target.value)}>Chains</option>
                <option value="items" onChange={(e)=>handlenav(e.target.value)}>Sets</option>
                <option value="mangalsutra" onChange={(e)=>handleFilter(e.target.value)}>Mangalsutra</option>
                <option value="items" onChange={(e)=>handlenav(e.target.value)}>Nose Pin</option>
                <option value="items" onChange={(e)=>handlenav(e.target.value)}>Nath</option>
                <option value="charms" onChange={(e)=>handleFilter(e.target.value)}>Charms</option>
                <option value="charms" onChange={(e)=>handleFilter(e.target.value)}>Charm Builders</option>
                </Select>  
              </Box>
              </Stack>
              </DrawerBody>
              </DrawerContent>
      </Drawer>
        </div>
        <div className={styles.navlist}>
                <div className={styles.navdiv1}>
                <div className={styles.head}>
             
                <ul>
                    <li>
                        <a href="" style={{textDecoration:"none"}}>Best Sellers  <CloseIcon color="red"  /></a>
                        <span></span>
                        <a href="" style={{textDecoration:"underline"}} className={styles.clear}>Clear All</a>
                    </li>
                </ul>
                </div>
                <div className={styles.navsmall}>

                <div>
                        <button className={styles.all}>All</button>
                    </div>
                    <div className={styles.hovnav1}>
                        <button className={styles.span}>Try at Home</button>
                        <span className={styles.hovspan1}>Click here to see all designs available for Free Try at Home Service - Book an appointment to see designs at your home</span>
                    </div>
                    <div className={styles.hovnav2}>
                        <button className={styles.span}>Designs in Store
                        </button>
                        <span className={styles.hovspan2}>
                        Click to see designs available at any store. OR place your order online & pickup from the selected store on the same day
                        </span>
                    </div>
                    <div className={styles.hovnav3}>
                        <button className={styles.span}>Fast Delivery
                        </button>
                        <span className={styles.hovspan3}>
                        Designs that will reach you faster. Click to check designs ready for a Sure & Swift delivery.
                        </span>
                    </div>
                    <div> 
                        <button className={styles.span}>
                        New In
                        </button>
                    </div>
                </div>   
                </div>
                <div className={styles.selector}>

                        <form action="#">
                <label>Sort By:</label>
                <select name="sort"  onChange={(e)=>setsortorder(e.target.value)}>
                <option value="latest">Latest</option>
                <option value="discount">Discount</option>
                <option value="featured">Featured</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                </select>  
            </form>        
            </div>      
        </div>
        </div>
        <div className={styles.total}>
                <h1><b>भारत Jewels Bestsellers</b> <span className={styles.count}>1402 Designs</span></h1>
                
                
            </div>
            <div className={styles.allpro}>
                <div className={styles.filterdiv}>
                    <div className={styles.fildiv}>
                    <div className={styles.filhead}>Filter By</div>
                    <div className={styles.fillist}>
                        <div className={styles.filsub}>Price</div>
                        <div className={styles.fil}>
                        <div className={styles.filcat}>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                <input type="radio" name="checkbox" id="checkbox" checked value="0-300000" />
                                    <span className={styles.filtext}>
                                        <span>Whole Range</span>
                                    </span>
                            </label>
                            </div>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                    <input  type="radio" name="checkbox" id="checkbox" value="0-5000" onChange={(e)=>handleprice(e.target.value)}/>
                                    <span className={styles.filtext} >
                                        <span>Under ₹5,000 <em>(80)</em></span>
                                    </span>
                            </label>
                            </div>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="5001-10000" onChange={(e)=>handleprice(e.target.value)} />
                                    <span className={styles.filtext}>
                                        
                                        <span>₹5,001 - ₹10,000 <em>(261)</em> </span>
                                    </span>
                            </label>
                            </div>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="10001-15000" onChange={(e)=>handleprice(e.target.value)} />
                                    <span className={styles.filtext} >
                                        <span>₹10,001 - ₹15,000 <em>(228)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="15001-20000" onChange={(e)=>handleprice(e.target.value)} />
                                    <span className={styles.filtext}>
                                        <span>₹15,001 - ₹20,000 <em>(163)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="20001-30000" onChange={(e)=>handleprice(e.target.value)}/>
                                    <span className={styles.filtext}>
                                        <span>₹20,001 - ₹30,000 <em>(329)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="30001-40000" onChange={(e)=>handleprice(e.target.value)} />
                                    <span className={styles.filtext}>
                                        <span>₹30,001 - ₹40,000 <em>(259)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="40001-50000" onChange={(e)=>handleprice(e.target.value)} />
                                    <span className={styles.filtext}>
                                        <span>₹40,001 - ₹50,000 <em>(203)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className={styles.filcatsub}>

                            <label >
                                <i></i>
                                    <input type="radio" bg="#8863fb" name="checkbox" id="checkbox" value="50001-75000" onChange={(e)=>handleprice(e.target.value)}/>
                                    <span className={styles.filtext}>
                                        <span>₹50,001 - ₹75,000 <em>(342)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="75001-100000" onChange={(e)=>handleprice(e.target.value)}/>
                                    <span className={styles.filtext}>
                                        <span>₹75,001 - ₹1,00,000 <em>(268)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="100001-150000" onChange={(e)=>handleprice(e.target.value)}/>
                                    <span className={styles.filtext}>
                                        <span>₹1,00,001 - ₹1,50,000 <em>(116)</em></span>
                                       
                                    </span>
                            </label>
                            </div>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="150001-200000" onChange={(e)=>handleprice(e.target.value)}/>
                                    <span className={styles.filtext}>
                                        <span>₹1,50,001 - ₹2,00,000 <em>(33)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                    <input type="radio" bg="#8863fb" name="checkbox" id="checkbox" value="200001-250000" onChange={(e)=>handleprice(e.target.value)}/>
                                    <span className={styles.filtext}>
                                        <span>₹2,00,001 - ₹2,50,000 <em>(6)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="250001-400000" onChange={(e)=>handleprice(e.target.value)}/>
                                    <span className={styles.filtext}>
                                        <span>Over ₹2,50,000 <em>(8)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                        </div>
                        </div>
                        <div className={styles.filsub}>Product Type</div>
                        <div className={styles.fil}>
                        <div className={styles.filcat}>
                            <div className={styles.filcatsub}>
                        
                            <label >
                                <i></i>
                                <input type="radio" name="checkbox" id="checkbox" value="earrings" onChange={(e)=>handleFilter(e.target.value)}/>
                                    <span className={styles.filtext}>
                                        <span>Earrings <em>(2295)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="rings" onChange={(e)=>handleFilter(e.target.value)}/>
                                    <span className={styles.filtext}>
                                        <span>Rings <em>(1924)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                <input type="radio" name="checkbox" id="checkbox" value="Necklaces" onChange={(e)=>handleFilter(e.target.value)}/>
                                    <span className={styles.filtext}>
                                        <span>Necklaces <em>(771)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                <input type="radio" name="checkbox" id="checkbox" value="Pendants" onChange={(e)=>handleFilter(e.target.value)}/>
                                    <span className={styles.filtext}>
                                        <span>Pendants <em>(672)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                <input type="radio" name="checkbox" id="checkbox" value="bracelet" onChange={(e)=>handleFilter(e.target.value)}/>
                                    <span className={styles.filtext}>
                                        <span>Bracelets <em>(955)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                <input type="radio" name="checkbox" id="checkbox" value="Bangles" onChange={(e)=>handleFilter(e.target.value)}/>
                                    <span className={styles.filtext}>
                                        <span>Bangles <em>(118)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                <input type="radio" name="checkbox" id="checkbox" value="chains" onChange={(e)=>handleFilter(e.target.value)}/>
                                    <span className={styles.filtext}>
                                        <span>Chains <em>(35)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className={styles.filcatsub}>

                            <label >
                                <i></i>
                                <input type="radio" name="checkbox" id="checkbox" value="items" onChange={(e)=>handlenav(e.target.value)}/>
                                    <span className={styles.filtext}>
                                        <span>Sets <em>(44)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                <input type="radio" name="checkbox" id="checkbox" value="mangalsutra" onChange={(e)=>handleFilter(e.target.value)}/>
                                    <span className={styles.filtext}>
                                        <span>Mangalsutra <em>(313)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                <input type="radio" name="checkbox" id="checkbox" value="items" onChange={(e)=>handlenav(e.target.value)}/>
                                    <span className={styles.filtext}>
                                        <span>Nose Pin <em>(124)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                <input type="radio" name="checkbox" id="checkbox" value="items" onChange={(e)=>handlenav(e.target.value)}/>
                                    <span className={styles.filtext}>
                                        <span>Nath <em>(2)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                <input type="radio" name="checkbox" id="checkbox" value="charms" onChange={(e)=>handleFilter(e.target.value)}/>
                                    <span className={styles.filtext}>
                                        <span>Charms <em>(97)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                <input type="radio" name="checkbox" id="checkbox" value="charms" onChange={(e)=>handleFilter(e.target.value)}/>
                                    <span className={styles.filtext}>
                                        <span>Charm builders <em>(4)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                    </div>
                    </div>
                    <div className={styles.filsub}>Weight Ranges</div>
                    <div className={styles.fil}>
                        <div className={styles.filcat}>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className={styles.filtext}>
                                        <span>0 - 2 g <em>(872)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className={styles.filtext}>
                                        <span>2 - 5 g <em>(1046)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className={styles.filtext}>
                                        <span>5 - 10 g  <em>(271)</em></span>
                                       
                                    </span>
                            </label>
                            </div>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className={styles.filtext}>
                                        <span>10 - 20 g <em>(26)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                    </div>
                    </div>                    
                    {showmore && (<div>
                    <div className={styles.fil}>
                    <div className={styles.filsub}>Materail</div>
                        <div className={styles.filcat}>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className={styles.filtext}>
                                        <span>Platinum <em>(14)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className={styles.filtext}>
                                        <span>Gold <em>(350)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className={styles.filtext}>
                                        <span>Diamond <em>(1882)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className={styles.filtext}>
                                        <span>Gemstone <em>(435)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className={styles.filtext}>
                                        <span>Solitaire <em>(39)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                    </div>
                    </div>
                    <div className={styles.filsub}>Shop for</div>
                    <div className={styles.fil}>
                        <div className={styles.filcat}>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className={styles.filtext}>
                                        <span>Women <em>(2165)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className={styles.filtext}>
                                        <span>Men <em>(27)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className={styles.filtext}>
                                        <span>Kids <em>(103)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                         </div>
                    </div>
                    <div className={styles.filsub}>Occasion</div>
                    <div className={styles.fil}>
                        <div className={styles.filcat}>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className={styles.filtext}>
                                        <span>Everyday <em>(1477)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className={styles.filtext}>
                                        <span>Work Wear <em>(48)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className={styles.filtext}>
                                        <span>Desk to Dinner <em>(6)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className={styles.filtext}>
                                        <span>Wedding <em>(5)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className={styles.filtext}>
                                        <span>Evening <em>(671)</em></span>
                                       
                                    </span>
                            </label>
                            </div>
                            <div className={styles.filcatsub}>
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className={styles.filtext}>
                                        <span>Party Wear <em>(54)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                        </div>
                        </div>
                    </div>)}
                    <button className={styles.Show} onClick={()=>setShowmore(!showmore)}>{showmore?"Show Less Filters":"Show More Filters" }</button>
                </div>
                </div>
            </div>
      <div className={styles.box}>
        {fData1.map((el) => {
          return <ProductCard key={el.id} {...el} />;
        })}
      </div>
      </div>
    </div>
  );
};
