import React from 'react'
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './trending/Trending'
import TopRated from './topRated/TopRated'
import Popular from './popular/Popular'

const Home = () => {
  return (
    <div className='homePage'>
        <HeroBanner />
        <Trending/>
        <Popular/>
        <TopRated/>
        <div style={{height: 500}}></div>
    </div>
  )
}

export default Home
