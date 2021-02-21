
import NavbarComponent from '../components/NavbarComponent';
import Imageslider from '../components/Imageslider';
function Home() 
{
    return (
      <div >
          
          <NavbarComponent />
          <Imageslider/>
          <h1 className="text-center"> Home Screen</h1>
      </div>
      
    );
  }
  
  export default Home;