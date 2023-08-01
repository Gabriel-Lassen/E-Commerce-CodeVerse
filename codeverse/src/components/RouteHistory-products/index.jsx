import React from "react";
import { Link, useLocation } from "react-router-dom";

import arrow from "../../assets/imgs/icon-crevron-right-small.png";

const RouteHistoryProducts = () => {
  const pathnames = location.pathname.split("/");
  const location = useLocation();

  const BreadcrumbTags = {
    "": "Home",
    "": "Handbags",
    "": "Watches",
    "": "Skincare",
    "": "Jewellery",
    "": "Apparels",
  };

  const BreadcrumbSegments = pathnames.map((pathname, index) => {
    const routeTo = `/${pathname.slice(0, index + 1).join("/")}`;

    const label = BreadcrumbTags[pathname] || pathname;

    return { label, link: routeTo };
  });

  return (
    <nav>
      <ul>
        {BreadcrumbSegments.map((segment, index))}
        <li key={index}></li>
      </ul>
    </nav>
  );
};

export default RouteHistoryProducts;
