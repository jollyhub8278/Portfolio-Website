import React from "react";
import "./About.css";
// import Jump from "react-reveal/Jump";

const About = () => {
  return (
    <>
      {/* <Jump> */}
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              {/* <img
                src="D:/portfolio_website/client/src/assets/docs/IMG-20240312-WA0055.jpg"
              /> */}
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              Hello! I'm an enthusiastic software developer currently pursuing my BTech at 
              IIT Guwahati, blending curiosity with creativity in all that I do. My
              passion lies in coding, where I turn ideas into functional and impactful
              software. A tech enthusiast at heart, I’m constantly exploring innovative
              solutions and pushing the boundaries of what’s possible in technology.
              Beyond academics and coding, I bring my excellent soft skills to the table
              , making me a great collaborator and communicator. When I’m not immersed in
              technology, you’ll find me on the football field chasing goals, experimenting 
              with flavors in the kitchen, or creating art through sketching. Every day, I 
              strive to merge logic with artistry, whether I’m debugging code, sketching a 
              masterpiece, or crafting a delicious dish. Let’s connect and create something 
              amazing together!
              </p>
            </div>
          </div>
        </div>
      {/* </Jump> */}
    </>
  );
};

export default About;