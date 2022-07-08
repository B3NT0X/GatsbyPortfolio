 import * as React from "react"
 import { Helmet } from "react-helmet"

 
 function Seo({ description, title }) {

    return (
      <Helmet htmlAttributes={{lang: "de"}} title={title}>
          <meta name="description" content={description} />
      </Helmet>
    )
 }
 
 export default Seo
 