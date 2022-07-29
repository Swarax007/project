import React from 'react'
import {useCart} from 'react-use-cart';
import './Home.css'
 const Itemcart = (props) => {
    const{ addItem }= useCart();
  return (
   <>
<div className='product' key={props.name}>
                <img src={props.image}  alt={props.name}/>
                
                  <div className="product-name">
                <p>
                    {props.name}
                </p>
                </div>
                <div className="product-button">
    <button class="btn btn-success" onClick={() =>addItem(props.item)}>Add to Cart</button>
                
                </div>
                <br></br>
  </div>

</>
  );
}

export default Itemcart;
