import Title from "./Title";
import "./About.css";

function About() {
    return ( 
        <>
            <Title mainTxt="About This App">
                <h5 className="main-para text-white">
                    What makes BizAd the #1 app for <br/>
                    advertising buisnesses
                </h5>
            </Title>

            <div className="main-content text-secondary text-center fs-5">
                Everyday many business owners choose to use our app to <br/>
                advertise their business and to gain more traction to their <br/>
                website and online store. 
            </div>

            <div className="btn btn-container d-flex justify-content-center
            mt-5">
                <button className="start-btn bg-primary text-white">
                    Start Today
                </button>
            </div>
        </>
     );
}

export default About;