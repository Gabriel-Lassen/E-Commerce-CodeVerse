import Brands from "../../components/Shop-Brands-home";
import Footer from "../../components/footer";
import Header from "../../components/header";
import HeroBannerHome from "../../components/heroBanner-home";

const Home = () => {
  return  (
    <>
      <Header />
      <HeroBannerHome />
      <Brands/>
      <Footer />
    </>
  );
};

export default Home;
