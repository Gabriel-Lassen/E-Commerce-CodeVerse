import BannerMsg from "../../components/banner-msg";
import Footer from "../../components/footer";
import Header from "../../components/header";
import HeroBannerHome from "../../components/heroBanner-home";

const Home = () => {
  return  (
    <>
      <Header />
      <BannerMsg/>
      <HeroBannerHome />
      <Footer />
    </>
  );
};

export default Home;
