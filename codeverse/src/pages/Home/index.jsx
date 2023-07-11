import Footer from "../../components/footer";
import Header from "../../components/header";
import HeroBannerHome from "../../components/heroBanner-home";
import ProductsCarousel from "../../components/productsCarousel";

const Home = () => {
  return  (
    <>
      <Header />
      <HeroBannerHome />
      <ProductsCarousel />
      <Footer />
    </>
  );
};

export default Home;
