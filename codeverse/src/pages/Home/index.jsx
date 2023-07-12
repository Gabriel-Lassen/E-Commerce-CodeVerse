import Footer from "../../components/footer";
import Handpicked from "../../components/handpickedCollections";
import Header from "../../components/header";
import HeroBannerHome from "../../components/heroBanner-home";

const Home = () => {
  return (
    <>
      <Header />
      <HeroBannerHome />
      <Handpicked />
      <Footer />
    </>
  );
};

export default Home;
