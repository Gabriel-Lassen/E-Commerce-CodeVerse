import ContentAbout from "../../components/Content-about";
import Header from "../../components/Header";
import HeroBannerAbout from "../../components/HeroBanner-about";
import Navbar from "../../components/Navbar";
import ShowFooter from "../../components/ShowFooter";

const About = () => {
  return (
    <div style={{display: "flex", flexDirection:"column", justifyContent: 'space-between', height: "100%"}}>
      <div>
      <Header />
      <HeroBannerAbout />
      <ContentAbout />
      <Navbar />
      </div>
      <ShowFooter />
    </div>
  );
};

export default About;
