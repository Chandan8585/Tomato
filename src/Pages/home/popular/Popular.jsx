import React, { useState } from 'react'
import "../Home.scss";
// import "./HeroBanner.scss";

import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from '../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
const Popular = () => {
    const [endpoint, setEndPoint] = useState("movie");
    const {data, loading} = useFetch(`/${endpoint}/popular/`);
    const onTabChange = (tab)=>{
        setEndPoint(tab==="Movies" ? "movie" : "tv");
    }; 
  return ( 
    <div className='carouselSection'>
      <ContentWrapper>
        <span className="carouselTitle">What's Popular</span>
      <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange}/>
      </ContentWrapper>
<<<<<<< HEAD
      <Carousel data= {data?.results} loading={loading} 
      endpoint={endpoint}
      />
=======
      <Carousel data= {data?.results} loading={loading} endpoint={endpoint} mediaType={endpoint}/>
>>>>>>> 509f89b3751cc014d4e1e2d19d09e4c6792afceb
    </div>
  )
}

export default Popular;
