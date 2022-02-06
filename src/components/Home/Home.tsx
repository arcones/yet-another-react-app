import { Col, Container, Image, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react'

import DynamicText from './DynamicText';
import ReactPlayer from 'react-player'

const Home = () => {

  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener('resize', setDimension);
    return (() => {
      window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])


  return (
    <>
      <Container fluid>
        <img src={require('../../img/foggy_morning_mountains-wide.jpg')} className='img-fluid shadow-4' width={screenSize.dynamicWidth} />
        <DynamicText />
      </Container>
      <Container>
        <Row>
          <Col>
          </Col>
          <Col>
            <div className='d-flex justify-content-center'>
              <ReactPlayer url="https://youtu.be/2YBtspm8j8M" />
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  )

};

export default Home;
