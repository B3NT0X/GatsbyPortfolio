 import * as React from "react"
 import { Helmet } from "react-helmet"
 import favicon from "../images/favicon.png"

 
 function Seo({ description, title }) {

    return (
      <Helmet htmlAttributes={{lang: "de"}} title={title}>
          <meta name="description" content={description} />
          <meta property="og:url" content="https://www.bennetschwarz.de/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={favicon} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="bennetschwarz.de" />
          <meta property="twitter:url" content="https://www.bennetschwarz.de/" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={favicon} />
      </Helmet>
    )
 }
 
 export default Seo
 