import React from 'react';
import NavbarComponent from '../components/NavbarComponent';
import {Table} from 'react-bootstrap';
import productImage14 from '../Images/product14.jpg';
import productImage5 from '../Images/product5.jpg';
export default function Mycart(){
    return(
        <div>
             <NavbarComponent />
<h1 className="text-center"> MY CART </h1>
<Table striped bordered hover>
        <thead>
            <tr>
            <th>Sr No</th>
            <th> Name</th>
            <th>Image</th>
            <th>QTY</th>
            <th>Price</th>
            <th>Total Price</th>
            </tr>
        </thead> 

        <tfoot>
            <tr>
            <th>Sr No</th>
            <th> Name</th>
            <th>Image</th>
            <th>QTY</th>
            <th>Price</th>
            <th>Total Price</th>
            </tr>
        </tfoot> 

        <tbody>
            <tr>
                <th>1</th>
                <th>Iphone XR</th>
                <th><img width="200px" height="200px" src={productImage5}/></th>
                <th>1</th>
                <th>70,000</th>
                <th>70,000</th>
            </tr>
            <tr>
                <th>2</th>
                <th>Macbook Pro</th>
                <th><img width="200px" height="200px" src={productImage14}/></th>
                <th>2</th>
                <th>90,000</th>
                <th>1,80,000</th>
            </tr>
        </tbody>



</Table>




<button className="btn btn-lg btn-success float-right place_order_btn"> Place Order</button>
        </div>
    );
}