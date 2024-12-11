import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import NotFound from "../components/NotFound";

const generatePage = (pageName) => {
  const component = () => require(`../pages/${pageName}`).default;

  try {
    return React.createElement(component());
  } catch (error) {
    return <NotFound />;
  }
};
const firstLogin = localStorage.getItem("firstLogin");

function PageRender() {
  const { auth } = useSelector((state) => state);
  const { page, id } = useParams();
  let pageName = "";

  if (id) {
    pageName = `${page}/[id]`;
  } else {
    pageName = `${page}`;
  }

  return firstLogin ? generatePage(pageName) : <Navigate to="/" />;
}

export default PageRender;
