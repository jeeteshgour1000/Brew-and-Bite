import React from 'react';
import { images } from "../../constants";
import './AboutUs.css';

const AboutUs = () => (
 <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">At Brew & Bites, we're on a mission to empower cafe and restaurant owners while delighting food and coffee enthusiasts. We believe that by simplifying backend processes, we can help create more moments of joy over perfect meals and beverages.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="abo ut_spoon" className="spoon__img" />
        <p className="p__opensans">Brew & Bites began its journey in 2018 in a small, bustling cafe in NewDelhi. Founders Jeetesh Gour, a tech-savvy barista, and Kevin Luo, a frustrated restaurant owner, bonded over the shared challenges of managing a food service business.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>

);

export default AboutUs;
