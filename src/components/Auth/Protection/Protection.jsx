import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protection = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/signin");
    }
  }, [token]);

  return token ? children : null;
};

export default Protection;
