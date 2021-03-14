import  React,{useState}  from 'react'
import NavbarComponent from '../components/NavbarComponent';
import  {Function_registerAPI} from './API2';

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

        const[myvalues,setValues]=useState
        (
            {
            name:'',
            email:'',
            password:'',
            error:false,
            success:false
            }
        );

        const[datafromBackend,updatedatafromBackendadd]=useState();

        const{ name, email,password,error,success}=myvalues;

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
                        setValues({...myvalues,error:data.error,success:false});
                    }
                    else{
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
        <button onClick={onSubmit}  className="btn btn-danger mx-auto d-block"> Register</button>
        </div>
 </div>
     <div className="col-lg-4">

            <ul>
            <li> Name:{name}</li>        
            <li> Email:{email}</li>        
            <li> Password:{password}</li>   
             </ul>

             <p>
                Data From Backend: {JSON.stringify(updatedatafromBackendadd)}
                 </p> 
     </div>
             </div>

         </div>
      
    )

}