import { Routes,Route } from "react-router-dom"
import {Homepage} from "./pages/Homepage"
import {Overview} from "./pages/Overview"
import { FindStore } from './pages/FindStore'
import {ProductDetails} from "./pages/ProductDetails"
import { Earrings } from "./pages/Earrings"
import { Gifting } from "./pages/Gifting"
import { Birthday } from "./pages/Birthday"
import { Personalised } from "./pages/Personalised"
import { Price } from "./pages/Price"
import { Jewellery } from "./pages/OtherJewellery"
import { NewArrivals } from "./pages/NewArrivals"
import { BestSellers } from "./pages/Bestsellers"
import {Rings} from "./pages/Rings"
import {Solitaires} from "./pages/Solitaires"
import { Bracelets } from "./pages/Bracelets"
import {SpecialDeals} from "./pages/SpecialDeals"
import {Cart} from './pages/Cart';
import {DigitalGold} from './pages/DigitalGold'
import {BraceletsBangles} from "./pages/BraceletsBangles"
import { EarRingsCombo } from "./pages/EarRingsCombo"
import { Necklaces } from "./pages/Necklaces"
import {Mangalsutra} from "./pages/Mangalsutra"
import {Pendants} from "./pages/Pendants"
import {Chains} from "./pages/Chains"
import {Bangles} from "./pages/Bangles"
import {Charms} from "./pages/Charms"
import {Items, Sets} from "./pages/Sets"
import { Trialcart } from "./pages/Trialcart"
import { Freetryathome } from "./Components/Freetryathome"
import { Carts } from "./pages/Carts"
import { LoginForm } from "./Components/LoginForm"
import {Admin} from "./Components/Admin"
import {SignupPage} from "./Components/SignupPage"
import { Payment } from './Components/Payment'
import { Ty } from "./Components/ty"
import { Address } from "./Components/Address"
import Wishlist from "./pages/Wishlist"
import { Dash } from "./Components/Dash"
import { Adminindex } from "./pages/Adminindex"
//import { EarRingsCombo } from "./pages/EarRingsCombo"
import { PrivateRoute } from "./Components/Privateroute"
import { Productaddform } from "./pages/Productaddform"
import { Showproddata } from "./Components/Showproddata"
import { Showdata } from "./pages/Showdata"


export const AllRoutes=()=>{
    return(
        <div>
        <Routes>
           {/* <Route path="/" element={<Allitem />}></Route> */}
           {/*
           
           <Route path="/adminindex" element={<Adminindex/>}></Route>
           
           <Route path="/homepage" element={<Homepage/>}></Route>
           <Route path="/wishlist" element={<Wishlist/>}></Route>
            <Route path="/newarrivals"element={<NewArrivals/>}></Route>
          <Route path="/bestsellers" element={<BestSellers/>}></Route>
           {/*
           <Route path="/specialdeals" element={<SpecialDeals/>}></Route>
          
           <Route path="/bracelets" element={<Bracelets/>}></Route>
           
            */}
           {/*
           
           
          
          
         
          <Route path="/signup" element={<SignupPage/>}></Route>
          
           
          <Route path="/products/:id" element={<ProductDetails/>}></Route>*/
          }
          
          <Route path="/homepage" element={<Homepage/>}></Route>
          <Route path="/gold" element={<DigitalGold/>}></Route>
          <Route path="/products/:id" element={<ProductDetails/>}></Route>
          <Route path="/bestsellers" element={<BestSellers/>}></Route>
          <Route path="/gift" element={<Gifting/>}></Route>
          <Route path="/earrings" element={<Earrings/>}></Route>
          <Route path="/birthday" element={<Birthday/>}></Route>
          <Route path="/pop" element={<Overview />}></Route>
          <Route path="/personalised" element={<Personalised/>}></Route>
          <Route path="/price" element={<Price/>}></Route>
          <Route path="/newarrivals"element={<NewArrivals/>}></Route>
          <Route path="/solitaires" element={<Solitaires/>}></Route>
          <Route path="/jewellery" element={<Jewellery />}></Route>
          <Route path="/rings" element={<Rings/>}></Route>
          <Route path="/specialdeals" element={<SpecialDeals/>}></Route>
          <Route path="/bracelets" element={<Bracelets/>}></Route>
          <Route path="/findstore" element={<FindStore />}></Route>
          <Route path="/earRingscombo" element={<EarRingsCombo/>}></Route>
          <Route path="/wishlist" element={<Wishlist/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/braceletsbangles"element={<BraceletsBangles/>}></Route>
          <Route path="/bracelets" element={<Bracelets/>}></Route>
          <Route path="/necklaces" element={<Necklaces/>}></Route>
          <Route path="/mangalsutra" element={<Mangalsutra/>}></Route>
          <Route path="/pendants" element={<Pendants/>}></Route>
          <Route path="/chains" element={<Chains/>}></Route>
          <Route path="/charms" element={<Charms/>}></Route>
          <Route path="/bangles" element={<Bangles/>}></Route>
          <Route path="/items" element={<Items/>}></Route>
          <Route path="/freetry" element={<Freetryathome/>}></Route>
          <Route path="/trial" element={<Trialcart/>}></Route>
          <Route path="/carts" element={<Carts/>}></Route>
          <Route path="/address" element={<PrivateRoute><Address/></PrivateRoute>}></Route>
           <Route path="/payment" element={<PrivateRoute><Payment/></PrivateRoute>}></Route>
           <Route path="/ty" element={<Ty/>}></Route>
           <Route path="/login" element={<LoginForm/>}></Route>
           <Route path="/signup" element={<SignupPage/>}></Route>
           <Route path="/admin" element={<Admin/>}></Route>
           <Route path="/dash" element={<Dash/>}></Route>
           <Route path="/adminindex" element={<Adminindex/>}></Route>
           <Route path="/prodform" element={<Productaddform/>}></Route>
           <Route path="/prodata" element={<Showproddata/>}></Route>
           <Route path="/alldata" element={<Showdata/>}></Route>
          {/*
          <Route path="/address" element={<PrivateRoute><Address/></PrivateRoute>}></Route>
           <Route path="/payment" element={<PrivateRoute><Payment/></PrivateRoute>}></Route>
          <Route path="/rings" element={<Rings/>}></Route>
          <Route path="/solitaires" element={<Solitaires/>}></Route>
          <Route path="/earrings" element={<Earrings/>}></Route>
           <Route path="/jewellery" element={<Jewellery />}></Route>
           <Route path="/footer" element={<Footer/>}></Route>
           <Route path="/gift" element={<Gifting/>}></Route>
           <Route path="/personalised" element={<Personalised/>}></Route>
           <Route path="/birthday" element={<Birthday/>}></Route>
           <Route path="/pop" element={<Overview />}></Route>
           <Route path="/price" element={<Price/>}></Route>           
           <Route path="/gold" element={<DigitalGold/>}></Route>
        {/*<Route path="/products/:id" element={<ProductDetails/>}></Route>*/}
        </Routes>
      </div>
  )
}