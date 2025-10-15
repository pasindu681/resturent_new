import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying!🎗️ </h1>
        <p className="primary-text">
          Hear from our happy customers! See how our service has made ordering
          fast, easy, and enjoyable. Real experiences, real feedback, and
          genuine satisfaction from people just like you.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          "Absolutely love this app! My meals arrive hot, fresh, and on time
          every single time. Ordering is so easy, and the variety keeps me
          coming back!”
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Pathum Nissanka</h2>
      </div>
    </div>
  );
};

export default Testimonial;
