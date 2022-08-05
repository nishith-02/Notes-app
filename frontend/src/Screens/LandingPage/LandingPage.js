import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import "./LandingPage.css"

const LandingPage = () => {
  return (
    <div className='main'>
      <Container>
        <Row>
          <div className='intro-text'>
            <div>
              <h1 className='title'>Welcome to Notes App</h1>
              <p className='subtitle'>One safe place for all your notes</p>
            </div>
            <div className='buttons'>
              <a href='/login'>
                <Button className="landingbutton" size="lg">
                  Login
                </Button>
              </a>
              <a href='/register'>
                <Button className="landingbutton" size="lg" variant="outline-primary">
                  Register
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default LandingPage