import Footer from "../../components/footer";
import Header from "../../components/header";
import HeroBannerHome from "../../components/heroBanner-home";
import { useEffect, useState } from "react";

const Home = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleHidden = () => {
      setHidden(window.innerWidth <= 720);
    };

    handleHidden();

    window.addEventListener("resize", handleHidden);
  });

  return (
    <>
      <Header />
      <HeroBannerHome />
      {hidden && <HeroBannerHome order="row-reverse" text={true} />}
      <Footer />
    </>
  );
};

export default Home;
