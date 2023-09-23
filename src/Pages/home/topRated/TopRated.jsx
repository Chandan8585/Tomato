import React, { useState } from 'react';
import "../Home.scss";

import useFetch from '../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';

const TopRated = () => {
    const [endpoint, setEndPoint] = useState("movie");
    
    const { data, loading } = useFetch(`/${endpoint}/top_rated`);        
    
    const onTabChange = (tab) => {
        setEndPoint(tab === "Movies" ? "movie" : "tv");
        console.log("endpoint", endpoint);
    };

    return (
        <div className='carouselSection'>
            <ContentWrapper> 
                <span className="carouselTitle">TopRated</span>
                <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
            </ContentWrapper>
            {console.log("data result", data?.results)}
            <Carousel data={data?.results} loading={loading} endpoint={endpoint} mediaType={endpoint} />
        </div>
    );
}

export default TopRated;
