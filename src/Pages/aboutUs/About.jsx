import React from "react";
import { BsAlipay } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import Layout from "../../components/layout/Layout";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";

export default function About() {
  return (
    <Layout>
      <div className="p-8 md:p-16 lg:p-20">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-16 lg:gap-20">
          <div className="w-full md:w-3/5 max-w-xl">
            <h1 className="font-bold text-3xl text-center md:text-left">
              Our Story
            </h1>
            <p className="text-sm text-center md:text-left font-medium mt-4">
              Launched in 2015, Exclusive is South Asia's premier online shopping
              marketplace with an active presence in Bangladesh. Supported by a
              wide range of tailored marketing data and service solutions,
              Exclusive has 10,500 sellers and 300 brands serving millions of
              customers across the region.
            </p>
            <p className="text-sm text-center md:text-left font-bold mt-4 hidden md:block">
              Exclusive has more than 1 million products, often growing at a very
              fast pace. Exclusive offers a diverse assortment in categories
              ranging from customer electronics, fashion, home appliances, etc.
            </p>
          </div>
          <div className="w-full md:w-2/5 max-w-xl">
            <img
              className="rounded-lg"
              src="https://media.istockphoto.com/id/1726476705/photo/portrait-of-beautiful-indian-young-woman-traditional-outfit-celebrating-diwali-festival.jpg?b=1&s=612x612&w=0&k=20&c=7MEE5rHcYCOJ8uIAC-cDSfbtXMR-kQH92qf9yUoVkYA="
              alt="Celebrating Diwali"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center mt-8 md:mt-16 gap-4">
          <div className="w-full md:w-1/4 p-4 border rounded-sm border-gray-400 hover:border-white hover:bg-red-600 hover:text-white">
            <BsAlipay className="h-10 w-14 mx-auto" />
            <h1 className="font-bold text-xl text-center mt-2">10.5k</h1>
            <p className="font-bold text-sm text-center">Sellers active on our site</p>
          </div>
          <div className="w-full md:w-1/4 p-4 border rounded-sm border-gray-400   hover:border-white hover:bg-red-600 hover:text-white">
            <BsAlipay className="h-10 w-14 mx-auto" />
            <h1 className="font-bold text-xl text-center mt-2">33.5k</h1>
            <p className="font-bold text-sm text-center">Manpnthyn Product sale</p>
          </div>
          <div className="w-full md:w-1/4 p-4 border rounded-sm border-gray-400  hover:border-white hover:bg-red-600 hover:text-white">
            <BsAlipay className="h-10 w-14 mx-auto" />
            <h1 className="font-bold text-xl text-center mt-2">45.5k</h1>
            <p className="font-bold text-sm text-center">Customer Active inoour site</p>
          </div>
         
        </div>
        <div className="flex flex-wrap justify-center items-center mt-8 md:mt-16 gap-8 md:gap-16 lg:gap-20">
          <div className="w-full md:w-1/3 max-w-sm">
            <img
              className="rounded-lg"
              src="https://t3.ftcdn.net/jpg/06/78/09/78/360_F_678097876_9kJnFlRYGAeibsVxspqtCL9UR8giLAvF.jpg"
              alt="John Dev"
            />
            <h1 className="font-bold text-xl text-center mt-2">John Dev</h1>
            <p className="font-bold text-sm text-center">Founder & Chairman</p>
          </div>
          <div className="w-full md:w-1/3 max-w-sm">
            <img
              className="rounded-lg"
              src="https://media.istockphoto.com/id/1248328731/photo/old-rich-man-with-sun-glasse-and-beard-on-street-portrait.jpg?s=612x612&w=0&k=20&c=iRkJGpwnT45DBeElQyAf4aZYycQDFEMunigsB0ALwbw="
              alt="Tom Cruise"
            />
            <h1 className="font-bold text-xl text-center mt-2">Jack Wills</h1>
            <p className="font-bold text-sm text-center">Co-Founder</p>
          </div>
          <div className="w-full md:w-1/3 max-w-sm">
            <img
              className="rounded-lg"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
              alt="Tom Cruise"
            />
            <h1 className="font-bold text-xl text-center mt-2">Jenny</h1>
            <p className="font-bold text-sm text-center">Marketing Head</p>
          </div>
          
        
        </div>
        <div className="flex flex-wrap justify-center items-center mt-8 md:mt-16 gap-8 md:gap-16 lg:gap-20">
          <div className="flex flex-col items-center w-full md:w-auto">
            <LocalShippingOutlinedIcon />
            <h1 className="text-xs font-bold md:text-sm">FREE AND FAST DELIVERY</h1>
            <p className="text-xs md:text-sm">Free delivery for all orders over $140</p>
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
    </Layout>
  );
}
