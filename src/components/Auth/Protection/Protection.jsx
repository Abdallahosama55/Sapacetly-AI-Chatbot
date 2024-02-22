import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Protection = ({ children }) => {
  const navigate = useNavigate();
  // const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/signin");
    }
    // if (token) navigate("/ChatRoutes");
  }, [token]);

  return token ? children : null;
};

export default Protection;
