import React, { useEffect, useState } from "react";
import { auth, db } from "../config/Firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, getDoc } from "firebase/firestore";
import profileImage from "../assets/images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faHourglassStart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

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
    }
    else{
      setUserInfo("");
    }
  }, []);

  const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
  const jopIcon = <FontAwesomeIcon icon={faBriefcase} />;
  const ageIcon = <FontAwesomeIcon icon={faHourglassStart} />;
  const hobbyIcon = <FontAwesomeIcon icon={faHeart} />;
  return (
    <>
      <section className="profile py-8">
        <div className="container mx-auto ">
          <div className="grid grid-cols-12">
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
                    {userInfo.displayName || "John Doe"}
                  </p>
                  <p className="text-olive px-4 text-xs sm:text-base font-semibold md:font-normal">
                    <strong className="text-subtle text-xl font-semibold hidden md:block">
                      E-mail
                    </strong>
                    <span className="mr-2 md:hidden">{emailIcon}</span>
                    example@youremail.com
                  </p>
                  <p className="text-olive px-4 text-xs sm:text-base font-semibold md:font-normal">
                    <strong className="text-subtle text-xl font-semibold hidden md:block">
                      occupation
                    </strong>
                    <span className="mr-2 md:hidden">{jopIcon}</span>
                    Web developer
                  </p>
                  <p className="text-olive px-4 text-xs sm:text-base font-semibold md:font-normal">
                    <strong className="text-subtle text-xl font-semibold hidden md:block">
                      Age
                    </strong>
                    <span className="mr-2 md:hidden">{ageIcon}</span>
                    30 years old
                  </p>
                  <p className="text-olive px-4 text-xs sm:text-base font-semibold md:font-normal">
                    <strong className="text-subtle text-xl font-semibold hidden md:block">
                      Hobbies
                    </strong>
                    <span className="mr-2 md:hidden">{hobbyIcon}</span>
                    Rock climbig, board games
                  </p>
                </div>
              </div>
            </div>
            <div className="profile_content space-y-8 col-span-full md:col-span-8 p-4">
              <div className="text-left pt-4">
                <h4 className="font-semibold text-subtle text-lg">Profile</h4>
                <p className="text-olive">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem, fuga laudantium dolore minima excepturi, accusamus
                  porro repellat exercitationem reprehenderit mollitia ipsa
                  ullam facilis sequi pariatur ex inventore dolorem nobis.
                  Expedita.
                </p>
              </div>
              <div className="text-left ">
                <h4 className="font-semibold text-subtle text-lg">
                  Personality
                </h4>
                <p className="text-olive">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem, fuga laudantium dolore minima excepturi, accusamus
                  porro repellat exercitationem reprehenderit mollitia ipsa
                  ullam facilis sequi pariatur ex inventore dolorem nobis.
                  Expedita.
                </p>
              </div>
              <div className="text-left ">
                <h4 className="font-semibold text-subtle text-lg">Goals</h4>
                <ul className="text-olive list-disc pl-4">
                  <li>
                    Get clear overview of nutritional informatiom for meals
                  </li>
                  <li>Set diet goals</li>
                  <li>Track progress and meet deadlines.</li>
                </ul>
              </div>
              <div className="text-left ">
                <h4 className="font-semibold text-subtle text-lg">Challenge</h4>
                <p className="text-olive">Build muscle mass and gain weight.</p>
              </div>
              <div className="text-left ">
                <h4 className="font-semibold text-subtle text-lg">
                  Motivation
                </h4>
                <p className="text-olive">
                  He aspires to achieve a good physique through exercise and
                  wants to challenge himself with a marathon scheduled for next
                  year.
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
