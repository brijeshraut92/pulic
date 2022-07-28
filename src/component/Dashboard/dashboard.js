import React from "react";
import "./dashboard.scss";
import man from "../../assets/images/man-in-blue-top-2830332.png";
import capture from "../../assets/images/capture3.PNG";
import mountain from "../../assets/images/Capture2.PNG";

export default function dashboard() {
  return (
    <>
      
      <div className="container">
        <div className="container__one">
          <div className="container__wrapper">
            <h5>Shop The new Signature Collection</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias aut, repellat ipsum facere voluptate dicta obcaecati
              deserunt nobis suscipit eaque?
            </p>
          </div>

          <button>SHOP NOW</button>
        </div>
        <div className="container__two">
          <img src={man} alt="man" />
        </div>
      </div>
      <section className="category">
        <div className="box1">
          <div className="mini_box1">
            <h5>SHOP WOMEN</h5>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div className="box2">
          <div className="mini_box2">
            <p>SHOP MEN</p>
          </div>
        </div>
        <div className="box3">
          <div className="mini_box3">
            <p>JWELLERY</p>
          </div>
        </div>
        <div className="box4">
          <div className="mini_box4">
            <p>ELECTRONICS</p>
          </div>
        </div>
      </section>

      <section>
        <div className="banner_two">
          <div className="banner_content">
            <h1>Take off in the new Signature Legging</h1>
          </div>
          <div className="banner_content_para">
            <h1>Lorem Ipsum Dolor Tempor</h1>
          </div>
          <div className="banner_content_para2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore
              magna.
            </p>
          </div>
          <button className="btn">SHOP COLLECTION</button>
          <button className="btn-md">SHOP NOW</button>
          <div className="side-img">
            <img src={capture} alt="capture" />
          </div>
        </div>
      </section>
      <div className="hero_banner">
        <img src={mountain} alt="mountain" />
        <div className="side_coloumn">
          <h1>Conquer your next adventure</h1>
        </div>
      </div>
    </>
  );
}
