import './slider.css';

const Slider = (props) => {
    return (
        <>
            <div className='mt-5 mx-3 slider-wrapper d-flex align-items-center'>
                <div className='slider-vertical-hr'></div>
                <div className="slider-heading">
                    {props.heading}
                </div>
            </div>
            <div className="slider mt-5">
                <div className='slider-cards'>
                    {props.slidermovie.length > 0 && props.slidermovie.map((val) => {
                        return (
                            <div className="card mx-2" key={val.id}>
                                <img src={`https://image.tmdb.org/t/p/original/${val.poster_path}`} className="card-img-top" alt="movies-image" />
                                <div className="card-body">
                                    <h5 className="card-title">{val.title|| val.name}</h5>
                                    <p className="card-text">IMDb Rating - <span style={{color:"yellow"}}>{val.vote_average}</span></p>
                                </div>
                                <div className='slider-wishlist d-flex justify-content-center align-items-center'>
                                    <i className="bi bi-plus"></i>
                                    <p style={{ padding: "0px", margin: "0px" }}>Watchlist</p>
                                </div>
                                <div className='slider-trailer d-flex justify-content-center align-items-center'>
                                    <i className="bi bi-play-fill"></i>
                                    <p style={{ padding: "0px", margin: "0px" }}>Trailer</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
export default Slider;
