import React from "react";
import "./Projects.css";
// import Spin from "react-reveal/Spin";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
           PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia a
          odit ab, eligendi cupiditate, minima quasi excepturi modi et quo
          delectus, iusto dolor atque aliquam aspernatur eveniet! Ipsam eum
          nobis omnis id voluptatibus quas eos maxime ipsum facere numquam,
          voluptate qui et animi doloribus nulla eius molestiae unde tempore ad
        </p>
        {/* card design */}
        <div className="row" id="ads">
          {/* <Spin> */}
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  
                  <img
                    src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Portfolio-Website
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/techinfo-youtube/ecommerce-app-2023"
                  >
                    View
                  </a>
                  <a className="sourceCode"
                  href="https://github.com/jollyhub8278/Portfolio-Website">
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                 
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToZecMggX5KTy0-zpTYxJIvstegV9-3HgiEw&s"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React based app</span>

                  <span className="card-detail-badge">Responsive</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Weather-App</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://weather-app-chi-three-27.vercel.app/"
                  >
                    View
                  </a>
                  <a className="sourceCode"
                  href="https://github.com/jollyhub8278/weather-app">
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  
                  <img
                    src="https://cdn.shopify.com/s/files/1/0070/7032/files/dalai-lama-quote.png?v=1706740038"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">ReactJs</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Quote-Generator</h5>
                  </div>
                  <a className="ad-btn" href="https://advice-generator-weld-chi.vercel.app/">
                    View
                  </a>
                  <a className="sourceCode"
                  href="https://github.com/jollyhub8278/advice-generator">
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  
                  <img
                    src="https://cdn.shopify.com/s/files/1/0070/7032/files/dalai-lama-quote.png?v=1706740038"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">Javascript</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Tic-Tac-Toe</h5>
                  </div>
                  <a className="ad-btn" 
                  href="https://tic-tac-toe-snowy-delta.vercel.app/">
                    View
                  </a>
                  <a className="sourceCode"
                  href="https://github.com/jollyhub8278/Tic-Tac-Toe-">
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          {/* </Spin> */}
        </div>
      </div>
    </>
  );
};

export default Projects;