import React from "react";
import "./contactus.css";
import { Form } from "react-bootstrap";

const Contactus = () => {
  return (
    <div>
      <div className="con-container">
        <br />
        <br />
        <br />
        <div className="con-data">
          <div className="con-left">
            <div className="con-leftdata">
              <h1 class="heading-title" data-aos="fade-down"
     data-aos-easing="linear" data-aos-duration="1800"  >Contact Us</h1>
                   <span className="line"></span>
              <div className="con-text">
                <p className="p-data"  data-aos="fade-right"data-aos-duration="2000">
                  <span>
                    <span class="cap-letter">M</span>
                  </span>
                  hank you for visiting Med-Cloud Integrated Software
                  Solutions. We always strive to serve our clients the best we
                  can. Your satisfaction is paramount importance to us. Feel
                  free to contact us for any kind of Information, Quotations or
                  for Technical Support. We will serve you regarding your matter
                  as soon as possible.
                </p>
              </div>
            </div>

            <div className="con-social-media " data-aos="fade-up"
     data-aos-easing="linear"data-aos-duration="1800">
              <a href="#">
                <div className="con-social-circle facebook-bg">
                  <i class="fa-brands fa-facebook"></i>
                </div>
              </a>

              <a href="#">
                <div className="con-social-circle instagram-bg">
                  <i class="fa-brands fa-instagram"></i>
                </div>
              </a>

              <a href="#">
                <div className="con-social-circle youtube-bg">
                  <i class="fa-brands fa-youtube"></i>
                </div>
              </a>

              <a href="#">
                <div className="con-social-circle linkedin-bg">
                  <i class="fa-brands fa-linkedin"></i>
                </div>
              </a>

              <a href="#">
                <div className="con-social-circle  reddit-bg">
                  <i class="fab fa-reddit "></i>
                </div>
              </a>

              <a href="#">
                <div className="con-social-circle   pinterest-bg">
                  <i class="fa-brands fa-pinterest"></i>
                </div>
              </a>

              <a href="#">
                <div className="con-social-circle twitter-bg">
                  <i class="fa-brands fa-square-twitter"></i>
                </div>
              </a>

              <a href="#">
                <div className="con-social-circle linkedin-bg">
                  <i class="fa-brands fa-linkedin"></i>
                </div>
              </a>
            </div>
          </div>

          <div className="con-right">
            <div className="con-right-data">
              <h2 class="right-heading" data-aos="fade-down"
     data-aos-easing="linear" data-aos-duration="1800" >Write us email</h2>
            </div>

            <div className="con-form"  data-aos="fade-left" data-aos-duration="1800">
              <form>
                <p>
                  <span>
                    <input
                      size="40"
                      class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                      aria-required="true"
                      placeholder="Name"
                      value=""
                      type="text"
                    />
                  </span>
                </p>

                <p>
                  <span>
                    <input
                      size="40"
                      class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                      placeholder="Email"
                      value=""
                      type="email"
                    />
                  </span>
                </p>

                <p>
                  <span>
                    <input
                      size="40"
                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                      placeholder="Phone Number"
                      value=""
                      type="number"
                    />
                  </span>
                </p>

                <textarea
                  cols="20"
                  rows="10"
                  class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                  aria-required="true"
                  aria-invalid="false"
                  placeholder="Your Message"
                  name="Textarea"
                  data-listener-added_a918c2da="true"
                  spellcheck="false"
                ></textarea>

                <br />
                <br />
                <br />
                <button
                  class="button-58"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="2000"
                  role="button"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
