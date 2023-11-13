import React from "react";
import profileImage from "../assets/images/profile.jpg";
import { Link } from "react-router-dom";
import {
  Button,
} from "@material-tailwind/react";

const RegisterPage = () => {
  return (
    <section className="register py-8">
      <div className="container mx-auto">
        <h1 className="text-left mx-auto w-10/12 py-4 font-semibold text-olive text:lg md:text-3xl">
          Register
        </h1>
        <form className=" mx-auto text-left w-10/12 shadow-xl p-8">
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
                    required
                    name="firstName"
                  />
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
                    required
                    name="lastName"
                  />
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
                  required
                  name="e-mail"
                />
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
              required
              name="address"
            />
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
                required
                name="city"
              />
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
                required
                name="country"
              />
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
                placeholder="Enter phone number"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
                name="phoneNumber"
              />
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
                required
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
                required
                name="password"
              />
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
                required
                name="confirmPassword"
              />
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
              required
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
                required
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
          </div>
          <div className="flex justify-center">
            <Button
              type="submit"
              className="w-full md:w-40 font-bold text-olive bg-dirtyPink hover:bg-pinkGrey  focus:outline-none font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Submit
            </Button>
          </div>
          <div className="mt-4 text-center font-normal text-neutral-600">
            Don't have an account?{" "}
            <Link to="/login" className="font-medium text-neutral-800 underline underline-offset-2">
              Login
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;
