import React from "react";
import "./Hero.css";
import Navbar from "../Navbar/Navbar";

export default function Hero() {
  const imageUrl =
    "https://images.pexels.com/photos/931881/pexels-photo-931881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  const handleJoinUsClick = () => {
    const formSection = document.getElementById("joinFormSection");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="relative">
        <div className="relative h-screen overflow-hidden">
          <img
            className="absolute top-0 left-0 object-cover w-full h-full"
            src={imageUrl}
            alt="Background"
          />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="h-full bg-gradient-to-b from-transparent via-transparent to-white"></div>
          </div>
          <div className="relative z-50">
            <Navbar />
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center xl:-ml-96 xl:mt-16">
            <div className="text-center mx-4 lg:text-left">
              <h1 className="text-4xl sm:text-5xl font-bold text-black">
                Your Journey to the <span className="text-red-500">Beyond</span>{" "}
                starts here.
              </h1>
              <h1 className="text-4xl sm:text-5xl font-bold text-black mt-4"></h1>
              <p className="mt-6 text-xl text-black">
                <span
                  className="underline-hover cursor-pointer"
                  onClick={handleJoinUsClick}
                >
                  Join us
                </span>{" "}
                and we can explore together
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
