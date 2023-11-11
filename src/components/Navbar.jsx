// import React from "react";
// import { NavLink } from "react-router-dom";
// import {
//   Navbar as NavComponent,
//   Collapse,
//   Typography,
//   IconButton,
//   Button,
//   Avatar,
// } from "@material-tailwind/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

// export const Navbar = () => {
//   const [openNav, setOpenNav] = React.useState(false);

//   const handleWindowResize = () =>
//     window.innerWidth >= 960 && setOpenNav(false);

//   React.useEffect(() => {
//     window.addEventListener("resize", handleWindowResize);

//     return () => {
//       window.removeEventListener("resize", handleWindowResize);
//     };
//   }, []);
//   return (

//     <header className="appNavbar p-4 w-100 bg-olive text-secondary-300">
//       <div className="container flex justify-between h-16 mx-auto">
//         <NavLink
//           exact
//           to="/"
//           aria-label="Back to homepage"
//           className="flex items-center p-2">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="currentColor"
//             viewBox="0 0 32 32"
//             className="w-8 h-8 text-secondary-300">
//             <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
//             <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
//           </svg>
//         </NavLink>
//         <ul className="items-stretch hidden space-x-3 lg:flex">
//           <li className="flex">
//             <NavLink
//               to="/home"
//               activeClassName="text-dirtyPink border-b-2 border-dirtyPink"
//               className="flex items-center px-4 -mb-1 border-transparent hover:text-pinkGrey">
//               Home
//             </NavLink>
//           </li>
//           <li className="flex">
//             <NavLink
//               to="/courses"
//               className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-pinkGrey">
//               Courses
//             </NavLink>
//           </li>
//           <li className="flex">
//             <NavLink
//               to="/events"
//               className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-pinkGrey">
//               Events
//             </NavLink>
//           </li>
//           <li className="flex">
//             <NavLink
//               to="/articles"
//               className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-pinkGrey">
//               Articles
//             </NavLink>
//           </li>
//         </ul>
//         <div className="items-center flex-shrink-0 hidden lg:flex lg:gap-2">
//           <button className="self-center px-8 py-3 rounded bg-dirtyPink text-olive">
//             Sign in
//           </button>
//           <button className="self-center px-8 py-3 font-semibold rounded border-2 border-dirtyPink text-secondary-300">
//             Login
//           </button>
//           </div>
// <header/>
//     <header className="appNavbar w-100 bg-olive text-secondary-300">
//       <NavComponent className="py-8 mx-auto max-w-full bg-olive border-0 rounded-none">
//         <div className="container flex items-center justify-between text-secondary-300">
//           <Typography variant="h5" className="mr-4 cursor-pointer py-1.5">
//             <NavLink to="/">InCreators</NavLink>
//           </Typography>
//           <div className="flex items-center gap-4">
//             <div className="hidden lg:block mr-4">
//               <NavList />
//             </div>
//             <div className="flex items-center gap-x-2">
//               <Button size="sm" className="hidden lg:inline-block bg-dirtyPink ">
//               <NavLink to="/register" className={isActive => (!isActive ? " text-secondary-300" : "text-olive")}>
//               Sign in
//               </NavLink>
//               </Button>
//               <Button
//                 variant="text"
//                 size="sm"
//                 className="hidden lg:inline-block border-2 border-dirtyPink text-secondary-300">
//                 <NavLink to="/login">
//                 Login
//               </NavLink>
//               </Button>
//             </div>
//           </div>

//           <IconButton
//             variant="text"
//             className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
//             ripple={false}
//             onClick={() => setOpenNav(!openNav)}>
//             {openNav ? (
//               <FontAwesomeIcon icon={faXmark} className=""></FontAwesomeIcon>
//             ) : (
//               <FontAwesomeIcon icon={faBars} className=""></FontAwesomeIcon>
//             )}
//           </IconButton>
//         </div>

//         <Collapse open={openNav} className="container">
//           <NavList />
//           <div className="flex items-center gap-x-1">
//             <Button fullWidth size="sm" className="bg-dirtyPink text-olive">
//               <NavLink to="/register">
//               Sign in
//               </NavLink>
//             </Button>
//             <Button fullWidth variant="text" size="sm" className="text-secondary-300">
//               <NavLink to="/login">
//                 Login
//               </NavLink>
//             </Button>
//           </div>
//         </Collapse>
//       </NavComponent>

//     </header>

//   );
// };

// const NavList = () => {
//   return (
//     <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
//       <Typography as="li" variant="small" className="p-1 font-medium">
//         <NavLink
//           to="/home"
//           className="flex items-center hover:text-pinkGrey transition-colors">
//           Home
//         </NavLink>
//       </Typography>
//       <Typography as="li" variant="small" className="p-1 font-medium">
//         <NavLink
//           to="/courses"
//           className="flex items-center hover:text-pinkGrey transition-colors">
//           Courses
//         </NavLink>
//       </Typography>
//       <Typography as="li" variant="small" className="p-1 font-medium">
//         <NavLink
//           to="/events"
//           className="flex items-center hover:text-pinkGrey transition-colors">
//           Events
//         </NavLink>
//       </Typography>
//       <Typography as="li" variant="small" className="p-1 font-medium">
//         <NavLink
//           to="/articles"
//           className="flex items-center hover:text-pinkGrey transition-colors">
//           Articles
//         </NavLink>
//       </Typography>
//       <Typography as="li" variant="small" className="p-1 font-medium">
//         <NavLink
//           to="/profile"
//           className="flex items-center hover:text-pinkGrey transition-colors">
//           <Avatar src="../assets/2.jpg" withBorder={true} className="border-dirtyPink" alt="avatar" />
//         </NavLink>
//       </Typography>
//     </ul>
//   );
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
              <Button
                size="sm"
                className="hidden lg:inline-block bg-dirtyPink "
              >
                <NavLink
                  to="/register"
                  className={(isActive) =>
                    !isActive ? " text-secondary-300" : "text-olive"
                  }
                >
                  Sign Up
                </NavLink>
              </Button>
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block border-2 border-dirtyPink text-secondary-300"
              >
                <NavLink to="/login">Login</NavLink>
              </Button>
            </div>
          </div>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
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
              <NavLink to="/register">Sign Up</NavLink>
            </Button>
            <Button
              fullWidth
              variant="text"
              size="sm"
              className="text-secondary-300"
            >
              <NavLink to="/login">Login</NavLink>
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
          className="flex items-center hover:text-pinkGrey transition-colors"
        >
          Home
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <NavLink
          to="/courses"
          className="flex items-center hover:text-pinkGrey transition-colors"
        >
          Courses
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <NavLink
          to="/events"
          className="flex items-center hover:text-pinkGrey transition-colors"
        >
          Events
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <NavLink
          to="/articles"
          className="flex items-center hover:text-pinkGrey transition-colors"
        >
          Articles
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <NavLink
          to="/profile"
          className="flex items-center hover:text-pinkGrey transition-colors"
        >
          <Avatar
            src="../assets/2.jpg"
            withBorder={true}
            className="border-dirtyPink"
            alt="avatar"
          />
        </NavLink>
      </Typography>
    </ul>
  );
};
