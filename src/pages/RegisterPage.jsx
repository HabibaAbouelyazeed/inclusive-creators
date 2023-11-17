import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/Firebase/firebase";
import { Button } from "@material-tailwind/react";
import profileImage from "../assets/images/profile.jpg";

const RegisterPage = () => {
  const [signUpState, setSignUpState] = useState("");

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const createUser = (usrEmail, usrPassword) => {
    createUserWithEmailAndPassword(auth, usrEmail, usrPassword)
      .then((userCredential) => {
        // Signed up
        // console.log('User Credential',userCredential);
        const user = userCredential.user;
        // console.log("user:", user)
        setSignUpState(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setSignUpState(false);
      });
  };

  const submitSignUpForm = (e) => {
    createUser(e.email, e.password);
  };

  return (
    <section className="relative bannerBg py-8">
      <div
        className="w-full h-full absolute top-0 left-0 py-8 -z-10  bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url('../public/assets/loginBanner.jpg')`,
        }}></div>
      <div className="container mx-auto">
        <h2 className="text-left mx-auto w-10/12 py-4 font-semibold text-olive text:lg md:text-3xl">
          Register
        </h2>
        <form
          className=" mx-auto text-left w-10/12 shadow-xl p-8"
          onSubmit={handleSubmit(submitSignUpForm)}>
          <div className="grid gap-0 md:grid-cols-3 md:gap-12">
            <div>
              <figure className="order-first md:order-last mx-auto  w-40 py-auto">
                <label htmlFor="myfile" className="cursor-pointer">
                  <img
                    src={profileImage}
                    alt="User's profile picture"
                    className="rounded-full"
                  />
                </label>
                <input
                  type="file"
                  id="myfile"
                  className="hidden"
                  name="userImg"
                />
              </figure>
              <h2 className="text-sm sm:text-lg capitalize text-center font-medium text-neutral-600 mb-4 md:mb-0  ">
                Upload Profile Picture
              </h2>
            </div>

            <div className="order-last md:order-first md:col-span-2 ">
              <div className="flex flex-col md:flex-row">
                <div className="mb-8 md:mr-8">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm sm:text-lg capitalize font-medium text-neutral-600  dark:text-white">
                    First name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-neutral-100 border border-dirtyPink text-neutral-600 text-base rounded-lg  focus:outline-none block w-full p-2.5 font-normal  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John"
                    name="firstName"
                    {...register("firstName", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                  />
                  {errors?.firstName && (
                    <p className="text-red ps-2">{errors.firstName.message}</p>
                  )}
                </div>
                <div className="mb-8">
                  <label
                    htmlFor="last_name"
                    className="block mb-2 text-sm sm:text-lg capitalize font-medium text-neutral-600  dark:text-white">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className="bg-neutral-100 border border-dirtyPink text-neutral-600 text-base rounded-lg  focus:outline-none block w-full p-2.5 font-normal  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Doe"
                    name="lastName"
                    {...register("lastName", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                  />
                  {errors?.lastName && (
                    <p className="text-red ps-2">{errors.lastName.message}</p>
                  )}
                </div>
              </div>
              <div className="mb-8">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm sm:text-lg capitalize font-medium text-neutral-600  dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-neutral-100 border border-dirtyPink text-neutral-600 text-base rounded-lg  focus:outline-none block w-full p-2.5 font-normal  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john.doe@company.com"
                  name="e-mail"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Incorrect email format",
                    },
                  })}
                />
                {errors?.email && (
                  <p className="text-red ps-2">{errors.email.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className="mb-8">
            <label
              htmlFor="address"
              className="block mb-2 text-sm sm:text-lg capitalize font-medium text-neutral-600  dark:text-white">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="bg-neutral-100 border border-dirtyPink text-neutral-600 text-base rounded-lg  focus:outline-none block w-full p-2.5 font-normal  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123-Any Street"
              name="address"
              {...register("address", {
                required: { value: true, message: "This field is required" },
              })}
            />
            {errors?.address && (
              <p className="text-red ps-2">{errors.address.message}</p>
            )}
          </div>
          <div className="grid md:gap-x-8 md:grid-cols-2">
            <div className="mb-8">
              <label
                htmlFor="city"
                className="block mb-2 text-sm sm:text-lg capitalize font-medium text-neutral-600  dark:text-white">
                City
              </label>
              <input
                type="text"
                id="city"
                className="bg-neutral-100 border border-dirtyPink text-neutral-600 text-base rounded-lg  focus:outline-none block w-full p-2.5 font-normal  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Alexandria"
                name="city"
                {...register("city", {
                  required: { value: true, message: "This field is required" },
                })}
              />
              {errors?.city && (
                <p className="text-red ps-2">{errors.city.message}</p>
              )}
            </div>
            <div className="mb-8">
              <label
                htmlFor="country"
                className="block mb-2 text-sm sm:text-lg capitalize font-medium text-neutral-600  dark:text-white">
                Country
              </label>
              <input
                type="text"
                id="country"
                className="bg-neutral-100 border border-dirtyPink text-neutral-600 text-base rounded-lg  focus:outline-none block w-full p-2.5 font-normal  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Egypt"
                name="country"
                {...register("country", {
                  required: { value: true, message: "This field is required" },
                })}
              />
              {errors?.country && (
                <p className="text-red ps-2">{errors.country.message}</p>
              )}
            </div>
            <div className="mb-8">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm sm:text-lg capitalize font-medium text-neutral-600  dark:text-white">
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                className="bg-neutral-100 border border-dirtyPink text-neutral-600 text-base rounded-lg  focus:outline-none block w-full p-2.5 font-normal  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="ex: 123-45-678"
                name="phoneNumber"
                {...register("phoneNumber", {
                  required: { value: true, message: "This field is required" },
                  pattern: {
                    value: /[0-9]{3}-[0-9]{2}-[0-9]{3}/,
                    message: "Follow phone pattern: 123-45-678",
                  },
                })}
              />
              {errors?.phoneNumber && (
                <p className="text-red ps-2">{errors.phoneNumber.message}</p>
              )}
            </div>
            <div className="mb-8">
              <label
                htmlFor="zipCode"
                className="block mb-2 text-sm sm:text-lg capitalize font-medium text-neutral-600  dark:text-white">
                Zip/Code
              </label>
              <input
                type="text"
                id="zipCode"
                className="bg-neutral-100 border border-dirtyPink text-neutral-600 text-base rounded-lg  focus:outline-none block w-full p-2.5 font-normal  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter ZIP Code"
                name="zipCode"
              />
            </div>
            <div className="mb-8">
              <label
                htmlFor="password"
                className="block mb-2 text-sm sm:text-lg capitalize font-medium text-neutral-600  dark:text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-neutral-100 border border-dirtyPink text-neutral-600 text-base rounded-lg  focus:outline-none block w-full p-2.5 font-normal  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="•••••••••"
                name="password"
                {...register("password", {
                  required: { value: true, message: "This field is required" },
                  minLength: {
                    value: 6,
                    message: "Min length for password is 6",
                  },
                })}
              />
              {errors?.password && (
                <p className="text-red ps-2">{errors.password.message}</p>
              )}
            </div>
            <div className="mb-8">
              <label
                htmlFor="confirm_password"
                className="block mb-2 text-sm sm:text-lg capitalize font-medium text-neutral-600  dark:text-white">
                Confirm password
              </label>
              <input
                type="password"
                id="confirm_password"
                className="bg-neutral-100 border border-dirtyPink text-neutral-600 text-base rounded-lg  focus:outline-none block w-full p-2.5 font-normal  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="•••••••••"
                name="confirmPassword"
                {...register("confirmPassword", {
                  required: { value: true, message: "This field is required" },
                  validate: (val) =>
                    val === watch("password") || "Password doesn't match",
                })}
              />
              {errors?.confirmPassword && (
                <p className="text-red ps-2">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>
          <div className="mb-8">
            <label
              htmlFor="about"
              className="block mb-2 text-sm sm:text-lg capitalize font-medium text-neutral-600  dark:text-white">
              About
            </label>
            <textarea
              type="text"
              id="about"
              className="bg-neutral-100 border border-dirtyPink text-neutral-600 text-base rounded-lg  focus:outline-none block w-full p-2.5 font-normal  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              name="about"
            />
          </div>
          <div className="flex items-start mb-8">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-dirtyPink rounded bg-neutral-100 focus:ring-3 focus:ring-dirtyPink dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                {...register("termsAndConditions", {
                  required: { value: true, message: "This field is required" },
                })}
              />
            </div>
            <label
              htmlFor="remember"
              className="ms-2 text-base font-medium text-neutral-600 dark:text-gray-300">
              I agree with the{" "}
              <a
                href="#"
                className="text-dirtyPink hover:underline dark:text-blue-500">
                terms and conditions
              </a>
              .
            </label>
            {errors?.termsAndConditions && (
              <p className="text-red ps-2">
                {errors.termsAndConditions.message}
              </p>
            )}
          </div>
          <div className="flex justify-center">
            <Button
              type="submit"
              className="w-full md:w-40 font-bold text-olive bg-dirtyPink hover:bg-pinkGrey  focus:outline-none font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Sign Up
            </Button>
          </div>
          <div className="mt-4 text-center font-normal text-neutral-600">
            Don't have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-neutral-800 underline underline-offset-2">
              Login
            </Link>
          </div>
          <div>
            {signUpState === true && (
              <p className="text-olive mt-2">Signed up Successfullly</p>
            )}
            {signUpState === false && (
              <p className="text-red mt-2">Sign up Failed</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;
