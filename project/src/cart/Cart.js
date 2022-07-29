import React from 'react'
import { useCart } from 'react-use-cart'
import './Cart.css'
import data from './data'
import { useState,useEffect } from 'react';
import { Link,useNavigate} from "react-router-dom";


export default function Cart() {
  const[address,setAddress]=useState('')
  const[phone,setPhone]=useState('')
  const navigate = useNavigate()
    
    const submit=async(event)=>{
        await fetch('http://localhost:300/api/donors',{
            method:'POST',
            headers : {
              'Content-Type':'application/json',
      
            },
            body:JSON.stringify({
              items,
              address,
              phone,
            }),
          })
          const data =await submit.json()
          if(data.status === 'ok'){
            navigate('/')
          }
          else{
            alert('Enter all details')
          }
         
          
    
         
    }
    const receive=async()=>{
        await fetch('http://localhost:300/api/receivers',{
            method:'POST',
            headers : {
              'Content-Type':'application/json',
      
            },
            body:JSON.stringify({
              items,
              address,
              phone,
            }),
          })
          
         
    }
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
     } = useCart();
     if(isEmpty) return <h1 className='text-center'>Your Cart is empty</h1>
  return (
    <main>
    <section className='py-4 container'>
    <div className='row justify-content-center'>
        <div className='col-12'>
            <h5>Total Different Items : (   {totalUniqueItems}   )      Total Items Donated : ({totalItems})</h5>
            <table className='table table-light table-hover m-0'>
                <tbody>
                {items.map((item,index) =>{
                    return(
                    <tr key={index}>
                        <td>
                      <img src={item.image} style={{height:'6rem'}}/>
                        </td>
                        <td>
                            {item.name}
                        </td>
                        <td>Quantity ({item.quantity})</td>
                        <td>
                            <button className='btn btn-info ms-2'
                            onClick={() => updateItemQuantity(item.id,item.quantity - 1)}>-</button>
                            <button className='btn btn-info ms-2'
                            onClick={() => updateItemQuantity(item.id,item.quantity + 1)}>+</button>
                            
                            <button className='btn btn-danger ms-2'
                            onClick={() => removeItem(item.id) }>Remove Item</button>


                        </td>
                        
                    </tr>
)
                })}
                </tbody>
                
            </table>
        </div>
        <form>
       
        
        <div id="details">
          <div className="rowi">
            <div id="headerTitle">
            </div>
         <div className="nameControlClasses">
           <div className="left">
        <label htmlFor="address">Address</label>
        </div>
        <div className="right">
       <input type="text"  value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Your Address" /><br></br>
      </div>
      </div>

     
      <div className="passwordControlClasses">
      <div className="left">
        <label htmlFor="phn">Phone number</label>
        </div>
  
        <div className="right">
       <input type="text"  value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Contact Number"/><br></br>

         </div>
      </div>
  
            <>
          
         
          

          
            </>
            
        </div>
        </div>
      

    </form>
        <div><button className='btn btn-danger m-2 mx-12'
                            onClick={() => emptyCart() }>Clear Cart</button>
                            
                            <button className='btn btn-success m-2 mx-12 ' onClick={submit}
                            ><Link to ="/">
                            Donate</Link></button>
                            <button className='btn btn-dark m-2 mx-12 my-3' onClick={receive}
                            ><Link to ="/">
                            Receive</Link></button>
                            </div>
    </div>
    </section>
    </main>
  )
}
