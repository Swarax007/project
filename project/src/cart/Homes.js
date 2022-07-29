import React from 'react'
import data from './data'
import Header from './Header'
import Itemcart from './Itemcart'
import './Home.css'
export default function Home() {
    const Home =() =>{
        console.log(data.products)
    }
  return (
    <>
       <main>
        <Header></Header>
        <div className="product ">
        <h1 className='text-center mt-2'/>
        <section className=" py-4 container display-flex ">
          <div className=" row justify-content-center ">
          <div className="products">
          {data.products.map((item,index) =>{
          return(
            <Itemcart
             image ={item.image}
             name={item.name}
              item={item}
               key={index}
              />

          )

          })}
          </div>
          
         
          </div>
        </section>
        </div>
       </main>

        </>
  )
}
