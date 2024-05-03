import React from 'react';
import Cards from '../card/Cards';

const BestSelling = () => {
  // Dummy data for products
  const products = [
    {
        src: 'https://images.idgesg.net/images/article/2018/11/macbook-air-2108-hero2-100779122-orig.jpeg',
        alt: 'Product 1',
        price: '$100',
        name: 'MackBook',
      },
      {
        src: 'https://tse3.mm.bing.net/th?id=OIP.fF5IBAuiujU6ETu9hTm0gQHaFx&pid=Api&P=0&h=180',
        alt: 'Product 2',
        price: '$200',
        name: 'Play Station',
      },
      {
        src: 'https://tse1.mm.bing.net/th?id=OIP.TqRgd0FAlCJEdKQrIgyqtAHaE8&pid=Api&P=0&h=180',
        alt: 'Product 2',
        price: '$200',
        name: 'Addidas',
      },
      {
        src: 'https://tse4.mm.bing.net/th?id=OIP.gOlSHVIYiBTFzYlpNpeQ5QHaHa&pid=Api&P=0&h=180',
        alt: 'Product 2',
        price: '$200',
        name: 'Crushable Felt Travel Hat',
      },
  ];

  return (
    <div className='px-10 py-5'>
      <div>
        {/* First section of categories */}
        <div className="flex">
          <div className="w-3 h-5  bg-red-500 rounded-r-sm"></div>
          <div className='pl-2' >
            <h1 className="text-red-500  font-medium">This Month</h1>
          </div>
        </div>
        {/* Second section of categories */}
        <div className='flex py-1'>
          <div>
            <h1 className="font-semibold lg:text-3xl md:text-2xl text-xl">Best Selling Products</h1>
          </div>
          <div></div>
        </div>
      </div>
      {/* Displaying products in flash sales */}
      <div className='flex flex-wrap gap-5 items-center justify-center'>
        {products.map((product, index) => (
          <Cards key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default BestSelling;
