import React from "react";
import "./newsletter.css";

import newsLetterImg from "../../assets/images/male-tourist.png";

const NewsLetter = () => {
  return (
    <>
      <div className="newsLetter">
        <div className="left">
          <h1>Subscribe now to get useful traveling information</h1>
          <span>
            <input type="email" name="" placeholder="Enter your email" id="" />
            <button>Subscribe</button>
          </span>
          <p>
            Stay updated with the latest travel tips, destination guides, exclusive offers, and seasonal deals. Join our community of explorers and make every journey better than the last!
          </p>
        </div>
        <div className="right">
          <img src={newsLetterImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
