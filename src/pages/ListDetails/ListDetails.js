import { useEffect, useState } from 'react';
import './listDetail.css';
import { categoryMovies } from '../../services/Api';
import InfiniteScroll from 'react-infinite-scroll-component';

const ListDetail = () => {

    const [movieBox, setMovieBox] = useState([]);
    const[page, setPage] = useState(1);
    const[totalResults, setTotalResults] = useState(0);
    let count = 0;

    useEffect(() => {
        let getData = async () => {
            let response = await categoryMovies('https://api.themoviedb.org/3/movie/top_rated?api_key=b50713a536895141abbdd7437e19256d&language=en-US&page=1');
            setTotalResults(response.total_results);
            setMovieBox(response.results);
        }
        getData();
    }, [])

    const fetchMoreData = () =>{
        let getData = async () => {
            let response = await categoryMovies(`https://api.themoviedb.org/3/movie/top_rated?api_key=b50713a536895141abbdd7437e19256d&language=en-US&page=${page+1}`);
            setMovieBox(movieBox.concat(response.results));
            setPage(page+1);
        }
        getData();
    }

    return (

        <div className="bg-light">
            <div className="top-header">
                <div className="left m-3">IMDb Charts</div>
                <div className="right d-flex align-items-center">
                    <i className="bi bi-share-fill"></i>
                    <div className="right-text m-3">Share</div>
                </div>
            </div>
            <div className='mx-2 slider-wrapper d-flex align-items-center'>
                <div className='listDetail-vertical-hr'></div>
                <div className="listDetail-heading text-dark">
                    IMDb Top 250 Movies
                </div>
            </div>
            <small className='mx-3 text-secondary'>IMDb Top 250 as rated by regular IMDb voters</small>

            <div className='movie-box m-3'>
                <InfiniteScroll
                    dataLength={movieBox.length}
                    next={fetchMoreData}
                    hasMore={movieBox.length !== totalResults}>
                    {movieBox.length > 0 && movieBox.slice(0,250).map((val) => {
                        count++;
                        return (
                            <div className = 'p-3 m-2 movie-card' key={val.id}>
                                <div className='d-flex'>
                                    <div className='movie-left'>
                                        <img src={`https://image.tmdb.org/t/p/original/${val.poster_path}`}    alt="imdb-box-movie" style={{ width: "100px", height: "150px" }} />
                                    </div>
                                    <div className='movie-right'>
                                        <strong style={{fontSize:"20px"}}>{`${count}.  ${val.title}`}</strong>
                                        <small style={{color:"gray"}}> Release Date : {val.release_date}</small>
                                        <div className='rating d-flex'>
                                            <div> Rating : &nbsp;
                                                <span         className='text-warning'>{val.vote_average}</span>
                                            </div>
                                            <i className="bi bi-star-fill mx-1 text-warning"></i>
                                        </div>
                                    </div>
                                </div>
            
                                <div className='description'>
                                    {val.overview}
                                </div>
                                <div className='votes'>
                                    <span style={{ fontWeight: "600" }}>Votes :</span> {val.vote_count}
                                </div>
                                <hr style={{backgroundColor:"gray", margin:"10px 5px 0px 5px", height: "1px", Border:"none"}}/>
                            </div>
                        );
                    })}
                </InfiniteScroll>
            </div>
        </div >

    );
}
export default ListDetail;