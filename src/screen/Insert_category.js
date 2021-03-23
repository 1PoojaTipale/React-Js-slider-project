// import React  from 'react';
// import NavbarComponent from '../components/NavbarComponent';
// import { Function_insert_category} from './API2';
// import '../App.css';
// import { useState } from 'react';

//  export default function Insert_category(){



//     const [myvalues,setMyvalues] = useState(
//         {
//          name:'',
        
//         id:'6035f30667d4d03e34231251'
//         }
//     );

    
//     const{ name,id}=myvalues;

//     const handleChange=input_type_name=>event=>
//     {
//         setMyvalues({...myvalues,[input_type_name]:event.target.value})
        
//     }



//     const  onSubmit =event=>
//             {
//                 event.preventDefault();
//                 setMyvalues({...myvalues,error:false});
//                 Function_insert_category({ name})
//                 .then(data=>{
//                     if(data.error)
//                     {
//                         // setValues({...myvalues,error:data.error,success:false});
//                         console.log('error is there')
//                     }
//                     else{
//                         // updatedatafromBackendadd(data);
//                         console.log(data);
//                         setMyvalues({
//                             ...myvalues,
//                             name:"",
//                            id:""
                            
//                         });
//                     }
//                 })
//             };


//      return(
//    <div>
//               <NavbarComponent/>
            
//             <div className="row bg-secondary">
//                 <div className="col-lg-12   text-white">
//                     <div className="myproduct_insert_div">
//                 <h1 className="text-center"> Insert category Information</h1>
              
//              <div className="form-group">
//                 <label>category Name<span>*</span></label>
//                 <input placeholder="Enter category Name" onKeyUp={handleChange("name")} type="text" className="form-control"/>
//             </div>
     
// {/* 
//             <div className="form-group">
//                 <label>Category <span>*</span></label>
//                 <input   onKeyUp={handleChange("6035f3b567d4d03e34231252")} type="text"className="form-control"/>
//             </div> */}

//             <div className="form-group">
//                <button onClick={onSubmit} className="btn btn-danger"> Submit</button>
    
//             </div>

// <p>
//     <h1> Entered Value</h1>
//         <ul>
//             <li> category Name:{myvalues.name} </li>
          
//             {/* <li> category Category:{myvalues.category} </li> */}
//         </ul>
    
// </p>




//             </div>
//                </div>
//                </div>
//       </div>
//      )
//  }