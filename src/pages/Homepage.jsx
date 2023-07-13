import React from "react";
import Hero from "../components/Hero/Hero";
import Form from "../components/Form/Form";
import Benifits from "../components/Benifits/Benifits";
import Footer from "../components/Footer/Footer";
import Testimonial from "../components/Testimonial/Testimonial";

export default function Homepage() {
  return (
    <>
      <Hero />
      <Benifits />
      <Form />
      <Testimonial/>
      <Footer />
    </>
  );
}
