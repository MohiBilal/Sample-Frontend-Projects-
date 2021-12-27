import React from 'react'
import './Item.css'
import logo from './headphones.jpg'

export default function Item(props) {
    console.log("props",props)
    return (
        <div>
             <div class="items">
        <img class="imgsizechange" src={props.logo}></img>
        <div class="item-details">
            <p class="title">Lorem ipsum dolor, sit amet conse<br></br>ctetur adipisicing elit.</p>
            <p class="ammount">2799.00</p>
            <p class="currency">AED</p>
            <p class="canceled-text">3200.00</p>
            <p class="canceled-text">AED</p>
            <br></br>
            <span class="discount">40% off</span>
            <span class="shipping">Free Shipping</span>
        </div>
    </div>

    {/* <div class="items">
        <img class="imgsizechange" src="mobile.png" alt=""></img>
        <div class="item-details">
            <p class="title">Lorem ipsum dolor, sit amet conse<br></br>ctetur adipisicing elit.</p>
            <p class="ammount">2799.00</p>
            <p class="currency">AED</p>
            <p class="canceled-text">3200.00</p>
            <p class="canceled-text">AED</p>
            <br></br>
            <span class="discount">40% off</span>
            <span class="shipping">Free Shipping</span>
        </div>
    </div>

    <div class="items">
        <img class="imgsizechange" src="perfume.jpeg" alt=""></img>
        <div class="item-details">
            <p class="title">Lorem ipsum dolor, sit amet conse<br></br>ctetur adipisicing elit.</p>
            <p class="ammount">2799.00</p>
            <p class="currency">AED</p>
            <p class="canceled-text">3200.00</p>
            <p class="canceled-text">AED</p>
            <br></br>
            <span class="discount">40% off</span>
            <span class="shipping">Free Shipping</span>
        </div>
    </div>

    <div class="items">
        <img class="imgsizechange" src="gatorade.jpg" alt=""></img>
        <div class="item-details">
            <p class="title">Lorem ipsum dolor, sit amet conse<br></br>ctetur adipisicing elit.</p>
            <p class="ammount">2799.00</p>
            <p class="currency">AED</p>
            <p class="canceled-text">3200.00</p>
            <p class="canceled-text">AED</p>
            <br></br>
            <span class="discount">40% off</span>
            <span class="shipping">Free Shipping</span>
        </div>
    </div> */}
        </div>
    )
}
