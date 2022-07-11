import React from "react"
import {Link} from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Seo from "../components/Seo"

function Error() {
  return (
    <>
      <Seo title="404: Seite nicht gefunden" />
      <Container>
        <p className="logo">Bennet</p>
        <Row>
          <h1 style={{marginTop: "200px"}}>Keine Seite mit dem Namen gefunden.</h1>
          <Link to="/">
            Zurück zur Startseite
          </Link>
        </Row>
      </Container>
    </>
  )
}

export default Error