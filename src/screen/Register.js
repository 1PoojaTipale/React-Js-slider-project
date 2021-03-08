import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavbarComponent from '../components/NavbarComponent';
function Register() {
    return (
      <div >
           <NavbarComponent />
    
           <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 my_login_div">
              <h1 className="text-center">Register</h1>

            <div className="form-group">
              <label>Email <span className="text-danger">*</span></label>
              <input type="email" required  placeholder="Enter Your Email"  className="form-control"/>
              </div>
            <div className="form-group">
              <label>Password <span className="text-danger">*</span></label>
              <input type="password" required  placeholder="Enter Your Password"  className="form-control"/>
              </div>
            <div className="form-group">
              <label>Mobile Number <span className="text-danger">*</span></label>
              <input type="number" required  placeholder="Enter Your Mobile Number"  className="form-control"/>
              </div>
            <div className="form-group">
              <label>Address <span className="text-danger">*</span></label>
              <input type="text" required  placeholder="Enter Your Address"  className="form-control"/>
              </div>
            <div className="form-group">
              <button className=" mx-auto d-block  btn-lg btn btn-danger">Register</button>
              </div>
            {/* <div className="form-group">
              <h4 className="text-center"> OR</h4>
              </div>

              <div className="form-group">
              <Link  to="/Register"className=" mx-auto d-block  btn-lg btn btn-danger">Register</Link>
              </div> */}

            </div>
            <div className="col-lg-4"></div>
          </div>
      


      </div>
      
    );
  }
  
  export default Register;