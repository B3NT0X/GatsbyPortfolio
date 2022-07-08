import React from "react"
import {Link} from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

function Error() {
  return (
      <Container>
        <Row>
          <h1 style={{marginTop: "200px"}}>Keine Seite mit dem Namen</h1>
          <Link to="/">
            Zurück zur Startseite
          </Link>
        </Row>
      </Container>
  )
}

export default Error