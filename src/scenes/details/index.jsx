import React from 'react'

const Details = () => {
  return (
    <section>
        <h3>SNEAKER COMPANY</h3>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <p><span>$125.00</span>50%</p>
        <span>$250.00</span>
        <button> <img src="/images/icon-minus.svg" alt="minus" /> </button>
        <span>0</span>
        <button> <img src="/images/icon-plus.svg" alt="plus" /></button>
        <button><img src="/images/icon-cart.svg" alt="cart" /> Add to cart</button>
    </section>
  )
}

export default Details