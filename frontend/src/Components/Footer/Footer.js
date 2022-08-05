import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from "react-bootstrap/Row"
import {Col} from "react-bootstrap"
const Footer = () => {
  return (
    <footer style={{width:"100%",position:"relative",bottom:0,display:"flex",justifyContent:"center"}}>
        <Container>
            <Row>
                <Col className="text-center py-3">Copyright &copy; Notes App</Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer