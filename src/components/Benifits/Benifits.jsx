import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faUsers,
  faSuitcase,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

export default function Benefits() {
  return (
    <section className="bg-white h-fit lg:h-96 mt-36">
        {/* <div className="text-3xl">
        Why choose us
        </div> */}
      <div className="mx-auto p-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-center text-center">
          <FontAwesomeIcon
            icon={faGlobe}
            className="text-red-500 text-4xl mb-2"
          />
          <h3 className="text-2xl font-bold mb-2">Destinations</h3>
          <p>
            Explore a wide range of breathtaking destinations around the world.
            From stunning beaches to majestic mountains, we offer a variety of
            options to satisfy your wanderlust.
          </p>
        </div>
        <div className="flex flex-col items-center text-center mt-14 md:mt-0">
          <FontAwesomeIcon
            icon={faUsers}
            className="text-red-500 text-4xl mb-2"
          />
          <h3 className="text-2xl font-bold mb-2">Expert Guides</h3>
          <p>
            Our expert guides are passionate about travel and possess in-depth
            knowledge of the destinations. They will provide you with valuable
            insights, recommendations, and local tips for an unforgettable
            journey.
          </p>
        </div>
        <div className="flex flex-col items-center text-center mt-14 md:mt-0">
          <FontAwesomeIcon
            icon={faSuitcase}
            className="text-red-500 text-4xl mb-2"
          />
          <h3 className="text-2xl font-bold mb-2">Flexible Packages</h3>
          <p>
            Choose from a variety of flexible travel packages that cater to your
            preferences. Whether you're seeking adventure, relaxation, or
            cultural experiences, we have the perfect package for you.
          </p>
        </div>
        <div className="flex flex-col items-center text-center mt-14 md:mt-0">
          <FontAwesomeIcon
            icon={faHeadset}
            className="text-red-500 text-4xl mb-2"
          />
          <h3 className="text-2xl font-bold mb-2">24/7 Support</h3>
          <p>
            We understand that travel plans can change and unexpected situations
            may arise. That's why our dedicated support team is available 24/7
            to assist you with any queries or issues you may encounter during
            your journey.
          </p>
        </div>
      </div>
    </section>
  );
}
