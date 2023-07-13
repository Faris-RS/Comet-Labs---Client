import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import Hero from "../components/Hero/Hero";
import Form from "../components/Form/Form";
import Benifits from "../components/Benifits/Benifits";
import Footer from "../components/Footer/Footer";
import Testimonial from "../components/Testimonial/Testimonial";
import Process from "../components/Example/Example";
import FAQ from "../components/FAQ/FAQ";

export default function Homepage() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Hero />
      <Benifits />
      <Process />
      <Form />
      <Testimonial />
      <FAQ />
      <Footer />
      {showButton && (
        <div
          className="flex items-center cursor-pointer justify-center rounded-xl fixed z-50 bottom-10 right-10 w-16 h-16 bg-red-200 opacity-50"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faAngleUp} />
        </div>
      )}
    </>
  );
}
