import React, { useState } from 'react';

const Details = ({ addToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => setQuantity(quantity + 1);
  const handleMinus = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  const handleAddToCart = () => {
    addToCart({
      title: 'Fall Limited Edition Sneakers',
      price: 125,
      quantity,
      thumbnail: '/images/image-product-1-thumbnail.jpg',
    });
  };

  return (
    <section>
      <h3 className="text-blue-300 text-[10px] font-bold tracking-widest mb-4">
        SNEAKER COMPANY
      </h3>
      <h1 className="text-black-100 font-bold text-2xl lg:text-4xl tracking-wider mb-6">
        Fall Limited Edition <br />
        Sneakers
      </h1>
      <p className="text-blue-300 text-sm lg:text-md tracking-wide mb-4">
        These low-profile sneakers are your perfect casual wear <br />{" "}
        companion. Featuring a durable rubber outer sole, they’ll <br />{" "}
        withstand everything the weather can offer.
      </p>
      <div className="flex lg:flex-col items-center lg:items-start justify-between mb-3">
        <div className="flex gap-3 items-center">
          <p className="text-2xl font-bold text-black-100">$125.00</p>
          <span className="h-5 w-9 bg-black-100 text-white-100 text-sm rounded-md flex items-center p-1">
            50%
          </span>
        </div>
        <span className="text-blue-300 text-sm font-semibold line-through">$250.00</span>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 w-full mb-3 ">
        <div className="bg-blue-100 rounded-md p-2 flex items-center justify-between gap-4 w-full lg:w-[40%]">
          <button onClick={handleMinus}>
            <img src="/images/icon-minus.svg" alt="minus" />
          </button>
          <span>{quantity}</span>
          <button onClick={handleAdd}>
            <img src="/images/icon-plus.svg" alt="plus" />
          </button>
        </div>
        <button 
          className="flex items-center gap-2 justify-center bg-orange-2 p-2 rounded-md w-full lg:w-[60%]"
          onClick={handleAddToCart}
        >
          <img src="/images/icon-cart.svg" alt="cart" className="h-3 w-3" />
          <p className="text-sm text-black-100 font-bold">Add to cart</p>
        </button>
      </div>
    </section>
  );
};

export default Details;
