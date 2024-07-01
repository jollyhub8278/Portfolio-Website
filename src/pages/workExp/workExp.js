import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./workExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Jan. 2024 - Mar. 2024"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h4 className="vertical-timeline-element-title">
                Devskillhub Training and Consultancy
              </h4>
              <h5 className="vertical-timeline-element-subtitle">
                Frontend Internship
              </h5>
              <p>
              Completed intensive training in <bold>HTML, CSS, JavaScript, and React,</bold> mastering the fundamentals of frontend
              development.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="May 2024 - Jul. 2024"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h4 className="vertical-timeline-element-title">
                GSSoC Contributor
              </h4>
              <h5 className="vertical-timeline-element-subtitle">
                Open source 
              </h5>
              <p>
              Contributed to open source projects by writing code, fixing bugs, and adding new features using technologies like
HTML, CSS, JavaScript, and React.

              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Jul. 2023 - Feb. 2024"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
              Media and Branding Core-team
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
              TEDxIITGuwahati
              </h4>
              <p>
              Developed and executed media strategies to promote the TEDx event, increasing online engagement and event
              visibility.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;