import React from "react"
import "../styles/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Seo from "../components/Seo.js"
import Hero from "../components/Hero";

export default function Home() {

  return(
    <>
    <Seo title="Bennet Schwarz, Frontend Developer, Germany" description="Bennet Schwarz. Frontend Dev, Web Designer, UI/UX." />
    <Hero />
    </>
  )
}
