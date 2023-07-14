import BannerMsg from "../../components/banner-msg";
import Footer from "../../components/footer";
import Header from "../../components/header";
import HeroBannerHome from "../../components/heroBanner-home";
import TopCategories from "../../components/TopCategories-home";
import ProductsCarousel from "../../components/productsCarousel";

const Home = () => {
  return (
    <>
      <Header />
      <BannerMsg/>
      <HeroBannerHome />
      <TopCategories />
      <ProductsCarousel />
      <Footer />
    </>
  );
};

export default Home;
