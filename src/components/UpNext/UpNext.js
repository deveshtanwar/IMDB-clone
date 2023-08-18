import './upnext.css';

const UpNext = (props) => {
  return (
    <div className='col-sm-4 right-section'>
      <div className='heading'>Up next</div>
      <div className="main m-1" style={{ backgroundColor: "rgb(17,17,16)" }}>
        {props.upnext.length > 0 && props.upnext.map((val) => {
          return (
            <div className="items d-flex" key={val.id}>
              <div className="upnext-image me-3">
                <img src={`https://image.tmdb.org/t/p/original/${val.poster_path}`} alt="upcoming-movies" style={{ width: "100px" }} />
              </div>
              <div>
                <div className="title">
                  {val.original_title}
                </div>
                <small className='release-date'>{val.release_date}</small>
                <div className="desc">
                  {val.overview.slice(0,100)}...
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default UpNext;