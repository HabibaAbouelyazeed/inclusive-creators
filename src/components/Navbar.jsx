import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/Firebase/firebase";
import { signOut } from "firebase/auth";
import {
  Navbar as NavComponent,
  Collapse,
  Typography,
  IconButton,
  Button,
  Avatar,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const [openNav, setOpenNav] = useState(false);
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleLogout = () => {
    signOut(auth);
    navigate("/");
  };
  return (
    <header className="appNavbar w-100 bg-olive text-secondary-300">
      <NavComponent className="py-8 mx-auto max-w-full bg-olive border-0 rounded-none">
        <div className="container flex items-center justify-between text-secondary-300">
          <Typography variant="h4" className="mr-4 cursor-pointer py-1.5">
            <NavLink to="/">InCreators</NavLink>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="hidden lg:block mr-4">
              <NavList />
            </div>
            {!user && (
              <div className="flex items-center gap-x-2">
                <NavLink
                  to="/register"
                  className={(isActive) =>
                    !isActive ? " text-secondary-300" : "text-olive"
                  }>
                  <Button
                    size="md"
                    className="hidden lg:inline-block bg-dirtyPink">
                    Sign Up
                  </Button>
                </NavLink>
                <NavLink to="/login">
                  <Button
                    variant="text"
                    size="md"
                    className="hidden lg:inline-block border-2 border-dirtyPink text-secondary-300">
                    Login
                  </Button>
                </NavLink>
              </div>
            )}
            {!!user && (
              <Button
                onClick={() => handleLogout()}
                size="md"
                className="hidden lg:inline-block bg-dirtyPink ">
                logout
              </Button>
            )}
          </div>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}>
            {openNav ? (
              <FontAwesomeIcon icon={faXmark} className=""></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={faBars} className=""></FontAwesomeIcon>
            )}
          </IconButton>
        </div>

        <Collapse open={openNav} className="container">
          <NavList />
          {!user && (
            <div className="flex items-center gap-x-1">
              <NavLink to="/register">
                <Button fullWidth size="sm" className="bg-dirtyPink text-olive">
                  Sign Up
                </Button>
              </NavLink>
              <NavLink to="/login">
                <Button
                  fullWidth
                  variant="text"
                  size="sm"
                  className="text-secondary-300">
                  Login
                </Button>
              </NavLink>
            </div>
          )}
          {!!user && (
            <Button
              onClick={() => handleLogout()}
              fullWidth
              size="sm"
              className="mt-4 bg-dirtyPink text-olive">
              logout
            </Button>
          )}
        </Collapse>
      </NavComponent>
    </header>
  );
};

const NavList = () => {
  const [user] = useAuthState(auth);
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography as="li" variant="small" className="p-1 font-medium text-lg">
        <NavLink
          to="/home"
          className="flex items-center hover:text-pinkGrey transition-colors">
          Home
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium text-lg">
        <NavLink
          to="/courses"
          className="flex items-center hover:text-pinkGrey transition-colors">
          Courses
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium text-lg">
        <NavLink
          to="/events"
          className="flex items-center hover:text-pinkGrey transition-colors">
          Events
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium text-lg">
        <NavLink
          to="/articles"
          className="flex items-center hover:text-pinkGrey transition-colors">
          Articles
        </NavLink>
      </Typography>
      {!!user && (
        <Typography as="li" variant="small" className="p-1 font-medium text-lg">
          <NavLink
            to="/profile"
            className="flex items-center hover:text-pinkGrey transition-colors">
            <Avatar
              src="../assets/Courses/2.jpg"
              withBorder={true}
              className="border-dirtyPink"
              alt="avatar"
            />
          </NavLink>
        </Typography>
      )}
    </ul>
  );
};
