import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";
import{Function_loginAPI} from './API2';
import NavbarComponent from '../components/NavbarComponent';
import { useState } from 'react';

function Login() {

  const [myvalues,setMyvalues] = useState(
    {
      email:'',
      password:'',
      error:false,
      errorMSG:'',
      success:false
    }
  );



  const mySuccessDiv=()=>
        {
            return(
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4 datamsg">
                        <div className="alert alert-success">
                            Account Create Successfully!!!!
                            Now You Can Login...<Link to="login">Click Here For Login</Link>
                        </div>
                    </div>
               
                </div>
            );
        }

        const{ email,password,error,errorMSG,success}=myvalues;

        const myErrorDiv=()=>
        {
            return(
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4 datamsg">
                        <div className="alert alert-danger">
                            Error in Login:please Try Again!!!!
                         
                        </div>
                    </div>
               
                </div>
            );
        }

    const myMsgDiv=()=>
    {
        if (error=== true)
        {
            return myErrorDiv();

        }
        else if (success===true)
        {
            return mySuccessDiv();
        }
    }

    const  onSubmit =event=>
    {
        event.preventDefault();
        setMyvalues({...myvalues,error:false});
        Function_loginAPI({email,password})
        .then(data=>{
            if(data.error)
            {
                setMyvalues({...myvalues,error:true,errorMSG:data.error,success: false});
            }
       
            else{
                setMyvalues({...myvalues,success:true});

                // updatedatafromBackendadd(data);
                console.log(data);
                setMyvalues({
                    ...myvalues,
                    name:"",
                    email:"",
                    password:"",
                    error:false,
                    success:true
                });
            }
        })
    };





















    // const {email,password}=myvalues;



        const handleChange=inputtype_name=>event=>
        {
            setMyvalues( {...myvalues,[inputtype_name]:event.target.value } );
           
        };





    return (
      <div>          
         <NavbarComponent />
         {myMsgDiv()}
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 my_login_div">
              <h1 className="text-center">Login</h1>

            <div className="form-group">
              <label>Email <span className="text-danger">*</span></label>
              <input type="email" onChange={handleChange("email")} required  placeholder="Enter Your Email"  className="form-control"/>
              </div>
            <div className="form-group">
              <label>Password <span className="text-danger">*</span></label>
              <input type="password" onChange={handleChange("password")} required  placeholder="Enter Your Password"  className="form-control"/>
              </div>
            <div className="form-group">
              <button  onClick={onSubmit}  className=" mx-auto d-block  btn-lg btn btn-success">Login</button>
              </div>
            <div className="form-group">
              <h4 className="text-center"> OR</h4>
              </div>

              <div className="form-group">
              <Link  to="/Register"className=" mx-auto d-block  btn-lg btn btn-danger">Register</Link>
              </div>

            </div>
            <div className="col-lg-4">{myvalues.password}</div>
          </div>
      </div>
      
    );
  }
  
  export default Login;