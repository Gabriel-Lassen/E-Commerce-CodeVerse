import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SideBarProfile from "../../components/SideBar-Profile"
import Navbar from "../../components/navbar";
import Logout from "../../components/BtnLogout";

const Profile = () => {

  const navigate = useNavigate();
   
  const handleResize = () => {
    const windowWidth = window.innerWidth;


    const breakpointWidth = 768;


    if (windowWidth >= breakpointWidth) {
      navigate("/profile/personalinformation");
    }
  };


  useEffect(() => {
    handleResize();


    window.addEventListener("resize", handleResize);


    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div>
        <SideBarProfile/>
        <Logout/>
        <Navbar/>
      </div>
    </>
  )
}

export default Profile;