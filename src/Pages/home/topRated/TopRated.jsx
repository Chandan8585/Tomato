import React, { useState } from 'react'
import "../Home.scss";
// import "./HeroBanner.scss";

import useFetch from '../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';

const TopRated = () => {
    const [endpoint, setEndPoint] = useState("movie");
    
    const {data, loading} = useFetch(`/${endpoint}/top_rated`);        
    const onTabChange = (tab)=>{
        setEndPoint(tab==="Movies" ? "movie" : "tv");
    };
  return (
    <div className='carouselSection'>
      <ContentWrapper> 
        <span className="carouselTitle">TopRated</span>
      <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange}/>
      </ContentWrapper>
      <Carousel data= {data?.results} loading={loading} endpoint={endpoint}/>
    </div>
  )
}

export default TopRated;

// const Trending = () => {
//   const [endpoint, setEndPoint] = useState("day");
//   const {data, loading} = useFetch(`/trending/movie/${endpoint}`);

//   const onTabChange = (tab)=>{
//       setEndPoint(tab === "Day" ? "day" : "week");

//   }; 
// return (
//   <div className='carouselSection'>
//     <ContentWrapper>  
//       <span className="carouselTitle">Trending</span>
      
//     <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange}/>
    
//     </ContentWrapper>
//     <Carousel data= {data?.results} loading={loading} />
//   </div>
// )  
// }