import './banner.css';

const Banner = (props) =>{
    return(
        <div className='col-sm-8 left-section'>
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
            <div className="carousel-item active custom-inner">
              <img src={`https://image.tmdb.org/t/p/original/${props.movie[0].backdrop_path}`} className="d-block w-100" alt="active-image"/>
              <div className='top-info d-flex'>
                <div className='poster-image'>
                  <img src={`https://image.tmdb.org/t/p/original/${props.movie[0].poster_path}`} style={{width:"150px", height:"200px"}} alt="active-image"/>
                  <i className="bi bi-bookmark-plus-fill custom-bookmark"></i>
                </div>
                <div className='text-white' style={{marginTop:"150px", marginLeft:"15px"}}>
                  {props.movie[0].original_title}
                </div>
              </div>
            </div>
              {
                props.movie.slice(1).map((val) => {
                  return (
                    <div className="carousel-item custom-inner" key={val.id}>
                      <img src={`https://image.tmdb.org/t/p/original/${val.backdrop_path}`}className="d-block w-100" alt="imdb-movie" />
                      <div className='top-info d-flex'>
                        <div className='poster-image'>
                          <img src={`https://image.tmdb.org/t/p/original/${val.poster_path}`} style={{width:"150px", height:"200px"}} alt="active-image"/>
                          <i className="bi bi-bookmark-plus-fill custom-bookmark"></i>
                        </div>
                        <div className='text-white'style={{marginTop:"150px", marginLeft:"15px"}}>
                          {val.original_title}
                        </div>
                      </div>
                    </div>
                  );
                })
              }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon icon-custom" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon icon-custom" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
    );
}
export default Banner;