import React from 'react';
import './Itemdetails.css';
import shoppingcarticon from './shopping-cart.png'


export default function Itemdetails(props) {
    return (
        <div>
             <div class="uppersection">
        <button class="backbutton">&#8249;</button>
    </div>
    <div class="imgcontainer">
        <img class="itemimg" src={props.itemimg} alt=""/>
    </div>
    <div class="itemdetails">
        <p class="title2">{props.title}</p>
        <p class="price">{props.amount}</p>
    </div>
    <span class="shipping2">Free Shipping</span>
    <button class="buybutton">Buy <img class="icon" src={shoppingcarticon} alt=""/></button>
        </div>
    )
}
