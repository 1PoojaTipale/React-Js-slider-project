import  React,{useState}  from 'react'
import NavbarComponent from '../components/NavbarComponent';


export default  function Register_second(){

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

        const[values,setValues]=useState
        (
            {
            name:'',
            email:'',
            password:'',
            error:false,
            success:false
            }
        );


        const{ name, email,password,error,success}=values;

            const handleChange=inputtype_name=>event=>
            {
                setValues( {...values,[inputtype_name]:event.target.value } );
               
            };
        








    return(
            <div> 
             <NavbarComponent/>
            
             <div className="row">
    <div className="col-lg-4"></div>
     <div className="col-lg-4">
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
        <button className="btn btn-danger mx-auto d-block"> Register</button>
        </div>
 </div>
     <div className="col-lg-4">

            <ul>
            <li> Name:{name}</li>        
            <li> Email:{email}</li>        
            <li> Password:{password}</li>        

            </ul>
     </div>
             </div>

         </div>
      
    )

}