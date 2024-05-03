import React from "react";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
const Featured = () => {
  return (
    <div className="px-10 py-6 relative">
      {/* first section of Featured */}
      <div className="flex">
        <div className="w-3 h-5  bg-red-500 rounded-r-sm"></div>
        <div className="pl-2">
          <h1 className="text-red-500 font-medium">Featured</h1>
        </div>
      </div>
      {/* Second section of Featured */}
      <div className="flex py-1">
        <div>
          <h1 className="font-semibold lg:text-3xl md:text-2xl text-xl">
            New Arrival
          </h1>
        </div>
      </div>
      {/* third section of featured */}
      <div className="lg:flex    w-full h-full my-5  ">
        <div className="w-full lg:1/2 pr-3 relative">
          <img
            className="w-full h-full rounded "
            src="https://cdn.dribbble.com/users/5651874/screenshots/15899062/media/bd9197a70744c4ed4c5c5cd4b0eac1ed.jpg?resize=1000x750&vertical=center"
          />
          <div className="absolute bottom-0 left-0 p-5 text-white">
            <h1 className="text-base md:text-xl lg:text-2xl"> Amazon Mini</h1>
            <button className="text-xs md:text-base lg:text-xl mt-1 underline underline-offset-4">
              Shop Now
            </button>
          </div>
        </div>
        <div className="flex-row w-full lg:1/2 mt-4  lg:mt-0 ">
          <div className="w-full h-1/2 pl-0 lg:pl-3 pr-3  lg:pr-0 relative">
            <img
              className="w-full h-full rounded "
              src="https://cdn.venngage.com/template/thumbnail/small/79d5051d-11fa-4e0d-af4c-adeda6acab91.webp"
              alt=""
            />
            <div className="absolute bottom-0 left-0 ml-2 p-5 text-white">
              <button className="text-xs md:text-base lg:text-xl mt-3 underline underline-offset-4">
                Shop Now
              </button>
            </div>
          </div>
          <div className="flex w/full  h-1/2">
            <div className="w-1/2  pt-3 relative  pl-0 lg:pl-3 pr-3  lg:pr-0">
              <img
                className="w-full h-full rounded "
                src="https://media.istockphoto.com/id/1153246294/photo/xbox-and-playstation-controller-sat-next-to-each-other-on-a-dark-background.jpg?s=612x612&w=0&k=20&c=80MsXNHXs2QWXF3rKd4l6ZmKy_UnY7pS5sGZ58R695c="
                alt=""
              />
              <div className="absolute bottom-0 left-0 ml-2 p-5 text-white">
                <h1 className="text-base md:text-xl lg:text-2xl">
                  {" "}
                  Playstation
                </h1>

                <button className="text-xs mt-1 md:text-base underline underline-offset-4">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="w-1/2   pl-0 lg:pl-3 pr-3  lg:pr-0 pt-3 relative">
              <img
                className="w-full h-full rounded "
                src="https://beardo.in/cdn/shop/products/Beardo_Black_Musk_Perfume_A__Banner_2160x2160_04.jpg?v=1708931496&width=1946"
                alt=""
              />
              <div className="absolute bottom-0 left-0 p-5 ml-2 text-white">
                <h1 className="text-base md:text-xl lg:text-2xl"> Perfumes </h1>

                <button className="text-xs md:text-base mt-1 underline underline-offset-4">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4 flex flex-col md:flex-row justify-center gap-3 md:gap-6 lg:gap-16 mb-2">
        <div className="flex-col flex items-center md:w-auto">
          <LocalShippingOutlinedIcon />
          <h1 className="text-xs font-bold md:text-sm">
            FREE AND FAST DELIVERY
          </h1>
          <p className="text-xs md:text-sm">
            Free delivery for all orders over $140
          </p>
        </div>
        <div className="flex-col flex items-center md:w-auto">
          <SupportAgentOutlinedIcon />
          <h1 className="text-xs font-bold md:text-sm">
            24/7 CUSTOMER SERVICE
          </h1>
          <p className="text-xs md:text-sm">Friendly 24/7 customer support</p>
        </div>
        <div className="flex-col flex items-center md:w-auto">
          <GppGoodOutlinedIcon />
          <h1 className="text-xs font-bold md:text-sm">MONEY BACK GUARANTEE</h1>
          <p className="text-xs md:text-sm">We return money within 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
