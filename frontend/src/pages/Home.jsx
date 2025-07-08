import React from "react";
import "../styles/home.css";

import heroImg from "../assets/images/hero-img01.jpg";
import heroImg2 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";

import Subtitle from "../shared/Subtitle";
import Searchbar from "../shared/Searchbar";
import Service from "../services/Service";
import FeaturedProduct from "../components/featured-products/FeaturedProduct";
import NewsLetter from "../shared/news-letter/NewsLetter";

const Home = () => {
  return (
    <>
      {/* Hero section  */}
      <section className="home">
        <div className="row">
          <div className="left">
            <div className="hero-content ">
              <Subtitle subtitle="know before you go" />
              <img src={worldImg} alt="" />
            </div>
            <h1>
              Travelling opens the door to creating{" "}
              <span className="highlight">memories</span>
            </h1>
            <p>
              Welcome to <strong>Travel World</strong>, where your travel dreams turn into lifelong memories. Whether you're seeking serene escapes, thrilling adventures, cultural experiences, or luxurious getaways, we offer handpicked tour packages tailored to your desires. From the snowy peaks of the Himalayas to the sun-kissed beaches of Bali – let us craft the perfect journey for you.
<strong>Plan. Travel. Discover. Repeat.</strong>
            </p>
          </div>
          <div className="right">
            <div className="hero-img-box" style={{ marginTop: "0px" }}>
              <img src={heroImg} alt="" />
            </div>
            <div className="hero-img-box" style={{ marginTop: "80px" }}>
  <video src={heroVideo} autoPlay muted loop playsInline />
</div>

            <div className="hero-img-box" style={{ marginTop: "120px" }}>
              <img src={heroImg2} alt="" />
            </div>
          </div>
        </div>
        <Searchbar />
      </section>

      {/* Services Section  */}
      <section>
        <div className="services">
          <div className="row">
            <div className="left">
              <h5 className="service-subtitle">What we serve</h5>
              <h2>We offer our best services</h2>
            </div>
            <div className="right">
              <Service />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section  */}
      <section>
        <div className="featurePro">
          <div className="featureLeft">
            <Subtitle subtitle={"Explore"} />
            <h2>Our featured tours</h2>
          </div>
          <div className="featuredWrap">
            <FeaturedProduct />
          </div>
        </div>
      </section>

      {/* Experience Section  */}
      <section>
        <div className="experience">
          <div className="row">
            <div className="left">
              <Subtitle subtitle="Experience" />
              <h1>With all our experience we will serve you</h1>
              <p>
                Our goal is to ensure every journey you take with us is smooth, safe, and unforgettable. From personalized itineraries to 24/7 support, we’re here to make your travel dreams come true.
              </p>
              <div className="expBtnWrap">
                <div className="expbtn">
                  <span>50+</span>
                  Successful Trip
                </div>
                <div className="expbtn">
                  <span>2k+</span>
                  Regular Clients
                </div>
                <div className="expbtn">
                  <span>15</span>
                  Years Experience
                </div>
              </div>
            </div>
            <div className="right">
              <img src={experienceImg} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* News Letter Section  */}
      <section>
        <NewsLetter />
      </section>
    </>
  );
};

export default Home;
