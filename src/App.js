import React from "react";
import Layout from "./components/layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import WorkExp from "./pages/workExp/workExp";
import ScrollToTop from "react-scroll-to-top";
import { TfiArrowCircleUp } from "react-icons/tfi";
import MobileNav from "./components/MobileNav/MobileNav";
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
// import ScrollProgressLine from "@yiyb0603/react-scroll-progress-line";

function App() {
  return (
    <>
      <ToastContainer/>
      <MobileNav/>
      <Layout />
      <div className="container">
        <About />
        <Education />
        <Techstack />
        <Projects />
        <WorkExp />
        <Contact />
      </div>
      <ScrollToTop
        smooth
        color="white"
        component={<TfiArrowCircleUp />}
        style={{height:"50px",width:"50px", borderRadius:"25px"}}
      />
      <footer>
  <p>&copy; 2024 Portfolio-Website| All rights reserved |
    <a href="https://www.instagram.com/bharti_8278" target="_blank" rel="noopener noreferrer">Instagram</a> |
    <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
  </p>
</footer>

    </>
  );
}

export default App;
