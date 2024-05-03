import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(null); // State to track selected image

  // Function to handle click on small image
  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  // Array of image URLs for small images
  const smallImages = [
    { id: 1, url: "https://cdn.pixabay.com/photo/2021/09/07/07/11/game-console-6603120_1280.jpg" },
    { id: 2, url: "https://media.istockphoto.com/id/1334436084/photo/top-down-view-of-colorful-illuminated-gaming-accessories-laying-on-table.jpg?s=612x612&w=0&k=20&c=E9xnbAZoBS5LlUX0q-zxT_3m6gEZpyB2k51_U4LLMNs=" },
    { id: 3, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMMT0NxjTw-w0oH4SKfzaxhdZZzx__cqhh9yPQnbdYkYEL5KYOVQSmr57kMvmDepKAtWk&usqp=CAU" },
    { id: 4, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU9RH5ib_px9S89a7xFp6T77HbZh-_emVUTvzfL8Jz4zSZO5l3tEKYIq9GBXkdWPucEh8&usqp=CAU" }
    // Add more image URLs here
  ];

  // Set the first image as the default selected image
  
  useState(() => {
    setSelectedImage(smallImages[0].url);
  }, []);

  return (
    <Layout>
      <div className='grid lg:grid-cols-2 m-2   md:m-12'>
        <div className='w-full md:px-5 flex mb-4 '>
          <div className='w-[180px] hidden md:block h-[450px] mr-3'>
            {/* Render small images dynamically */}
            {smallImages.map((image) => (
              <img
                key={image.id}
                className='rounded mb-4 cursor-pointer'
                src={image.url}
                alt=""
                onClick={() => handleImageClick(image.url)}
              />
            ))}
          </div>
          <div className='w-full h-full'>
           
            <img
              className="h-[420px] rounded"
              src={selectedImage || "https://cdn.pixabay.com/photo/2021/09/07/07/11/joysticks-6603119_640.jpg"}
              alt=""
            />
          </div>
        </div>
        <div className=''>
          <h1 className='font-bold'>Havic HV G-92 Gamepad</h1>
          <div>150 Reviews | <span className='text-red-500'>In Stock</span></div>
          <h1>$190.00</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.corporis dolor molestiae cumque magni aliquam esse natus odio qu</p>
          <hr className='mt-2' />
          <div className='mt-2'>Colours: 
            <input className='mr-3 ml-3'  type='radio' />
            <input type='radio' />
          </div>
          <div className='mt-2 '>Size: 
            {/* Buttons for selecting size */}
            Size: 
            <button className=' w-[40px] h-[40px]  border-2 m-1 p-1 rounded-sm'>XS</button>
            {/* Add similar buttons for other sizes */}
          </div>
          <div className='flex justify-start mt-2'>
            {/* Quantity selection */}
            <button className=' border-2 p-2 w-[40px] h-[50px] rounded-sm'>-</button>
            <h1 className='p-4'>1</h1>
            <button className='w-[40px] h-[50px] border-2 p-2 rounded-sm'>+</button>
            <button className='px-16 mx-2 h-[50px] bg-[red] text-white rounded-sm '>Buy Now</button>
            <button className="border h-12 px-4 hover:text-red-700">Favorite</button>
          </div>
          <div className='border-black-300 border-2 mt-4 rounded-lg p-3'>
            <div>
              <h1>Free Delivery</h1>
              <a href='#'>Enter your postal code for Delivery Availability</a>
              <hr className='mt-2 border-gray-300'/>
            </div>
            <div> 
              <h1>Return Delivery</h1>
              Free 30 Days Delivery Returns.
              <a href='#'>Details</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Product;
