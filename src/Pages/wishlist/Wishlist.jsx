import React from 'react'
import Layout from '../../components/layout/Layout'
import Cards from '../../components/card/Cards';
const Wishlist = () => {
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
   <>
   <Layout>
   <div className='px-10 py-5'>
     <div className='flex justify-between px-10 py-5 '>
        <h1 className='text-lg'>Wishlist ({products.length})</h1>
        <button className='border border-black px-5 py-2 rounded-md hover:bg-red-600 hover:border-0 hover:text-white'> Move All to Bag</button>
     </div>
      {/* Displaying products in flash sales */}
      <div className='flex flex-wrap gap-5 items-center justify-center'>
        {products.map((product, index) => (
          <Cards key={index} product={product} />
        ))}
      </div>
    </div>

   </Layout>
   </>
  )
}

export default Wishlist
