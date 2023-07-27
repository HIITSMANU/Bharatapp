import "./ProductCard.css";
import { useState } from "react";
// import sort from "../Images/Sort.png"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
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
  Heading
} from "@chakra-ui/react";

export const ProductCard = ({ id, image, price, name, category }) => {
  const navigate = useNavigate();
  function nav() {
    navigate(`/products/${id}`);
  }
  return (
    <Card maxW="sm" bgColor="transparent" id="Card">
      <CardBody>
        <Image src={image} alt={id} borderRadius="lg" />
        <Stack mt="6" spacing="1">
            <div className="head">
          <Heading className="text" size="lg">₹{price}</Heading>
          <span>
            <a className="details" size="md" href="#" onClick={nav}>Details</a>
          </span>
          </div>
          <Text color='#4a2a64' fontSize="lg" textAlign="left" fontFamily="MuliRegular, Helvetica Neue, Helvetica, Arial, sans-serif;">Check Delivery Date 
          </Text>
          <Text textAlign="left" fontFamily="InterRegular,Helvetica Neue,Helvetica,Arial,sans-serif;" color=" #9d9fa4;" size="lg" spacing="0">{name}</Text>
        </Stack>
      
        <ButtonGroup spacing="5">
          <Button borderRadius= "10px"
    border=" solid 1px #4f3267;"
    fontFamily= "InterRegular,Helvetica Neue,Helvetica,Arial,sans-serif;" color=" #231535;" mt="2">
            Book Try at Home
          </Button>
          <Button border= "solid 1px #75d167;"  fontFamily= "InterRegular,Helvetica Neue,Helvetica,Arial,sans-serif;" color=" #75d167;" mt="2" >
            Live Video Call
          </Button>
        </ButtonGroup>
        </CardBody>
    </Card>
  );
};
