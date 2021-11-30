
import React from "react";
import "../App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Iframe from "react-iframe";

export const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-content">
          Ask us a question
          <div className="col-12 form-group">
            <input
              type="text"
              placeholder="Your name"
              className="form-control"
            ></input>
          </div>
          <div className="col-12 form-group">
            <input
              type="text"
              placeholder="Your email"
              className="form-control"
            ></input>
          </div>
          <div className="col-12 form-group">
            <textarea
              placeholder="Tell us about your project"
              className="form-control"
            ></textarea>
          </div>
          <div>
            <input className="checkbox" type="checkbox"></input>
            <label className="form-check-label">
              I want to be contacted by phone
            </label>
          </div>
          <button type="button" className="btn btn-outline-secondary">
            Contact Us
          </button>
        </div>
        <div className="information-address">
          <div className="address">
            <Link className="address-city" to="/Projects">
              Thành Phố Hồ Chí Minh
            </Link>
            <br />
            <Link className="address-district" to="/Projects">
              Address: 280 An Dương Vương, Quận 5, TPHCM
            </Link>
            <p>Tel: 0325578987</p>
          </div>
          <div className="address">
            <Link className="address-city" to="#">
              Hà Nội
            </Link>
            <br />
            <Link className="address-district" to="#">
              Address: 300 Hoàn Kiếm, Quận Hoàn Kiếm, Hà Nội
            </Link>
            <p>Tel: 0958578687</p>
          </div>
          <div className="address">
            <Link className="address-city" to="#">
              Đà Nẵng
            </Link>
            <br />
            <Link className="address-district" to="#">
              Address: 50 Hải Châu, Quận Hải Châu, Đà Nẵng
            </Link>
            <p>Tel: 0365858985</p>
          </div>
        </div>
        <div className="contact">
          <div className="contact-mail">
            <span className="contact-name">Contact:</span> <br />
            <a
              className="mail"
              href="https://mail.google.com"
              target="_blank"
              rel="noreferrer"
            >
              inforhotel@gmail.com
            </a>
          </div>
          <div className="contact-mail">
            <span className="contact-name">Press & communication: </span> <br />
            <a
              className="mail"
              href="https://mail.google.com"
              target="_blank"
              rel="noreferrer"
            >
              mediahotel@gmail.com
            </a>
          </div>
          <div className="contact-mail">
            <span className="contact-name">Submit your CV to: </span> <br />
            <a
              className="mail"
              href="https://mail.google.com"
              target="_blank"
              rel="noreferrer"
            >
              cv@gmail.com
            </a>
          </div>
        </div>
        <div className="map">
          <Iframe
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.65066557852!2d106.67998241472604!3d10.761383192331769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1b8a072901%3A0x2fb4502ebd044212!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTxrAgcGjhuqFtIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1623850444180!5m2!1svi!2s"
            width="80%"
            height="450"
            display="initial"
            position="relative"
          ></Iframe>
        </div>
      </div>
    </>
  );
};

