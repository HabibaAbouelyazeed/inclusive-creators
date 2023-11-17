import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/Firebase/firebase";
import { Card, Input, Button, Typography } from "@material-tailwind/react";

const LoginPage = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitLoginForm = (e) => {
    signInWithEmailAndPassword(auth, e.email, e.password)
      .then((userCredential) => {
        setLoggedIn(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoggedIn(false);
      });
  };

  return (
    <section className="py-8 relative">
      <div
        className="w-full h-full absolute top-0 left-0 py-8 -z-10 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url('../public/assets/loginBanner.jpg')`,
        }}></div>
      <div className="container">
        <Card
          color="transparent"
          shadow={true}
          className="p-8 columns-1 md:w-1/2 mx-auto">
          <Typography variant="h3" className="text-olive">
            Login
          </Typography>
          <Typography className="mt-1 text-olive font-normal">
            Welcome Back!
          </Typography>
          <form
            className="mt-8 mb-2 w-full max-w-screen-lg"
            onSubmit={handleSubmit(submitLoginForm)}>
            <div className="mb-1 flex flex-col gap-6">
              <Typography
                variant="h6"
                className="-mb-3 text-left text-neutral-600  dark:text-white">
                Your Email
              </Typography>
              <Input
                size="lg"
                placeholder="example@email.com"
                className=" !border-dirtyPink focus:!border-tealGrey"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...register("email", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                })}
              />
              {errors?.email && (
                <p className="text-red text-start ps-2">
                  {errors.email.message}
                </p>
              )}
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
                {...register("password", {
                  required: { value: true, message: "This field is required" },
                })}
              />
              {errors?.password && (
                <p className="text-red text-start ps-2">
                  {errors.password.message}
                </p>
              )}
            </div>
            {!loggedIn && (
              <p className="text-red text-start mt-4">
                User credentials don't match. Check again or Sign up if you don't
                have an account.
              </p>
            )}
            <Button
              type="submit"
              className="mt-6 bg-dirtyPink hover:bg-pinkGrey text-olive">
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
