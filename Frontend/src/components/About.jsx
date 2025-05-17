import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            At Mariam's Table, we believe food is more than just a meal — it's an experience that brings people together. From fresh ingredients and carefully crafted recipes to a cozy ambiance that feels like home, every detail is designed with love. Whether you're here for a quick bite or a special gathering, we promise flavors that comfort, moments that linger, and hospitality that stays with you long after your visit. Welcome to good food, good vibes, and good memories.


            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="/about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;