import React from "react";
import Hero from "../components/Hero/Hero";
import Form from "../components/Form/Form";
import Benifits from "../components/Benifits/Benifits";
import Footer from "../components/Footer/Footer";

export default function Homepage() {
  return (
    <>
      <Hero />
      <Benifits />
      <Form />
      <Footer />
    </>
  );
}
