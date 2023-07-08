import React from "react";
import ContentAbout from "../../components/Content-About";
import Header from "../../components/header";
import Footer from "../../components/footer";
import HeroBannerAbout from "../../components/heroBanner-about";

const About = () => {
  return (
    <>
      <Header />
      <HeroBannerAbout />
      <ContentAbout />
      <Footer />
    </>
  );
};

export default About;
