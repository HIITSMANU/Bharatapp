import {useEffect,useState} from "react"
import { ProductCard } from "../Components/TProductCard";
export const Products = () =>{
    const api = "  http://localhost:3/trialproducts"
    const[fdata,setfdata] = useState([]);

    const fetchdata = async() =>{
        let res = await fetch(api);
        let data1 = await res.json();
        console.log(data1);
        setfdata(data1);
    }
    useEffect(() => {
        fetchdata();
    },[])

    return (
        <div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {fdata.map((el) => {
            return <ProductCard {...el} />;
            })}
          </div>
        </div>
    )
}