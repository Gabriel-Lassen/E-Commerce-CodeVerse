import BannerMsg from "../../components/banner-msg";
import Brands from "../../components/Shop-Brands-home";
import Footer from "../../components/footer";
import Handpicked from "../../components/handpickedCollections";
import Header from "../../components/header";
import HeroBannerHome from "../../components/heroBanner-home";
import TopCategories from "../../components/TopCategories-home";
import ProductsCarousel from "../../components/productsCarousel";
import Navbar from "../../components/navbar";

const Home = () => {
  return (
    <>
      <Header />
      <BannerMsg/>
      <HeroBannerHome />
      <TopCategories />
      <ProductsCarousel />
      <Handpicked />
      <Brands/>
      <Footer />
      <Navbar/>
    </>
  );
};

export default Home;
