import React from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <section className="loginPage py-8 relative">
      <div className="container">
        <Card
          color="transparent"
          shadow={false}
          className="py-8 columns-1 md:w-1/2 mx-auto">
          <Typography variant="h4" className="text-olive">
            Login
          </Typography>
          <Typography className="mt-1 text-olive font-normal">
            Welcome Back!
          </Typography>
          <form className="mt-8 mb-2 w-full max-w-screen-lg">
            <div className="mb-1 flex flex-col gap-6">
              <Typography
                variant="h6"
                className="-mb-3 text-left text-neutral-600  dark:text-white">
                Your Email
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-dirtyPink focus:!border-tealGrey"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                
              />
              <Typography
                variant="h6"
                className="-mb-3 text-left text-neutral-600  dark:text-white">
                Password
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-dirtyPink focus:!border-tealGrey"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                
              />
            </div>

            <Button className="mt-6 bg-dirtyPink hover:bg-pinkGrey text-olive">
              Login
            </Button>
            <Typography
              color="gray"
              className="mt-4 text-center font-normal text-neutral-600">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-neutral-800 underline underline-offset-2">
                Sign Up
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default LoginPage;
