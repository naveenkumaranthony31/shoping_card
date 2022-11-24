import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Cards';
import CartIteam from './CartIteam';
import { useState } from 'react';


function App() {
const product=[
  {
    id:1,
    title:'vivo',
    price:15000,
    Image:"../Images/vivo - Copy.jpg"
  },
  {
    id:2,
    title:'moto',
    price:13000,
    Image:"../Images/moto1.jpg"
  },
  {
    id:3,
    title:'onePluse',
    price:45000,
    Image:"../Images/oneplus.jpg"
  },
  {
    id:4,
    title:'samsung',
    price:14000,
    Image:"../Images/samsung1.jpg"
  },
  {
    id:5,
    title:'Realme',
    price:11000,
    Image:"../Images/realme1.jpg"
  },
  {
    id:6,
    title:'oppo',
    price:16000,
    Image:"../Images/oppo.jpg"
  },
]
const [cart,setCart]=useState([]);
const [total,setTotal]=useState(0);

let Addcard=(item)=>{
  setCart([...cart,item])
  setTotal(total+item.price)
  
};

let removeFromCart=(item)=>{ 
  let index= cart.findIndex((obj)=>obj.id===item.id);
  cart.splice(index,1);
  setCart([...cart]);
  setTotal(total-item.price)
}
  return (
    <div className="container"> 
    <div className='row'>
      <div className='col-lg-8 '>
        <div className='row'>
          {
            product.map((item)=>{
              return(<Cards item={item} handle={Addcard}></Cards>)
            })
          }
        </div>
        </div>

        <div className='col-lg-4'>
{
  cart.length===0?<div className='mt-2'>No items in Cards</div>:
  <ol class="list-group list-group-numbered mt-2">
    {cart.map((cartIteam)=>{
   return <CartIteam cartIteam={cartIteam} CartIteam={cart} removeFromCart={removeFromCart}></CartIteam>
    }
    )}
    <h1>Total={total}</h1>
  </ol>
  
}
        </div>

      </div>
      </div>
    
  )
}

export default App;
