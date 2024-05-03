import React from "react";
import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Cart = () => {
  return (
    <>
      <Layout>
        <div className="m-[50px]  ">
          <div className="grid grid-cols-4  m-[20px]  p-[20px] borde rounded-[8px] shadow-md shadow-gray-500">
            <h1>Product</h1>
            <h1>Quantity</h1>
            <h1>Price</h1>
            <h1>Subtotal</h1>
          </div>

          <div className=" grid grid-cols-4  m-[20px] p-[20px] border rounded-[8px]  shadow-md shadow-gray-500">
            <div className="flex">
              <img
                className="w-7 h-7  mr-2"
                src="https://www.lifewire.com/thmb/3GpoaR1VxXFOiY9-m8yT8S0lQX8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/LG-22-28-LG4540-LED-LCD-TV-AMZN-xxx-58ceff565f9b581d726af2ca-b12a1544bfda41418aaaf0afb6aa0375.jpg"
                alt="lcd"
              />
              <h1>LCD</h1>
            </div>

            <input
              className="  w-[50px] h-[30px]"
              type="Number"
              placeholder="1"
            ></input>
            <h2>$650</h2>
            <h2>$650</h2>
          </div>

          <div className="grid grid-cols-4  m-[20px]  p-[20px]  border rounded-[8px]  shadow-md shadow-gray-500">
            <div className="flex ">
              <img
                className="w-7 h-7  mr-2"
                src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRIMOrnOTyJaAksJtk4kq9kO43eanxwm4OStx15bXxt92Qwh1gZEK2Vheq1bBvnnoTbIHyciF_AOtj0D03Qun-Ce7ODrwUEQXS5C4xBNh62Zs4wDHF3KW_X&usqp=CAE"
                alt="lcd"
              />
              <h1>H1 Gamepad</h1>
            </div>
            <input
              className="  w-[50px]"
              placeholder="1"
              type="Number"
            ></input>
            <h2>$550</h2>
            <h2>$1100</h2>
          </div>
          <div className=" flex justify-between m-[20px]  ">
            <div>
              {/* Use Link component */}
              <Link to="/shop" className="bg-[red] w-[150px]  h-[40px]   hover:bg-red-500  text-white py-3 px-8 rounded-[5px] text-sm">Return To Shop</Link>
            </div>
            <div>
              {/* Use Link component */}
              <Link to="/cart/update" className="bg-[red] w-[150px]  h-[40px]   hover:bg-red-500  text-white py-3 px-8 rounded-[5px] text-sm">Update Cart</Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 m-12">
            <div className="grid md:grid-cols-2 gap-2">
              <input
                className=" border-black-400 px-5  border-2 w-[300px] h-[40px] rounded-[5px] "
                placeholder="Coupon Code"
              ></input>
              <button className="bg-[red] w-[150px]  h-[40px]   hover:bg-red-500  text-white  rounded-[5px] text-sm ">
                Apply Coupon
              </button>
            </div>

            <div className=" w-[300px] lg:w-[500px]   p-[15px] mt-2 border-black  py-7 border-2  ">
              <div className="flex justify-between border-b-2 mb-4 ">
                <h1>Subtotal:</h1>
                <h2>$1750</h2>
              </div>

              <div className="flex justify-between border-b-2 mb-4">
                <h1>Shipping:</h1>
                <h2>Free</h2>
              </div>

              <div className="flex justify-between">
                <h1>Total:</h1>
                <h2>$1750</h2>
              </div>

              <div className="flex justify-center mt-8">
                {/* Use Link component */}
                <Link to="/cart/checkout" className="bg-red-600 hover:bg-red-500 text-white p-2 rounded">Process to checkout</Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Cart;
