import React from 'react';
import { Link } from 'react-router-dom';

const Category = [
    {
        image: 'https://cdn-icons-png.flaticon.com/256/4359/4359963.png',
        name: 'Fashion',
        id: 'fashion'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/11833/11833323.png',
        name: 'Shirt',
        id: 'shirt'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/8174/8174424.png',
        name: 'Jacket',
        id: 'jacket'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png',
        name: 'Mobile',
        id: 'mobile'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
        name: 'Laptop',
        id: 'laptop'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/10686/10686553.png',
        name: 'Shoes',
        id: 'shoes'
    }
    
];

const Categories = () => {

    const handleClick = () => {
        window.scrollTo(0, 0); // Scroll to top when a link is clicked
    };

    return (
        <div className='px-10 py-5 '>
            {/* first section of categories */}
            <div className="flex">
                <div className="w-3 h-5  bg-red-500 rounded-r-sm"></div>
                <div className='pl-2' >
                    <h1 className="text-red-500  font-medium">Categories</h1>
                </div>
            </div>
            {/* Second section of categories */}
            <div className=' flex   py-1'>
                <div><h1 className="font-semibold lg:text-3xl md:text-2xl text-xl">Browse by categories</h1></div>
                <div></div>
            </div>
            {/* third section of categories */}
            <div className="flex  justify-center pt-4  ">
                <div className="flex ">
                    {Category.map((item, index) => {
                        return (
                            <div key={index} className="px-2 lg:px-10" onClick={handleClick}>
                                {/* Use Link component */}
                                <Link to={`/category/${item.id}`}>
                                    <div className="w-10 h-10 md:w-20 md:h-20 lg:w-24 lg:h-24 max-w-xs border-r-2 rounded border-b-2 bg-white-500 transition-all duration-700 hover:bg-red-600 cursor-pointer">
                                        <div className="flex justify-center px-2 py-2 mb-12 hover:px-0 hover:py-0 duration-700">
                                            <img src={item.image} alt="img" />
                                        </div>
                                    </div>
                                    <h1 className='text-xs lg:text-lg text-center font-medium title-font'>{item.name}</h1>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Categories;
