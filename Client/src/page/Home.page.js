import Banner from 'components/Client/Trang-chu/Banner'
import FlashSale from 'components/Client/Trang-chu/FlashSale'
import Home from 'components/Client/Trang-chu/Home'
import TopTablet from 'components/Client/Trang-chu/TopTablet'
import Footer from 'layout/Footer'
import Header from 'layout/Header'
import React from 'react'

const HomePage = () => {
    return (
        <>
            <Header />
            <Home />
            <Banner />
            <TopTablet />
            <Footer />
        </>
    )
}

export default HomePage