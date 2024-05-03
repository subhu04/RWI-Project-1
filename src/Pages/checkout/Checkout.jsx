import React from "react";
import Layout from "../../components/layout/Layout";

const Checkout = () => {
    return (
        <Layout>
        <div className=" flex-wrap md:flex  p-20">
            <div className="md:w-1/2 w-full">
                <h1 className="text-2xl  mb-8">Billing Details</h1>
                <form action="">
                    <label className="text-xs font-semibold  text-gray-400 ">
                        First Name
                    </label>
                    <br />
                    <input
                        className="bg-gray-200  focus:outline-none rounded py-2 px-3 mb-2 w-full h-8 "
                        type="text"
                        placeholder=""
                        required
                    />
                    <br />
                    <label className="text-xs font-semibold  text-gray-400 ">
                        Company Name
                    </label>
                    <br />
                    <input
                        className="bg-gray-200  focus:outline-none rounded py-2 px-3 mb-2 w-full h-8 "
                        type="text"
                        placeholder=""
                    />
                    <br />
                    <label className="text-xs font-semibold  text-gray-400 ">
                        Street Address
                    </label>
                    <br />
                    <input
                        className="bg-gray-200  focus:outline-none rounded py-2 px-3 mb-2 w-full h-8 "
                        type="text"
                        placeholder=""
                        required
                    />
                    <br />
                    <label className="text-xs font-semibold  text-gray-400 ">
                        Apartment, floor, etc.(optional)
                    </label>
                    <br />
                    <input
                        className="bg-gray-200  focus:outline-none rounded py-2 px-3 mb-2 w-full h-8 "
                        type="text"
                        placeholder=""
                    />
                    <br />
                    <label className="text-xs font-semibold  text-gray-400 ">
                        Town/City
                    </label>
                    <br />
                    <input
                        className="bg-gray-200  focus:outline-none rounded py-2 px-3 mb-2 w-full h-8 "
                        type="text"
                        placeholder=""
                        required
                    />
                    <br />
                    <label className="text-xs font-semibold  text-gray-400 ">
                        Phone Number
                    </label>
                    <br />
                    <input
                        className="bg-gray-200  focus:outline-none rounded py-2 px-3 mb-2 w-full h-8 "
                        type="number"
                        placeholder=""
                        required
                    />
                    <br />
                    <label className="text-xs font-semibold  text-gray-400 ">
                        Email Address
                    </label>
                    <br />
                    <input
                        className="bg-gray-200  focus:outline-none rounded py-2 px-3 mb-2 w-full h-8 "
                        type="email"
                        placeholder=""
                        required
                    />
                    <br />
                </form>
                <div className="flex">
                    <input type="checkbox" className="" />
                    <p className="text-xs">
                        Save this information for faster check-out next time
                    </p>
                </div>
            </div>

            {/* items to checkout  */}
            <div className=" w-full md:w-1/2 px-4 md:px-20 py-20">
                <div>
                    <div className=" flex justify-between pt-6">
                        <div className="flex">
                            <img
                                className="w-7 h-7  mr-2"
                                src="https://www.lifewire.com/thmb/3GpoaR1VxXFOiY9-m8yT8S0lQX8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/LG-22-28-LG4540-LED-LCD-TV-AMZN-xxx-58ceff565f9b581d726af2ca-b12a1544bfda41418aaaf0afb6aa0375.jpg"
                                alt="lcd"
                            />
                            <p className="text-sm ">LCD Monitor</p>
                        </div>
                        <div className="text-sm ">$650</div>
                    </div>
                    <div className=" flex justify-between pt-6 border-b-2 border-black-200 pb-2">
                        <p className="text-sm ">Subtotal:</p>
                        <p className="text-sm ">$650</p>
                    </div>
                    <div className=" flex justify-between pt-6 border-b-2 border-black-200 pb-2">
                        <p className="text-sm ">Shipping:</p>
                        <p className="text-sm ">$65</p>
                    </div>
                    <div className=" flex justify-between pt-6">
                        <p className="text-sm ">Total:</p>
                        <p className="text-sm ">$650</p>
                    </div>
                </div>
                <div className=" flex  pt-6">
                    <div className="w-1/2">
                        <input type="radio" className="mr-2" />
                        <label className="text-sm" htmlFor="">
                            Bank
                        </label>
                    </div>
                    <div className="w-1/2">
                        <img
                            src="https://banner2.cleanpng.com/20180621/gbj/kisspng-mastercard-discover-card-payment-american-express-visa-master-card-5b2c0ef970bc34.0760117415296140734618.jpg"
                            className="h-7 w-full"
                            alt=" bank image"
                        />
                    </div>
                </div>
                <div className=" flex  pt-6 ">
                    <input type="radio" className="mr-2" />
                    <label className="text-sm" htmlFor="">
                        Cash on delivery
                    </label>
                </div>

                <div className=" flex mt-7">
                    <input
                        className="bg-gray-200  focus:outline-none  rounded py-2 px-3 mb-2  w-2/3 h-9  "
                        type="text"
                        placeholder=" Coupon code"
                    />
                    <button className=" bg-red-600 w-1/2 h-9 ml-6 rounded-sm text-white text-xs  hover:bg-red-800 ">
                        Apply Coupon
                    </button>
                </div>
                <div className="w-full ">
                    <button className=" bg-red-600 w-1/3 h-9 ml-6 rounded-sm text-white text-xs  hover:bg-red-800 ">
                        Place order
                    </button>
                </div>
            </div>
        </div>
        </Layout>
    );
};

export default Checkout;
