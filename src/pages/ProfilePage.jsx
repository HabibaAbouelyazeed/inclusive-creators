import React from "react";

const ProfilePage = () => {
  return (
    <>
      <section className="profile py-8">
        <div className="container mx-auto px-6 border-solid border-2 border-indigo-600 ">
          <div className="grid grid-cols-12">
            <div className="profile_details col-span-full md:col-span-4">
              <div className="mx-auto flex flex-col justify-center max-w-xs p-4">
                <figure className="my-4">
                  <img
                    src="https://source.unsplash.com/150x150/?portrait?3"
                    alt=""
                    className="w-32 h-32 mx-auto md:mx-0 rounded-full dark:bg-gray-500 aspect-square"
                  />
                </figure>
                <div className="space-y-2 md:space-y-4 text-center md:text-left ">
                  <p className="text-subtle md:text-olive px-4 text-xs sm:text-base font-bold md:font-normal">
                    <strong className="text-subtle text-xl font-semibold hidden md:block">
                      Name
                    </strong>
                    John Doe
                  </p>
                  <p className="text-olive px-4 text-xs sm:text-base font-semibold md:font-normal">
                    <strong className="text-subtle text-xl font-semibold hidden md:block">
                      E-mail
                    </strong>
                    example@youremail.com
                  </p>
                  <p className="text-olive px-4 text-xs sm:text-base font-semibold md:font-normal">
                    <strong className="text-subtle text-xl font-semibold hidden md:block">
                      occupation
                    </strong>
                    Web developer
                  </p>
                  <p className="text-olive px-4 text-xs sm:text-base font-semibold md:font-normal">
                    <strong className="text-subtle text-xl font-semibold hidden md:block">
                      Age
                    </strong>
                    30 years old
                  </p>
                  <p className="text-olive px-4 text-xs sm:text-base font-semibold md:font-normal">
                    <strong className="text-subtle text-xl font-semibold hidden md:block">
                      Hobbies
                    </strong>
                    Rock climbig, board games
                  </p>
                </div>
              </div>
            </div>
            <div className="profile_content space-y-8 col-span-full md:col-span-8 p-4">
              <div className="text-left pt-4">
                <h4 className="font-semibold text-subtle">Profile</h4>
                <p className="text-olive">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem, fuga laudantium dolore minima excepturi, accusamus
                  porro repellat exercitationem reprehenderit mollitia ipsa
                  ullam facilis sequi pariatur ex inventore dolorem nobis.
                  Expedita.
                </p>
              </div>
              <div className="text-left ">
                <h4 className="font-semibold text-subtle">Personality</h4>
                <p className="text-olive">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem, fuga laudantium dolore minima excepturi, accusamus
                  porro repellat exercitationem reprehenderit mollitia ipsa
                  ullam facilis sequi pariatur ex inventore dolorem nobis.
                  Expedita.
                </p>
              </div>
              <div className="text-left ">
                <h4 className="font-semibold text-subtle">Goals</h4>
                <ul className="text-olive list-disc pl-4">
                  <li>
                    Get clear overview of nutritional informatiom for meals
                  </li>
                  <li>Set diet goals</li>
                  <li>Track progress and meet deadlines.</li>
                </ul>
              </div>
              <div className="text-left ">
                <h4 className="font-semibold text-subtle">Challenge</h4>
                <p className="text-olive">Build muscle mass and gain weight.</p>
              </div>
              <div className="text-left ">
                <h4 className="font-semibold text-subtle">Motivation</h4>
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

{
  /* <span className="text-subtle text-xl font-semibold hidden md:block">
Name
</span>
<h4 className="text-olive px-5 text-xs sm:text-base dark:text-gray-400">
Fabian Levy
</h4> */
}
