import React, { Component } from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask,  } from
"mdbreact";
import Slide1 from './imagenes/slide1.jpg'
import Slide2 from './imagenes/slide2.jpg'
import Slide3 from './imagenes/slide3.jpg'


class Carrousel extends Component{
  render(){
  return (
    <>
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner style={{height:"525px"}}>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src={Slide1}
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive"  style={{fontSize:"50px", color:"black", fontFamily:"inherit", fontWeight:"900"}}>Cree en nosotros y obtendras el mejor talento para la Industria <strong style={{color:"white", fontSize:"60px"}}> 4.0</strong></h3>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src={Slide2}
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive" style={{fontSize:"50px", fontWeight:"900", fontFamily:"cursive"}}>Con tu aporte muchos jóvenes podrán convertirse en talentos tecnológicos</h3>
            {/* <p>Second text</p> */}
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src={Slide3}
              alt="Third slide"
             
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption >
            <h3 className="h3-responsive" style={{fontSize:"60px"}}>
            Inclusión 
            <span style={{color:"red"}}>+</span>Equidad 
            <span style={{color:"red"}}>+</span>Igualdad 
            <span style={{color:"red"}}>=</span><br/> 
            <span style={{fontWeight:"900", color:"red"}}>Academia Geek Ser + Capaces</span></h3>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </>
  );
  }
}

export default Carrousel;