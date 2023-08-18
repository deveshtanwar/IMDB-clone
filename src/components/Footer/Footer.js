import './footer.css';

const Footer = () =>{
    return(
        <div className='footer text-center'>
            <button className='btn btn-warning custom-btn'>Sign in for more access </button>
            <div className='icons'>
                <i className="bi bi-instagram custom-icon"></i>
                <i className="bi bi-facebook custom-icon"></i>
                <i className="bi bi-twitter custom-icon"></i>
                <i className="bi bi-youtube custom-icon"></i>
                <i className="bi bi-reddit custom-icon"></i>
            </div>
            <div className='redirect'>
                <p className='redirects-p'>Get the IMDB App <i className="bi bi-box-arrow-in-up-right"></i> </p>
                <p className='redirects-p'>Help <i className="bi bi-box-arrow-in-up-right"></i> </p>
                <p className='redirects-p'>Site Index<i className="bi bi-box-arrow-in-up-right"></i> </p>
                <p className='redirects-p'>IMDbPro <i className="bi bi-box-arrow-in-up-right"></i> </p>
                <p className='redirects-p'>Box Office Mojo <i className="bi bi-box-arrow-in-up-right"></i> </p>
                <p className='redirects-p'>IMDb Developer <i className="bi bi-box-arrow-in-up-right"></i> </p>
            </div>
            <div className='redirect'>
                <p className='redirects-p2'>Press Room</p>
                <p className='redirects-p2'>Advertising <i className="bi bi-box-arrow-in-up-right"></i></p>
                <p className='redirects-p2'>Jobs<i className="bi bi-box-arrow-in-up-right"></i></p>
                <p className='redirects-p2'>Condition of Use</p>
                <p className='redirects-p2'>Privacy Policy</p>
                <p className='redirects-p2'>Your Ads Privacy Choices</p>
            </div>

            <div>
                <p className='mt-2 text-white'>an <span>amazon</span> Company</p>
                <small className='text-secondary'>&#169; 1990-2023 by IMDB.com, Inc.</small>
            </div>
        </div>
    );
}
export default Footer;