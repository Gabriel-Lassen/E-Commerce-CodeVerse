import { Navigate } from "react-router-dom";

const PriviteRoutes = ({ children }) => {
  const storageUser = localStorage.getItem("CodeVerse");

  if (!storageUser) {
    return <Navigate to="/getstarted" />;
  }

  return children;
};

export default PriviteRoutes;
