import React from "react";
import { NavLink } from "react-router-dom";
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
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <header className="appNavbar w-100 bg-olive text-secondary-300">
      <NavComponent className="py-8 mx-auto max-w-full bg-olive border-0 rounded-none">
        <div className="container flex items-center justify-between text-secondary-300">
          <Typography variant="h5" className="mr-4 cursor-pointer py-1.5">
            <NavLink to="/">InCreators</NavLink>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="hidden lg:block mr-4">
              <NavList />
            </div>
            <div className="flex items-center gap-x-2">
              <Button size="sm" className="hidden lg:inline-block bg-dirtyPink ">
              <NavLink to="/register" className={isActive => (!isActive ? " text-secondary-300" : "text-olive")}>
              Sign in
              </NavLink>
              </Button>
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block border-2 border-dirtyPink text-secondary-300">
                <NavLink to="/login">
                Login
              </NavLink>
              </Button>
            </div>
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
          <div className="flex items-center gap-x-1">
            <Button fullWidth size="sm" className="bg-dirtyPink text-olive">
              <NavLink to="/register">
              Sign in
              </NavLink>
            </Button>
            <Button fullWidth variant="text" size="sm" className="text-secondary-300">
              <NavLink to="/login">
                Login
              </NavLink>
            </Button>
          </div>
        </Collapse>
      </NavComponent>
      
    </header>
  );
};

const NavList = () => {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography as="li" variant="small" className="p-1 font-medium">
        <NavLink
          to="/home"
          className="flex items-center hover:text-pinkGrey transition-colors">
          Home
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <NavLink
          to="/courses"
          className="flex items-center hover:text-pinkGrey transition-colors">
          Courses
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <NavLink
          to="/events"
          className="flex items-center hover:text-pinkGrey transition-colors">
          Events
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <NavLink
          to="/articles"
          className="flex items-center hover:text-pinkGrey transition-colors">
          Articles
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <NavLink
          to="/profile"
          className="flex items-center hover:text-pinkGrey transition-colors">
          <Avatar src="../assets/2.jpg" withBorder={true} className="border-dirtyPink" alt="avatar" />
        </NavLink>
      </Typography>
    </ul>
  );
};
