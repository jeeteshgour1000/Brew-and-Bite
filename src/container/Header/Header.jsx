import React from 'react';
import { SubHeading } from '../../components';
import {images} from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
      Born from a love of great food, exceptional coffee, and a desire to streamline hospitality operations, Brew & Bites is more than just a Cafe – it's a revolution in the world of cafes and restaurants.{" "}
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.o} alt="header_img" />
    </div>
  </div>
);

export default Header;
