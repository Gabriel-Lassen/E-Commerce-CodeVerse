
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BtnBackForPage from "../../components/BtnBackForPage";
import ArrowSvg from "../../components/ArrowSvg";

import { useState, useEffect } from "react";
import ProfileInformation from "../../components/Personal-information";

const PersonalInformation = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleHidden = () => {
      setHidden(window.innerWidth >= 768);
    };

    handleHidden();

    window.addEventListener("resize", handleHidden);
  });
  return (
    <div>
      {hidden && <Header />}
      <BtnBackForPage
        svg={<ArrowSvg color="var(--Primary)" direction="left" />}
        text="Personal Information"
      />
      <ProfileInformation />
      {hidden && <Footer />}
    </div>
  );
};

export default PersonalInformation;
