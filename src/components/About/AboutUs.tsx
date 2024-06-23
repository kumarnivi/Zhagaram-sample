import './aboutUs.css';
import aboutImg from '../../assets/images/trust-2.png';
function AboutUs(){
    return(
        <>
        <div className="container pb-5" style={{background:'#fff'}}>
    <div className="row" style={{paddingBottom: '33px'}}>
        <div className="heading-container">
            <h1 className="big-text">ABOUT</h1>
            <h2 className="small-text">About Us</h2>
        </div>
    </div>

    <div className="row">
        <div className="col-md-6">
            <div className="about-img">
                <img src={aboutImg} alt="trust" />
            </div>
         
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="about-texts">
                <h4>
                    Why do we use it?
                </h4>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.
                </p>
                <button className="btn about-btn">More Details</button>
            </div>
        </div>
    </div>
</div>
        </>
    )
}

export default AboutUs;