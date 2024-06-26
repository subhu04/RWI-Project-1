import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../layout/Layout";
import Cards from "../card/Cards";
import Categories from "./Categories";

const SingleCategoryPage = () => {
  const { id } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  // Dummy data for products (replace with actual fetching mechanism)
  const products = [
    {
      src: "https://images.idgesg.net/images/article/2018/11/macbook-air-2108-hero2-100779122-orig.jpeg",
      alt: "Product 1",
      price: "$100",
      name: "MackBook",
      category: "laptop",
    },
    {
      src: "https://images.idgesg.net/images/article/2018/11/macbook-air-2108-hero2-100779122-orig.jpeg",
      alt: "Product 1",
      price: "$100",
      name: "MackBook",
      category: "laptop",
    },
    {
      src: "https://tse3.mm.bing.net/th?id=OIP.fF5IBAuiujU6ETu9hTm0gQHaFx&pid=Api&P=0&h=180",
      alt: "Product 2",
      price: "$200",
      name: "Play Station",
      category: "laptop",
    },
    {
      src: "https://tse1.mm.bing.net/th?id=OIP.TqRgd0FAlCJEdKQrIgyqtAHaE8&pid=Api&P=0&h=180",
      alt: "Product 2",
      price: "$200",
      name: "Addidas",
      category: "shoes",
    },
    {
      src: "https://tse4.mm.bing.net/th?id=OIP.gOlSHVIYiBTFzYlpNpeQ5QHaHa&pid=Api&P=0&h=180",
      alt: "Product 2",
      price: "$200",
      name: "Crushable Felt Travel Hat",
      category: "fashion",
    },

    {
      src: "https://www.travelandleisure.com/thmb/VCjHr1ieP5sksuoMCa8fQ9dp28U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tal-product-columbia-womens-switchback-iii-jacket-jthompson-0510-1-b669639cbd69420abe567bd6600eb95f.jpeg",
      alt: "Product 1",
      price: "$100",
      name: "Green Hooded Puffer Jacket",
      category: "jacket",
    },
    {
      src: "https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Product 1",
      price: "$220",
      name: "lenevo think pad ",
      category: "laptop",
    },
    {
      src: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Product 1",
      price: "$220",
      name: "lenevo idea pad",
      category: "laptop",
    },

    {
      src: "https://images.pexels.com/photos/3550482/pexels-photo-3550482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Product 1",
      price: "$320",
      name: "lenevo slim ",
      category: "laptop",
    },
    {
      src: "https://images.pexels.com/photos/19802221/pexels-photo-19802221/free-photo-of-laptop-on-bed.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Product 1",
      price: "$560",
      name: "lenevo idea 5000",
      category: "laptop",
    },
    {
      src: "https://images.pexels.com/photos/19802221/pexels-photo-19802221/free-photo-of-laptop-on-bed.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Product 1",
      price: "$320",
      name: "lenevo idea 5000",
      category: "laptop",
    },

    {
      src: "https://images.unsplash.com/photo-1558864559-ed673ba3610b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Product 1",
      price: "$580",
      name: " dell inspiron 5000",
      category: "laptop",
    },

    {
      src: "https://images.unsplash.com/photo-1558864559-ed673ba3610b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Product 1",
      price: "$440",
      name: " dell inspiron 5200",
      category: "laptop",
    },
    {
      src: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Product 1",
      price: "$125",
      name: "grey jacket ",
      category: "jacket",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1661645929465-dff3f6e7041e?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Product 1",
      price: "$255",
      name: "black jacket",
      category: "jacket",
    },

    {
      src: "https://images.unsplash.com/photo-1667451826966-2c4153f4ae65?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Product 1",
      price: "$80",
      name: "full sleeve jacket",
      category: "jacket",
    },
    {
      src: "https://images.unsplash.com/photo-1697914716320-73ff0ef30cfc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Product 1",
      price: "$665",
      name: "v neck",
      category: "jacket",
    },
    {
      src: "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?q=80&w=1861&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Product 1",
      price: "$520",
      name: "half sleeve",
      category: "jacket",
    },

    {
      src: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Product 1",
      price: "$95",
      name: "full sleeve",
      category: "jacket",
    },

    {
      src: "https://media.istockphoto.com/id/1069165932/photo/black-leather-jacket-shot-from-front-and-back-isolated-on-white.webp?s=2048x2048&w=is&k=20&c=78vtUN17jbH57kmPwuxZDxEWPP6dn1NKg0JwjyA9VXI=",
      alt: "Product 1",
      price: "$56",
      name: "round neck",
      category: "shirt",
    },
    {
      src: "https://m.media-amazon.com/images/I/81T-W+2GShL._AC_UY1100_.jpg",
      alt: "Product 1",
      price: "$66",
      name: "Fedora Hat",
      category: "fashion",
    },
    {
      src: "https://rukminim2.flixcart.com/image/850/1000/jt1tq4w0/hat/f/x/a/solid-fedora-cap-free-1-hat-a-hat-2946-tinytales-original-imafefhttbjxccfc.jpeg?q=20&crop=false",
      alt: "Product 1",
      price: "$16",
      name: "TinyTales Round Hat Cap",
      category: "fashion",
    },
    {
      src: "https://m.media-amazon.com/images/I/616JpRllmNL._AC_UF1000,1000_QL80_.jpg",
      alt: "Product 1",
      price: "$5",
      name: "Moraze Glossy Touch Nude Nail Polish",
      category: "fashion",
    },
    {
      src: "https://rukminim2.flixcart.com/image/850/1000/xif0q/nail-polish/o/x/9/19-matte-finish-glitter-gel-nail-paint-for-party-wear-look-original-imagk7m9dwsnfcgz.jpeg?q=20&crop=false",
      alt: "Product 1",
      price: "$6",
      name: "MYEONG MATTE FINISH & GLITTER GEL NAIL PAINT",
      category: "fashion",
    },

    {
      src: "https://images.unsplash.com/photo-1610792516775-01de03eae630?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Product 1",
      price: "$799",
      name: "Samsung Galaxy S21 Ultra",
      category: "mobile",
    },
    {
      src: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=1567&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Product 2",
      price: "$999",
      name: "iPhone 13 Pro Max",
      category: "mobile",
    },
    {
      src: "https://images.unsplash.com/photo-1657797066015-311cb505b009?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Product 3",
      price: "$899",
      name: "Google Pixel 6 Pro",
      category: "mobile",
    },
    {
      src: "https://images.unsplash.com/photo-1658321466969-1c45400bb947?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Product 4",
      price: "$699",
      name: "OnePlus 9 Pro",
      category: "mobile",
    },
    {
      src: "https://images.unsplash.com/photo-1621330396173-e41b1cafd17f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Product 5",
      price: "$749",
      name: "Xiaomi Mi 11",
      category: "mobile",
    },
    {
      src: "https://images.unsplash.com/photo-1591884539376-42f1f0dc65c2?q=80&w=1485&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Product 6",
      price: "$649",
      name: "Huawei P50 Pro",
      category: "mobile",
    },
    {
      src: "https://www.mobiles4sale.com/pictures/default/lg-v60-thinq-5g-dual-screen/lg-v60-thinq-5g-dual-screen-pic-1.jpg",
      alt: "Product 7",
      price: "$579",
      name: "LG V60 ThinQ",
      category: "mobile",
    },
    {
      src: "https://www.androidplanet.nl/wp-content/uploads/2021/09/sony-xperia-1-iii-review3.jpg",
      alt: "Product 8",
      price: "$499",
      name: "Sony Xperia 1 III",
      category: "mobile",
    },
    {
      src: "https://motorolaroe.vtexassets.com/arquivos/ids/156575/motorola-edge-20-pro-pdp-render-8-Baltic-blue-gq89b9ir.png?v=637630881043330000",
      alt: "Product 9",
      price: "$479",
      name: "Motorola Edge 20",
      category: "mobile",
    },
    {
      src: "https://dlcdnwebimgs.asus.com/gain/D551F7D4-8AC9-4299-A93D-3860DFC9D573/w250",
      alt: "Product 10",
      price: "$399",
      name: "Asus ROG Phone 5",
      category: "mobile",
    },
    {
      src: "https://m.media-amazon.com/images/I/81T-W+2GShL._AC_UY1100_.jpg",
      alt: "Product 1",
      price: "$66",
      name: "Fedora Hat",
      category: "fashion",
    },
    {
      src: "https://rukminim2.flixcart.com/image/850/1000/jt1tq4w0/hat/f/x/a/solid-fedora-cap-free-1-hat-a-hat-2946-tinytales-original-imafefhttbjxccfc.jpeg?q=20&crop=false",
      alt: "Product 1",
      price: "$16",
      name: "TinyTales Round Hat Cap",
      category: "fashion",
    },
    {
      src: "https://m.media-amazon.com/images/I/616JpRllmNL._AC_UF1000,1000_QL80_.jpg",
      alt: "Product 1",
      price: "$5",
      name: "Moraze Glossy Touch Nude Nail Polish",
      category: "fashion",
    },
    {
      src: "https://rukminim2.flixcart.com/image/850/1000/xif0q/nail-polish/o/x/9/19-matte-finish-glitter-gel-nail-paint-for-party-wear-look-original-imagk7m9dwsnfcgz.jpeg?q=20&crop=false",
      alt: "Product 1",
      price: "$6",
      name: "MYEONG MATTE FINISH & GLITTER GEL NAIL PAINT",
      category: "fashion",
    },

    {
      src: "https://images.unsplash.com/photo-1610792516775-01de03eae630?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Product 1",
      price: "$799",
      name: "Samsung Galaxy S21 Ultra",
      category: "mobile",
    },
    {
      src: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=1567&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Product 2",
      price: "$999",
      name: "iPhone 13 Pro Max",
      category: "mobile",
    },
    {
      src: "https://images.unsplash.com/photo-1657797066015-311cb505b009?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Product 3",
      price: "$899",
      name: "Google Pixel 6 Pro",
      category: "mobile",
    },
    {
      src: "https://images.unsplash.com/photo-1658321466969-1c45400bb947?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Product 4",
      price: "$699",
      name: "OnePlus 9 Pro",
      category: "mobile",
    },
    {
      src: "https://images.unsplash.com/photo-1621330396173-e41b1cafd17f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Product 5",
      price: "$749",
      name: "Xiaomi Mi 11",
      category: "mobile",
    },
    {
      src: "https://images.unsplash.com/photo-1591884539376-42f1f0dc65c2?q=80&w=1485&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Product 6",
      price: "$649",
      name: "Huawei P50 Pro",
      category: "mobile",
    },
    {
      src: "https://www.mobiles4sale.com/pictures/default/lg-v60-thinq-5g-dual-screen/lg-v60-thinq-5g-dual-screen-pic-1.jpg",
      alt: "Product 7",
      price: "$579",
      name: "LG V60 ThinQ",
      category: "mobile",
    },
    {
      src: "https://www.androidplanet.nl/wp-content/uploads/2021/09/sony-xperia-1-iii-review3.jpg",
      alt: "Product 8",
      price: "$499",
      name: "Sony Xperia 1 III",
      category: "mobile",
    },
    {
      src: "https://motorolaroe.vtexassets.com/arquivos/ids/156575/motorola-edge-20-pro-pdp-render-8-Baltic-blue-gq89b9ir.png?v=637630881043330000",
      alt: "Product 9",
      price: "$479",
      name: "Motorola Edge 20",
      category: "mobile",
    },
    {
      src: "https://dlcdnwebimgs.asus.com/gain/D551F7D4-8AC9-4299-A93D-3860DFC9D573/w250",
      alt: "Product 10",
      price: "$399",
      name: "Asus ROG Phone 5",
      category: "mobile",
    },

    {
      src: "https://images.unsplash.com/photo-1610792516775-01de03eae630?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Product 1",
      price: "$799",
      name: "Samsung Galaxy S21 Ultra",
      category: "mobile",
    },
    {
      src: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=1567&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Product 2",
      price: "$999",
      name: "iPhone 13 Pro Max",
      category: "mobile",
    },
    {
      src: "https://images.unsplash.com/photo-1657797066015-311cb505b009?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Product 3",
      price: "$899",
      name: "Google Pixel 6 Pro",
      category: "mobile",
    },
    {
      src: "https://images.unsplash.com/photo-1658321466969-1c45400bb947?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Product 4",
      price: "$699",
      name: "OnePlus 9 Pro",
      category: "mobile",
    },
    {
      src: "https://images.unsplash.com/photo-1621330396173-e41b1cafd17f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Product 5",
      price: "$749",
      name: "Xiaomi Mi 11",
      category: "mobile",
    },
    {
      src: "https://images.unsplash.com/photo-1591884539376-42f1f0dc65c2?q=80&w=1485&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Product 6",
      price: "$649",
      name: "Huawei P50 Pro",
      category: "mobile",
    },
    {
      src: "https://www.mobiles4sale.com/pictures/default/lg-v60-thinq-5g-dual-screen/lg-v60-thinq-5g-dual-screen-pic-1.jpg",
      alt: "Product 7",
      price: "$579",
      name: "LG V60 ThinQ",
      category: "mobile",
    },
    {
      src: "https://www.androidplanet.nl/wp-content/uploads/2021/09/sony-xperia-1-iii-review3.jpg",
      alt: "Product 8",
      price: "$499",
      name: "Sony Xperia 1 III",
      category: "mobile",
    },
    {
      src: "https://motorolaroe.vtexassets.com/arquivos/ids/156575/motorola-edge-20-pro-pdp-render-8-Baltic-blue-gq89b9ir.png?v=637630881043330000",
      alt: "Product 9",
      price: "$479",
      name: "Motorola Edge 20",
      category: "mobile",
    },
    {
      src: "https://dlcdnwebimgs.asus.com/gain/D551F7D4-8AC9-4299-A93D-3860DFC9D573/w250",
      alt: "Product 10",
      price: "$399",
      name: "Asus ROG Phone 5",
      category: "mobile",
    },

    {
      src: "https://images.unsplash.com/photo-1650320079970-b4ee8f0dae33?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Product 1",
      price: "$99",
      name: "Casual Sneakers",
      category: "shoes",
    },
    {
      src: "https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Product 2",
      price: "$129",
      name: "Running Shoes",
      category: "shoes",
    },
    {
      src: "https://images.unsplash.com/photo-1547941126-3d5322b218b0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Product 3",
      price: "$79",
      name: "Athletic Shoes",
      category: "shoes",
    },
    {
      src: "https://images.unsplash.com/photo-1627631457335-d1041fd0cb8c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Product 4",
      price: "$149",
      name: "High Heels",
      category: "shoes",
    },
    {
      src: "https://images.unsplash.com/photo-1603487742131-4160ec999306?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Product 5",
      price: "$89",
      name: "Sandals",
      category: "shoes",
    },
    {
      src: "https://images.unsplash.com/photo-1613673720017-56e42d90fee4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Product 6",
      price: "$109",
      name: "Leather Boots",
      category: "shoes",
    },
    {
      src: "https://images.unsplash.com/photo-1509472290917-08d8d47c5fca?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Product 7",
      price: "$79",
      name: "Canvas Sneakers",
      category: "shoes",
    },
    {
      src: "https://images.unsplash.com/photo-1621019845162-874621755aa8?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Product 8",
      price: "$129",
      name: "Hiking Shoes",
      category: "shoes",
    },
    {
      src: "https://images.unsplash.com/photo-1488704906310-183eeda75d51?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Product 9",
      price: "$99",
      name: "Platform Shoes",
      category: "shoes",
    },
    {
      src: "https://images.unsplash.com/photo-1604136172384-b2e9c43271ec?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Product 10",
      price: "$69",
      name: "Slip-on Shoes",
      category: "shoes",
    },
  ];
  // Simulating fetching category products based on ID
  useEffect(() => {
    // Here you would filter products based on the category ID
    const filteredProducts = products.filter(
      (product) => product.category === id
    );
    setCategoryProducts(filteredProducts);
  }, [id, products]);

  // Logic for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = categoryProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };
  return (
    <Layout>
      <div className="px-10 py-5">
        <Categories />
        <div>
          {/* Display category title */}
          <div className="flex  justify-center p-4">
            <div className="w-3 h-5  bg-red-500 rounded-r-sm"></div>
            <div className="pl-2">
              <h1 className="text-red-500  font-medium">{id.toUpperCase()}</h1>
            </div>
          </div>
          {/* Display category products */}
          <div className="flex flex-wrap gap-5 items-center justify-center">
            {currentProducts.map((product, index) => (
              <Cards key={index} product={product} />
            ))}
          </div>
          {/* Pagination */}
          <ul className="flex justify-center mt-4">
            {Array.from(
              { length: Math.ceil(categoryProducts.length / productsPerPage) },
              (_, i) => (
                <li
                  key={i}
                  className={`px-3 py-1 cursor-pointer ${currentPage === i + 1 ? "bg-gray-300" : "hover:bg-gray-200"
                    }`}
                  onClick={() => paginate(i + 1)}
                >
                  {i + 1}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default SingleCategoryPage;
