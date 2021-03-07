
import NavbarComponent from '../components/NavbarComponent';
import productImage6 from '../Images/product6.jpg';
import {BrowserRouter , Switch,Route, Link } from "react-router-dom";
import {Button }from "react-bootstrap";
function ProductInformation()
{
        return(
            <div>
                 <NavbarComponent />
                 <div class="row">
                 <div className="col-lg-6 text-center productInfoDiv">
                     <div className="row">
                         <div className="col-lg-12">
                         <img className="mx-auto d-block productImage " src={productImage6}/>
                         </div>

                         <div className="col-lg-12">
                         <button className="addToCartButton">GO TO CART</button>
                         <button className="buyNowButton">BUY NOW</button>
                         </div>

                         </div>
                
                </div>
                 <div className="col-lg-6 secondDivProduct productInfoDiv">
                <h2>Ambrane Vibe Beats True Wireless Bluetooth Headset </h2>
                <p>
                    <h6>Special Price</h6><h4>₹1,999</h4><span><del> ₹3,999 </del></span><span className="text-success"><b>50% off</b></span>
                
                <h4 className="avoffer">Available offers</h4>
                <ul>
                <li><span><b>Bank Offer</b></span>5% Unlimited Cashback on Flipkart Axis Bank Credit Card<Link to="/">T&C</Link></li>
                <li><span><b>Bank Offer</b></span>10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply<Link to="/">T&C</Link></li>
                <li><span><b>Bank Offer</b></span>5% off upto ₹25 on any prepaid instrument<Link to="/">T&C</Link></li>
                <li><span><b>Partner Offer</b></span>Buy now and Get 6 months Free Spotify Premium TrialKnow More</li>
                <li>No Cost EMI on Flipkart Axis Bank Credit Card<Link to="/">T&C</Link></li>

                </ul>
                </p>
                </div>
            
            
            {/* <div className="col-lg-6">

                <div className="row">
                    <div className="col-lg-6">
                    <button className="addToCartButton">GO TO CART</button>
                    </div>
                    <div className="col-lg-6">
                    <button className="buyNowButton">BUY NOW</button>
                    </div>
                    </div>
            </div> */}
            </div>
            </div>
        );
}
export default ProductInformation;