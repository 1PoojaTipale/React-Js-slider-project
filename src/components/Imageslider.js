
import{Carousel }from 'react-bootstrap'
import Img1 from '../Images/1.jpg'
import Img2 from '../Images/2.jpg'
import Img3 from '../Images/3.jpg'
// import NavbarComponent from '../components/NavbarComponent';
function Imageslider() {
    return (
      <div >
           <Carousel>
  <Carousel.Item>
    <img
    height="600"
     
      className="d-block w-100"
      src={ Img1}
      alt="First slide"
    />
    {/* <Carousel.Caption >
      <h3 >Healthy </h3>
      <p>Health is Wealth.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
    height="600"
      className="d-block w-100"
      src={ Img2}
      alt="Second slide"
    />

    {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
    height="600"
      className="d-block w-100"
      src={ Img3}
      alt="Third slide"
    />

    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>
      </div>
      
    );
  }
  
  export default Imageslider;