import { Routes,Route } from "react-router-dom"
//import {Overview} from "./Pages/Overview"
// //import {Allitem} from "./Pages/Allitem"
import { Earrings} from "../pages/Earrings"
import {ProductDetails} from "../pages/ProductDetails"
//import { Jewellery } from "./Components/OtherJewellery"
//import { NewArrivals } from "./Components/NewArrivals"
//import { BestSellers } from "../pages/BestSellers"
//import {Rings} from "./Components/Rings"
//import {Solitaires} from "./Components/Solitaires"
//import { Bracelets } from "./Components/Bracelets"
//import {SpecialDeals} from "./Components/SpecialDeals"
export const AllRoutes=()=>{
    return(
        <div>
        <Routes>
           {/* <Route path="/" element={<Allitem />}></Route> */}
           {/*<Route path="/jewellery" element={<Jewellery />}></Route>
            <Route path="/newarrivals"element={<NewArrivals/>}></Route>
            <Route path="/bestsellers" element={<BestSellers/>}></Route>
           {/*<Route path="/rings" element={<Rings/>}></Route>
           <Route path="/specialdeals" element={<SpecialDeals/>}></Route>
           <Route path="/solitaires" element={<Solitaires/>}></Route>
           <Route path="/bracelets" element={<Bracelets/>}></Route>
           <Route path="/pop" element={<Overview />}></Route>*/}
        <Route path="/earrings" element={<Earrings/>}></Route>
        <Route path="/products/:id" element={<ProductDetails/>}></Route>
        </Routes>
        </div>
    )
}