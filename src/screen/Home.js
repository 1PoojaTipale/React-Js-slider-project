
import NavbarComponent from '../components/NavbarComponent';
import Imageslider from '../components/Imageslider';
import productImage2 from '../Images/product2.jpg';
import productImage3 from '../Images/product3.jpg';
import productImage4 from '../Images/product4.jpg';
import productImage5 from '../Images/product5.jpg';
import productImage6 from '../Images/product6.jpg';
import productImage7 from '../Images/product7.jpg';
import productImage8 from '../Images/product8.jpg';
import productImage9 from '../Images/product9.jpg';
import productImage10 from '../Images/product10.jpg';
import productImage11 from '../Images/product11.jpg';
import productImage12 from '../Images/product12.jpg';
import productImage13 from '../Images/product13.jpg';

import My_card_component from '../components/My_card_component';
import '../App.css';
function Home() 
{
    return (
      <div >
          
          <NavbarComponent />
          <Imageslider/>
          <h1 className="myheading text-center"> My Products</h1>
          <div className="row">
            {/* <div className="col-lg-3">
        <My_card_component product_image={productImage2} product_name="Sony Cyber-shot DSC-RX100M3 " product_price="₹43,649" product_description="Abx8089-WH BR Brown Leather Strap Date Feature Water-Resistant Quartz Boys Analog Watch - For Men"/> 
        </div> */}

        {/* <div className="col-lg-3">
        <My_card_component product_image={productImage3} product_name="MLN T500 Bluetooth Calling Function Smartwatch" product_price="₹1,187" product_description="This watch support IOS 9.0 and above, Android 5.0 and above Box Content ."/> 
        </div>
        <div className="col-lg-3">
        <My_card_component product_image={productImage4} product_name="Apple MacBook Air Core i5 5th Gen - (8 GB/128 GB SSD/Mac OS Sierra) MQD32HN/A  (13.3 inch, Silver, 1.35 kg)" product_price="₹1,187" product_description="Stylish & Portable Thin and Light Laptop
13.3 inch Quad HD LED Backlit IPS Retina Display (227 ppi, 16:10 Aspect Ratio, True Tone Technology)
Finger Print Sensor for Faster System AccessLight Laptop without Optical update from mar 2021, please do check the internet for macbook m1 ssd wear issue due to swap usage."/> 
        </div> */}
        <div className="col-lg-3">
        <My_card_component product_image={productImage5} product_name="Sony Cyber-shot DSC-RX100M3 " product_price="₹43,649" product_description="The camera is a great an camera and can take great shots."/> 
        </div>
        <div className="col-lg-3">
        <My_card_component product_image={productImage6} product_name="Ambrane Vibe Beats True Wireless Bluetooth Headset" product_price="₹43,649" product_description="The camera is a great an camera and can take great shots."/> 
        </div>
        <div className="col-lg-3">
        <My_card_component product_image={productImage5} product_name="Sony Cyber-shot DSC-RX100M3 " product_price="₹43,649" product_description="The camera is a great an camera and can take great shots."/> 
        </div>
        <div className="col-lg-3">
        <My_card_component product_image={productImage6} product_name="Sony Cyber-shot DSC-RX100M3 " product_price="₹43,649" product_description="The camera is a great an camera and can take great shots."/> 
        </div>
        <div className="col-lg-3">
        <My_card_component product_image={productImage5} product_name="Sony Cyber-shot DSC-RX100M3 " product_price="₹43,649" product_description="The camera is a great an camera and can take great shots."/> 
        </div>
        <div className="col-lg-3">
        <My_card_component product_image={productImage6} product_name="Sony Cyber-shot DSC-RX100M3 " product_price="₹43,649" product_description="The camera is a great an camera and can take great shots."/> 
        </div>
        <div className="col-lg-3">
        <My_card_component product_image={productImage5} product_name="Sony Cyber-shot DSC-RX100M3 " product_price="₹43,649" product_description="The camera is a great an camera and can take great shots."/> 
        </div>
        <div className="col-lg-3">
        <My_card_component product_image={productImage6} product_name="Sony Cyber-shot DSC-RX100M3 " product_price="₹43,649" product_description="The camera is a great an camera and can take great shots."/> 
        </div>
        {/* <div className="col-lg-3">
        <My_card_component product_image={productImage7} product_name="Sony Cyber-shot DSC-RX100M3 " product_price="₹43,649" product_description="The camera is a great an camera and can take great shots."/> 
        </div>
        <div className="col-lg-3">
        <My_card_component product_image={productImage8} product_name="Sony Cyber-shot DSC-RX100M3 " product_price="₹43,649" product_description="The camera is a great an camera and can take great shots."/> 
        </div> */}
        {/* <div className="col-lg-3">
        <My_card_component product_image={productImage9} product_name="Sony Cyber-shot DSC-RX100M3 " product_price="₹43,649" product_description="The camera is a great an camera and can take great shots."/> 
        </div> */}
        {/* <div className="col-lg-3">
        <My_card_component product_image={productImage10} product_name="Sony Cyber-shot DSC-RX100M3 " product_price="₹43,649" product_description="The camera is a great an camera and can take great shots."/> 
        </div>
        <div className="col-lg-3">
        <My_card_component product_image={productImage11} product_name="Sony Cyber-shot DSC-RX100M3 " product_price="₹43,649" product_description="The camera is a great an camera and can take great shots."/> 
        </div>
        <div className="col-lg-3">
        <My_card_component product_image={productImage12} product_name="Sony Cyber-shot DSC-RX100M3 " product_price="₹43,649" product_description="The camera is a great an camera and can take great shots."/> 
        </div>
        <div className="col-lg-3">
        <My_card_component product_image={productImage13} product_name="Sony Cyber-shot DSC-RX100M3 " product_price="₹43,649" product_description="The camera is a great an camera and can take great shots."/> 
        </div> */}




      </div>
      </div>
      
    );
  }
  
  export default Home;