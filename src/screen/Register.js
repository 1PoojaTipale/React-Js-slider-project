import  React,{useState}  from 'react'
import NavbarComponent from '../components/NavbarComponent';
import  {Function_registerAPI} from './API2';
import {
    BrowserRouter ,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default  function Register(){

    // const[name,changeMyName]=useState();
    // const[email,changeMyEmail]=useState();
    // const[password,changeMyPassword]=useState();

    // const updateMyName =(e)=>
    // {
    //     changeMyName(e.target.value) ;
    // }
    // const updateMyemail =(e)=>
    // {
    //     changeMyEmail(e.target.value) ;
    // }
    // const updateMypassword =(e)=>
    // {
    //     changeMyPassword(e.target.value) ;
    // }

        const[myvalues,setValues]=useState
        (
            {
            name:'',
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

        const{ name, email,password,error,errorMSG,success}=myvalues;

        const myErrorDiv=()=>
        {
            return(
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4 datamsg">
                        <div className="alert alert-danger">
                            Error in Registration:please Try Again!!!!
                         
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
        

        const[datafromBackend,updatedatafromBackendadd]=useState();

        // const{ name, email,password,error,success}=myvalues;

            const handleChange=inputtype_name=>event=>
            {
                setValues( {...myvalues,[inputtype_name]:event.target.value } );
               
            };
        


            const  onSubmit =event=>
            {
                event.preventDefault();
                setValues({...myvalues,error:false});
                Function_registerAPI({name,email,password})
                .then(data=>{
                    if(data.error)
                    {
                        setValues({...myvalues,error:true,errorMSG:data.error,success: false});
                    }
                  else  if(data.err)
                    {
                        setValues({...myvalues,error:true,errorMSG:data.err,success: false});
                    }
                    else{
                        setValues({...myvalues,success:true});

                        updatedatafromBackendadd(data);
                        console.log(data);
                        setValues({
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


            




    return(
            <div> 
             <NavbarComponent/>
            
             {myMsgDiv()}
           

             <div className="row">
    <div className="col-lg-4"></div>
     <div className="col-lg-4 my_login_div">
     <h2>Second Register Page</h2>
   <div className="form-group">
         <label htmlFor="">User Name:</label>
         <input type="text" onKeyUp={handleChange("name")} placeholder="Enter Your Name"required className="form-control"/>
     </div>
     <div className="form-group">
         <label htmlFor="">User Email:</label>
         <input type="email" onKeyUp={handleChange("email")}  placeholder="Enter Your Email"required className="form-control"/>
     </div>
     <div className="form-group">
         <label htmlFor="">UserPassword:</label>
         <input type="password" onKeyUp={handleChange("password")}  placeholder="Enter Your Password"required className="form-control"/>
     </div>
     <div className="form-group">
        <button onClick={onSubmit}  className="btn btn-danger mx-auto d-block"> Register</button>
        </div>
 </div>
     <div className="col-lg-4">
{/* 
            <ul>
            <li> Name:{name}</li>        
            <li> Email:{email}</li>        
            <li> Password:{password}</li>   
             </ul> */}

             {/* <p>
                Data From Backend: {JSON.stringify(updatedatafromBackendadd)}
                 </p>  */}
     </div>
             </div>

         </div>
      
    )

}