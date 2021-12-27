import React from 'react'
import './Item.css'
import Headphones from './Headphones.jpg'

export default function Item(props) {
    console.log("props",props)
    return (
        <div>
             <div class="items">
        <img class="imgsizechange" src={props.itemimg}></img>
        <div class="item-details">
            <p class="title">{props.title}</p>
            <p class="ammount">{props.amount}</p>
            <p class="currency">AED</p>
            <p class="canceled-text">3200.00</p>
            <p class="canceled-text">AED</p>
            <br></br>
            <span class="discount">40% off</span>
            <span class="shipping">Free Shipping</span>
        </div>
    </div>

        </div>
    )
}
