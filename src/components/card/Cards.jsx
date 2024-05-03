import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Cards = ({ product }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-[300px] rounded-md border relative overflow-hidden transition-transform duration-300 transform hover:scale-105">
      <Link to={`/productdetail/${product.id}`}>
        <img
          src={product.src}
          alt={product.alt}
          onClick={handleClick}
          className="h-[200px] w-full rounded-t-md object-cover transition-opacity duration-300 opacity-100 hover:opacity-80 "
        />
      </Link>
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {product.name}
        </h1>
        <p className="mt-3 text-sm text-red-600 font-semibold ">
          {product.price}
        </p>
        <p>&#11088; &#11088; &#11088; (88)</p>
        <button
          type="button"
          className="mt-4 w-full rounded-sm duration-200 px-2 py-1.5 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Cards;
