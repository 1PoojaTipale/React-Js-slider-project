import React  from 'react';
import NavbarComponent from '../components/NavbarComponent';
import { Function_insert_product} from './API2';
import '../App.css';
import { useState } from 'react';

 export default function Insert_product(){



    const [myvalues,setMyvalues] = useState(
        {
         name:'',
         description:'',

        price:1200 ,
        category:'6035f3b567d4d03e34231252'
        }
    );

    
    const{ name, description,price,category}=myvalues;

    const handleChange=input_type_name=>event=>
    {
        setMyvalues({...myvalues,[input_type_name]:event.target.value})
        
    }



    const  onSubmit =event=>
            {
                event.preventDefault();
                setMyvalues({...myvalues,error:false});
                Function_insert_product({ name,description,price,category})
                .then(data=>{
                    if(data.error)
                    {
                        // setValues({...myvalues,error:data.error,success:false});
                        console.log('error is there')
                    }
                    else{
                        // updatedatafromBackendadd(data);
                        console.log(data);
                        setMyvalues({
                            ...myvalues,
                            name:"",
                           description:"",
                            price:"",
                            
                        });
                    }
                })
            };


     return(
   <div>
              <NavbarComponent/>
            
            <div className="row bg-secondary">
                <div className="col-lg-12   text-white">
                    <div className="myproduct_insert_div">
                <h1 className="text-center"> Insert Product Information</h1>
              
             <div className="form-group">
                <label>Product Name<span>*</span></label>
                <input placeholder="Enter Product Name" onKeyUp={handleChange("name")} type="text" className="form-control"/>
            </div>
            <div className="form-group">
                <label>Product Description<span>*</span></label>
            <textarea cols="30" rows="10" onKeyUp={handleChange("description")} className="form-control"></textarea>
            </div>
            <div className="form-group">
                <label>Product Price<span>*</span></label>
                <input placeholder="Enter Product Price" onKeyUp={handleChange("price")} type="number"className="form-control"/>
            </div>
{/* 
            <div className="form-group">
                <label>Category <span>*</span></label>
                <input   onKeyUp={handleChange("6035f3b567d4d03e34231252")} type="text"className="form-control"/>
            </div> */}

            <div className="form-group">
               <button onClick={onSubmit} className="btn btn-danger"> Submit</button>
    
            </div>

<p>
    <h1> Entered Value</h1>
        <ul>
            <li> Product Name:{myvalues.name} </li>
            <li> Product Description:{myvalues.description} </li>
            <li> Product Price:{myvalues.price} </li>
            {/* <li> Product Category:{myvalues.category} </li> */}
        </ul>
    
</p>




            </div>
               </div>
               </div>
      </div>
     )
 }