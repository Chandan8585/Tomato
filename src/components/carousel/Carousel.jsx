import React, { useRef } from 'react'
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import PosterFallback from "../../assets/no-poster.png";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ContentWrapper from '../contentWrapper/ContentWrapper.jsx';
import Img from '../lazyLoadImage/Img';
import dayjs from 'dayjs';
import "./Carousel.scss"
import CircleRating from '../circleRating/CircleRating';
import Genres from '../genres/Genres';


const Carousel = ({data, loading , endPoint, title}) => {
    const carouselContainer = useRef();
   const {url} = useSelector((state)=> state.home);
   const navigate = useNavigate();

   const navigation = (dir)=> {
      const container = carouselContainer.
      current;


      const scrollAmount = dir === "left" ? container.scrollLeft - (container.offsetWidth + 20  ) :
       container.scrollLeft + (container.offsetWidth + 20  );


       container.scrollTo({
        left: scrollAmount,
        behavior : "smooth"
       })
   };
   const skItem = ()=>{
    return(
      <div className="skeletonItem">
        <div className="posterBlock"></div>
        <div className="textBlock">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    )
   }
  return(
    <div className="carousel">
        <ContentWrapper>
          {title && <div className="carouselTitle">{title}</div> }
       <BsFillArrowLeftCircleFill
        className = "CarouselLeftNav arrow"
        onClick = {() => navigation("left")}
        />
           <BsFillArrowRightCircleFill
        className = "CarouselRightNav arrow"
        onClick = {() => navigation("right")}
        />
        {!loading ?(
          <div className="carouselItems"
          onClick={()=> navigate(`/${data[0]?.media_type || endPoint}/${data[0]?.id}`)}

  

           ref={carouselContainer}>
            {
              data?.map((item)=>{
                const posterUrl = item.poster_path ? url.poster + item.poster_path : PosterFallback;
                return(
                  <div 
                  key={item.id} 
                   className="carouselItem"
                   >
                    <div className="posterBlock">
                      <Img src={posterUrl} />
                      
                      <Genres data={item.genre_ids.slice(0,2)} />
                    </div>
                    <div className="textBlock">
                      <span className="title">{item.title || item.name}</span>
                      <span className="date">{dayjs(item.release_Date).format("MMM D, YYYY")}</span>
                    </div>
                   </div>
                );
              })}
          </div>
        ): (
          <div className="loadingSkeleton">
         {skItem()}
         {skItem()}
         {skItem()}
         {skItem()}
         {skItem()}
          </div>
        )}
        </ContentWrapper>
    </div>
  )
  
}

export default Carousel;



