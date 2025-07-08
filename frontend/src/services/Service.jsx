import React from "react";
import "./service.css";

import weatherImg from "../assets/images/weather.png";
import guidImg from "../assets/images/guide.png";
import customizeImg from "../assets/images/customization.png";

const serviceData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Get real-time weather updates for your travel destination. Plan your trip better by checking temperature, humidity, and conditions before you go!",
  },
  {
    imgUrl: guidImg,
    title: "Best Tour Guide",
    desc: "Discover the world with the guidance of our expert tour professionals. From local insights to hidden gems, our tour guides ensure every moment of your journey is informative, safe, and unforgettable.",
  },
  {
    imgUrl: customizeImg,
    title: "Customization",
    desc: "Your journey, your way! We offer fully customizable travel packages tailored to your preferences, budget, and schedule. Whether it's a romantic escape, a family vacation, or a solo adventure — we design the perfect itinerary just for you.",
  },
];

const Service = () => {
  return (
    <>
      {serviceData.map((data) => {
        return (
          <div className="service-item">
            <img src={data.imgUrl} alt="" />
            <h5>{data.title}</h5>
            <p>{data.desc}</p>
          </div>
        );
      })}
    </>
  );
};

export default Service;
