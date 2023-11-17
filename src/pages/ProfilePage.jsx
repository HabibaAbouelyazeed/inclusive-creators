import React, { useEffect, useState } from "react";
import { auth, db } from "../config/Firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, getDoc } from "firebase/firestore";
import profileImage from "../assets/images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const ProfilePage = () => {
  const [user] = useAuthState(auth);
  const [userInfo, setUserInfo] = useState("");

  const getUserInfo = async () => {
    try {
      const userRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(userRef);

      if (docSnap.exists()) {
        setUserInfo(docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    if (!!user) {
      getUserInfo();
    } else {
      setUserInfo("");
    }
  }, [user]);

  const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
  const addressIcon = <FontAwesomeIcon icon={faLocationDot} />;
  const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
  return (
    <>
      <section className="profile py-8">
        <div className="container mx-auto ">
          <div className="grid grid-cols-12 items-center">
            <div className="profile_details col-span-full md:col-span-4">
              <div className="mx-auto flex flex-col justify-center max-w-xs p-4">
                <figure className="my-4">
                  <img
                    src={profileImage}
                    alt="profile-img"
                    className="w-32 h-32 mx-auto md:mx-0 rounded-full dark:bg-gray-500 aspect-square"
                  />
                </figure>
                <div className="space-y-2 md:space-y-4 text-center md:text-left ">
                  <p className="text-subtle md:text-olive px-4 text-xs sm:text-base font-bold md:font-normal">
                    <strong className="text-subtle text-xl font-semibold hidden md:block">
                      Name
                    </strong>
                    {userInfo.displayName || "Name placeholder"}
                  </p>
                  <p className="text-olive px-4 text-xs sm:text-base font-semibold md:font-normal">
                    <strong className="text-subtle text-xl font-semibold hidden md:block">
                      E-mail
                    </strong>
                    <span className="mr-2 md:hidden">{emailIcon}</span>
                    {userInfo.email || "example@youremail.com"}
                  </p>
                  <p className="text-olive px-4 text-xs sm:text-base font-semibold md:font-normal">
                    <strong className="text-subtle text-xl font-semibold hidden md:block">
                      Address
                    </strong>
                    <span className="mr-2 md:hidden">{addressIcon}</span>
                    <span>{userInfo?.address?.address || "Address"}</span>,{" "}
                    <br></br>
                    <span>{userInfo?.address?.city || "City"}</span>,{" "}
                    <span>{userInfo?.address?.country || "Country"}</span>
                  </p>

                  <p className="text-olive px-4 text-xs sm:text-base font-semibold md:font-normal">
                    <strong className="text-subtle text-xl font-semibold hidden md:block">
                      Phone
                    </strong>
                    <span className="mr-2 md:hidden">{phoneIcon}</span>
                    {userInfo.phoneNumber || "xxx-xx-xxx"}
                  </p>
                </div>
              </div>
            </div>
            <div className="profile_content space-y-8 col-span-full md:col-span-8 p-4">
              <div className="text-left pt-4">
                <h4 className="font-semibold text-subtle text-lg">About Me</h4>
                <p className="text-olive">
                  {userInfo.bio || "About me placeholder"}
                </p>
              </div>
              <div className="text-left ">
                <h4 className="font-semibold text-subtle text-lg">
                  Child Medical Condition
                </h4>
                <p className="text-olive">
                  {userInfo.childMedicalCondition || "Child Medical Condition"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfilePage;
