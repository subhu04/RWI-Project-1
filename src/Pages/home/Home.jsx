import React from 'react'
import Layout from '../../components/layout/Layout'
import Hero from '../../components/hero/Hero'
import Featured from '../../components/featured/Featured'
import Categories from '../../components/categories/Categories'
import FlashSales from '../../components/flashSales/FlashSales'
import BestSelling from '../../components/bestSelling/BestSelling'

const Home = () => {
  return (
    <div>
      <Layout>
        <Hero/>
        <FlashSales/>
        <Categories/>
        <BestSelling/>
        <Featured/>
        </Layout>
    </div>
  )
}

export default Home
