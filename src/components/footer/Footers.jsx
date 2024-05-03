import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { BiLogoPlayStore } from "react-icons/bi";





export default function Footers() {
  return (
    <>
      <div className="flex justify-around bg-black h-48 w-full max-[660px]:flex-wrap max-[660px]:h-full max-[660px]:w-full px-3">
        <div className="mt-6">
          <h1 className="text-white text-lg font-bold">Exclusive</h1>

          <ul className="text-white mt-2">
            <li>
              <a href="#">Subscribe</a>
            </li>
            <li className="">
              <a className="" href="#">
                <span className="block">get 10% off your first order</span>
                <input
                  className="bg-white mt-2 rounded-sm"
                  placeholder="enter your email"
                />
              </a>
            </li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <h1 className="text-white text-lg font-bold">Support</h1>

          <ul className="text-white">
            <li>
              <a href="#">111 Bijoy sarani, dhaka</a>
            </li>
            <li>
              <a href="#">DH 1515, Bangladesh</a>
            </li>
            <li>
              <a href="#">exclusive@gmail.com</a>
            </li>
            <li>
              <a href="#">+88015-88888-9999</a>
            </li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <ul className="text-white">
            <h1 className="text-white text-lg font-bold">Account</h1>
            <li>
              <Link to="/account">My account</Link>
            </li>
            <li>
              <Link to="loginSignup"> Login/Register</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link to="">Shop</Link>
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <ul className="text-white">
            <h1 className="text-white text-lg font-bold">Quick Link</h1>
            <li>
              {" "}
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of use</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <ul className="text-white">
            <h1 className="text-white text-lg font-bold">Download App</h1>
            <div>
              <h>save $3 with App User Only</h>

              <div className="flex">
                <div className="bg-red-300 h-18 w-12">
                  <img
                    className="h-16 w-12"
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
                <div className="block ml-6 w-24">
                  <div className="flex">
                    <img src="" alt="" />
                    <div className="block">
                      <h6 className="">GET IT ON</h6>
                      <h1>Google play</h1>
                    </div>
                  </div>

                  <div></div>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
