import React from "react";
import "./Projects.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Projects = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
           PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
        Explore my collection of web development projects showcasing responsive designs, seamless user interfaces, and efficient functionality. These projects reflect my expertise in modern web technologies like React.js, Node.js, and MongoDB, blending creativity with robust coding practices. Dive into the details to see how I bring ideas to life in the digital world!    </p>
        {/* card design */}
        <div className="row" id="ads">
         <div className="mt-20">
        <Slider {...settings}>
          {data.map((d)=>(
            <div className=" h-[450px] text-balck rounded-xl ads-card">
              <div
                className="ads-image"
                style={{ backgroundImage: `url(${d.image})` }}
              ></div>
              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-xl font-semibold ads-name">{d.projectName}</p>
                <a href={d.view} target="_blank" rel="noopener noreferrer">
                  <button className="blue text-white text-lg px-6 py-1 rounded-xl ads-view">View</button>
                </a>
                <a href={d.source} target="_blank" rel="noopener noreferrer">
                  <button className="ads-source">Source Code</button>
                </a>
              </div>
            </div>
          ))}
         </Slider>
         </div>
        </div>
      </div>
    </>
  );
};

const data = [
  {
    // image: `#`,
    image : `https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg`,
    projectName : `Portfolio-Website`,
    view : `#`,
    sourceCode : `https://github.com/jollyhub8278/Portfolio-Website`,
  },
  {
    image : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToZecMggX5KTy0-zpTYxJIvstegV9-3HgiEw&s`,
    projectName : `Weather-App`,
    view : `https://weather-app-chi-three-27.vercel.app/`,
    sourceCode : `https://github.com/jollyhub8278/weather-app`,
  },
  {
    // image: `#`,
    image : `https://cdn.shopify.com/s/files/1/0070/7032/files/dalai-lama-quote.png?v=1706740038`,
    projectName : `Quote-generator`,
    view : `https://advice-generator-weld-chi.vercel.app/`,
    sourceCode : `https://github.com/jollyhub8278/advice-generator`,
  },
  {
    // image: `#`,
    image : `D:/portfolio_website/client/src/assets/docs/tic-tac-toe.jpg`,
    projectName : `Tic-Tac-Toe`,
    view : `https://tic-tac-toe-snowy-delta.vercel.app/`,
    sourceCode : `https://github.com/jollyhub8278/Tic-Tac-Toe-`,
  },
]
export default Projects;