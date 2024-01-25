import React from "react";

import "./event.css";
import Navbar from "../navbar/Navbar";
import Settings from "../../assets/settings.svg"
import Img1 from "../../assets/1.png"
import Img2 from "../../assets/2.png"
import Img3 from "../../assets/3.png"
import NoCamera from "../../assets/Section.png"
export default function Event() {
  return (
    <div className="event-page">
      <Navbar />
      <div className="event-main">
        <section className="event-main-top-section">
          <div className="event-main-top-section-left">
            <div className="event-main-top-section-left-head content">WED, 25 Jan 2024</div>
            <div className="event-main-top-section-left-con">
              <div className="event-main-top-section-left-first">
                <div className="event-main-top-section-left-first-head content">Saurabh's Birthday Party</div>
                <div className="event-main-top-section-left-first-subhead content">Happy Dreams Hotel . Hall 5 . New Delhi</div>
              </div>
              <div className="event-main-top-section-left-second">
                <div className="event-main-top-section-left-second-head content">250 attendees</div>
                <div className="event-main-top-section-left-second-subhead content">Min. Committment</div>
              </div>
            </div>
          </div>
          <div className="event-main-top-section-right">
            <button className="start-event content">Start Event</button>
          </div>
        </section>
        <section className="event-main-camera-section">
          <div className="event-main-camera-section-top">
            <div className="event-main-camera-section-top-left">
              <div className="event-main-camera-section-top-head content">Camera Setup</div>
              <div className="event-main-camera-section-top-subhead content">Finalise current event's camera setup & get started</div>
            </div>
            <div className="event-main-camera-section-top-right"><img src={Settings} alt=""/></div>
          </div>
          <div className="event-main-camera-section-bottom">
            <div className="event-main-camera-cards-wrapper">
              <div className="event-main-camera-card-wrap">
                <div className="event-main-camera-card-img"><img src={Img1} alt=""/></div>
                <div className="event-main-camera-card-content">
                  <div className="content" style={{color: "#121212", fontSize:"16px"}}>Camera Name</div>
                  <div className="content" style={{color: "#090e82", fontSize:"14px"}}>Location</div>
                </div>
              </div>
              <div className="event-main-camera-card-wrap">
                <div className="event-main-camera-card-img"> <img src={Img2} alt=""/></div>
                <div className="event-main-camera-card-content">
                  <div className="content" style={{color: "#121212", fontSize:"16px"}}>Camera Name</div>
                  <div className="content" style={{color: "#090e82", fontSize:"14px"}}>Location</div>
                </div>
              </div>
              <div className="event-main-camera-card-wrap">
                <div className="event-main-camera-card-img"> <img src={Img3} alt=""/></div>
                <div className="event-main-camera-card-content">
                  <div className="content" style={{color: "#121212", fontSize:"16px"}}>Camera Name</div>
                  <div className="content" style={{color: "#090e82", fontSize:"14px"}}>Location</div>
                </div>
              </div>
              <div className="event-main-camera-card-wrap">
                <div className="event-main-camera-card-img"> <img src={NoCamera} alt=""/></div>
                
              </div>
              <div className="event-main-camera-card-wrap">
                <div className="event-main-camera-card-img"> <img src={NoCamera} alt=""/></div>
                
              </div>
              <div className="event-main-camera-card-wrap">
                <div className="event-main-camera-card-img"> <img src={NoCamera} alt=""/></div>
                
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
