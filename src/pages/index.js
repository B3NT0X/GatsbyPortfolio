import React from "react"
import "../styles/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Seo from "../components/Seo.js"
import Hero from "../components/Hero";

export default function Home() {

  return(
    <>
    <Seo title="Frontend Developer: Bennet Schwarz from Germany" description=" I am Frontend Developer and Web Designer" />
    <Hero />
    </>
  )
}
