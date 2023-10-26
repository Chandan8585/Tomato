import { useEffect } from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { fetchDataFromApi } from './utils/api';
import HomeSlice, { getApiConfiguration, getGenres } from './Store/homeSlice';
import Home from './Pages/home/Home';
import Details from './Pages/details/Details';
import SearchResult from './Pages/searchResult/SearchResult';
import PageNotFound from './Pages/404/PageNotFound';
import Explore from './Pages/explore/Explore';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  const dispatch = useDispatch();
  const {url} = useSelector((state)=>   state.home);


  console.log(url);
  const fetchApiConfig = ()=> {
    fetchDataFromApi("/configuration").then((res)=> {
      console.log(res);
  
      const url = {
        backdrop: res.images.secure_base_url + 
        "original",
        poster: res.images.secure_base_url + 
        "original",
        profile: res.images.secure_base_url +
        "original",
      }
      dispatch(getApiConfiguration(url));
    });
   };
 useEffect(()=>{
   
  
     fetchApiConfig();
 },);

 

  const genresCall = async ()=>{
    let promises = []
    let endPoints = ["tv", "movie"]
    let allGenres = {}

    endPoints.forEach((url)=> {
       promises.push(fetchDataFromApi(`/genre/${url}/list`))
    })


    const data = await Promise.all(promises);
    data.map(({genres})=> {
      return genres.map((item)=>(allGenres[item.id]= item))
    });
    dispatch(getGenres(allGenres));
  };

  return (
   <BrowserRouter>
   <Header/>
   <Routes>
  
    <Route path="/" element={<Home />}/>
    <Route path="/:mediaType/:id" element={<Details/>} />
    <Route path="/search/:query" element={<SearchResult/>} />
    <Route path="/explore/:mediaType" element={<Explore />} />
    <Route path="*" element={<PageNotFound/>} />

   </Routes>
   <Footer/>
   </BrowserRouter>
  
  );
}

export default App;