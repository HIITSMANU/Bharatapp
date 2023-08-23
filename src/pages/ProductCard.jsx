import styles from "./ProductCard.module.css";
import { useState } from "react";
// import sort from "../Images/Sort.png"
import {Helmet, link} from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CloseButton, Toast, useToast } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Text,
  Stack,
  Divider,
  Button,
  ButtonGroup,
  Heading,
  Alert,
  AlertIcon,AlertTitle
} from "@chakra-ui/react";

export const ProductCard = (props) => {
  const toast =useToast();
  const { id, image, price, name, shipping, star, category } = props;
  const [wishlist,setwishlist]=useState(false);
  const [book,setbook]=useState(false);
  const navigate = useNavigate();
  function nav() {
    navigate(`/products/${id}`);
  }
  function funcset(){
    toast({
      status:"error",
      title: "Oops! free try at home not available",
      duration:2000,
      isClosable:true
    })
  }
  const [msg,setmsg]=useState(false);
  const addtowishlist =  async () => {
    let dataobj={
      id:id,
      image:image,
      price:price,
      name:name,
      shipping:shipping,
      star:star,
      category:category
    }
    let res = await fetch(`http://localhost:3/wishlist`, {
        method: "POST",
        body: JSON.stringify(dataobj),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    setwishlist(!wishlist);
    setmsg(!msg);
}
  return (
    
    <Card width="312px" height="320px" bgColor="transparent" className={styles.Card}>
      <CardBody>
      <Helmet>
          <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        /></Helmet>
         <button className={styles.wishlist} onClick={addtowishlist} style={{color: wishlist? "red":"black"}}><i class="fa fa-heart"></i></button>
                 
{ 
          msg &&  <Alert mt="-1" maxW="sm" maxH="sm" status="success"><AlertIcon/>
          <AlertTitle>
            Item is added successfully
          </AlertTitle>
          <CloseButton alignSelf="flex-end" mt="-1" mr="-1" onClick={()=>setmsg(!msg)}/>
          </Alert>
         }
        
        <Image src={image} width="175px" height="175px"  borderRadius="lg" ml="12" />
       
        <Stack spacing="1" mt="-2">
            <div className={styles.head}>
          <Heading className={styles.text} size="sm">₹{price}</Heading>
          
          <span>
            <a className={styles.details} size="sm" href="#" onClick={nav} target="_blank" >Details</a>
          </span>
          </div>
          <Text color='#4a2a64' fontSize="sm" textAlign="left" fontFamily="MuliRegular, Helvetica Neue, Helvetica, Arial, sans-serif;">Check Delivery Date 
          </Text>
          <Text textAlign="left" fontFamily="InterRegular,Helvetica Neue,Helvetica,Arial,sans-serif;" color=" #9d9fa4;" size="xs" spacing="0">{name}</Text>
        </Stack>
        <ButtonGroup spacing="2" mt="2" >
          <Button 
    border=" solid 1px #4f3267;"
    fontFamily= "InterRegular,Helvetica Neue,Helvetica,Arial,sans-serif;" color=" #231535;" onClick={funcset} size="sm" borderRadius="10px" >
            Book Try at Home
          
          </Button>
          <Button border= "solid 1px #75d167;"  fontFamily= "InterRegular,Helvetica Neue,Helvetica,Arial,sans-serif;" color=" #75d167;" size="sm" borderRadius="10px">
            Live Video Call
          </Button>
        </ButtonGroup>
        {/* {book && <Alert mt="-1" maxW="sm" maxH="sm" status="error"><AlertIcon/>
      <AlertTitle>
        Oops! free try at home not available
      </AlertTitle>
      <CloseButton alignSelf="flex-end" top="3" right="-1" onClick={funcset}/>
      </Alert>} */}
        </CardBody>
        
    </Card>
  );
};