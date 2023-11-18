import React from "react";
import {Navigate, Outlet } from "react-router-dom";

const GuardedRoute = ({ user, redirectPath="/", children }) => {
  if(!user){
    return <Navigate to={redirectPath} replace/>;
  }

  return children? children : <Outlet/>;
  
};

export default GuardedRoute;
