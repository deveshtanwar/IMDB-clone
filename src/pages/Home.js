import { useEffect, useState } from 'react';
import Banner from '../components/Banner/Banner';
import UpNext from '../components/UpNext/UpNext';
import { categoryMovies } from '../services/Api';
import Slider from '../components/Slider/Slider';
import Footer from '../components/Footer/Footer';

const Home = () =>{

  const [movie, setMovie] = useState([{
    adult: false,
    backdrop_path: "/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg",
    genre_ids: [
      28,
      12,
      878
    ],
    id: 667538,
    original_language: "en",
    original_title: "Transformers: Rise of the Beasts",
    overview: "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
    popularity: 2593.944,
    poster_path: "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
    release_date: "2023-06-06",
    title: "Transformers: Rise of the Beasts",
    video: false,
    vote_average: 7.5,
    vote_count: 2718
  }]);

  const[upNext, setUpNext] = useState([]);
  const[sliderMovie, setSliderMovie] = useState([]);
  const[tv, setTv] = useState([]);
  const[popular, setPopular] = useState([]);

  useEffect(() => {
    const getData = async () =>{
        let response =  await categoryMovies(`https://api.themoviedb.org/3/movie/now_playing?api_key=b50713a536895141abbdd7437e19256d&language=en-US&page=1`);
        setMovie(response.results);
    }
    getData();
  }, [])

  useEffect(() => {
    const getData = async () =>{
        let response =  await categoryMovies('https://api.themoviedb.org/3/movie/upcoming?api_key=b50713a536895141abbdd7437e19256d&language=en-US&page=1');
        setUpNext(response.results);
    }
    getData();
  }, [])
  
  useEffect(() => {
    const getData = async () =>{
        let response =  await categoryMovies('https://api.themoviedb.org/3/discover/movie?api_key=b50713a536895141abbdd7437e19256d&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc');
        setSliderMovie(response.results);
    }
    getData();
  }, [])

  useEffect(() => {
    const getData = async () =>{
        let response =  await categoryMovies('https://api.themoviedb.org/3/discover/tv?api_key=b50713a536895141abbdd7437e19256d&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc'
        );
        setTv(response.results);
    }
    getData();
  }, [])

  useEffect(() => {
    const getData = async () =>{
        let response =  await categoryMovies('https://api.themoviedb.org/3/movie/top_rated?api_key=b50713a536895141abbdd7437e19256d&language=en-US&page=1'
        );
        setPopular(response.results);
    }
    getData();
  }, [])

  return (
    <>
      <div className='main-section d-flex flex-wrap mt-2'>
        <Banner movie={movie}/>
        <UpNext upnext={upNext}/>
      </div>
      <Slider slidermovie={popular} heading="Top Rated"/>
      <Slider slidermovie={sliderMovie} heading="Discover Movies"/>
      <Slider slidermovie={tv} heading="Tv Series"/>
      <Footer />
    </>
  );
}

export default Home;
