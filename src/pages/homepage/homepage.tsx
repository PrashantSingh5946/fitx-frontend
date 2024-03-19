import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Image,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

import "./Home.css";
import "./nicepage.css";

import dietImage2 from "./images/diet2.jpeg";
import dietImage from "./images/diet.jpeg";

export default function Homepage() {
  return (
    <>
      <>
        <header className="u-clearfix u-header u-header" id="sec-e29e">
          <Navbar>
            <NavbarBrand>
              <Image
                src="/icons/icon-192x192.png"
                className="u-logo-image u-logo-image-1"
              />
            </NavbarBrand>
          </Navbar>
        </header>
        <section className="u-clearfix u-section-1" id="carousel_8102">
          <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div className="u-container-style u-layout-cell u-palette-3-dark-3 u-size-30 u-layout-cell-1">
                  <div className="u-container-layout u-valign-top u-container-layout-1">
                    <p className="u-custom-font u-heading-font u-text u-text-1">
                      At FITX, we're committed to empowering you to live a
                      healthier, happier life. Whether you're just starting your
                      fitness journey or aiming to reach new heights, we're here
                      to help you every step of the way.
                    </p>
                    <p
                      className="u-custom-font u-heading-font u-text u-text-2"
                      style={{ display: "none" }}
                    >
                      Image from{" "}
                      <a
                        href="https://www.freepik.com/photos/sport"
                        className="u-active-none u-border-1 u-border-no-left u-border-no-right u-border-no-top u-border-white u-btn u-button-link u-button-style u-hover-none u-none u-text-body-alt-color u-btn-1"
                      >
                        Freepik
                      </a>
                    </p>

                    <Button
                      variant="bordered"
                      color="warning"
                      className="bg-orange text-white p-4 w-[100px] mt-10"
                      style={{
                        background: "rgb(245, 165, 36)",
                        color: "white",
                      }}
                    >
                      <Link
                        className="text-white"
                        to={"/login"}
                        style={{ color: "white", fontWeight: "600" }}
                      >
                        JOIN US
                      </Link>{" "}
                    </Button>
                  </div>
                </div>
                <div
                  className="u-container-style u-image u-layout-cell u-size-30 u-image-1"
                  data-image-width={1200}
                  data-image-height={1077}
                ></div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="u-align-center u-clearfix u-palette-3-light-2 u-section-2"
          id="carousel_4935"
          style={{ background: "#F47D16" }}
        >
          <div className="u-clearfix u-sheet u-sheet-1">
            <h1 className="u-text u-text-1">About FITX</h1>
            <div className="u-border-3 u-border-palette-2-base u-line u-line-horizontal u-line-1" />
            <p className="u-text u-text-3">
              At FITX, we understand that maintaining a healthy lifestyle can be
              challenging, especially with today's busy schedules and endless
              distractions. That's why we've developed an innovative AI-powered
              platform that leverages the latest advancements in artificial
              intelligence and machine learning to provide personalized fitness
              and diet recommendations tailored to your unique needs and
              preferences.
            </p>{" "}
            <div className="flex flex-row" style={{ display: "none" }}>
              Images from
              <a
                href="https://www.freepik.com/photos/sport"
                className="u-border-1 u-border-palette-2-base u-btn u-button-style u-none u-text-active-palette-2-base u-text-body-color u-text-hover-palette-2-base u-btn-1"
              >
                Freepik
              </a>
            </div>
            <br />
            <div
              className="u-clearfix u-gutter-30 u-layout-wrap u-layout-wrap-1 bg-stone-600"
              style={{ padding: "20px", width: "100%", margin: "auto" }}
            >
              <div className="u-layout">
                <div className="u-layout-row">
                  <div
                    className="u-container-style u-image u-layout-cell u-left-cell u-size-20 u-image-1"
                    data-image-width={626}
                    data-image-height={939}
                  >
                    <div className="u-container-layout u-container-layout-1" />
                  </div>
                  <div
                    className="u-container-style u-image u-layout-cell u-size-20 u-image-2"
                    data-image-width={626}
                    data-image-height={939}
                  >
                    <div className="u-container-layout u-container-layout-2" />
                  </div>
                  <div
                    className="u-align-center u-container-style u-image u-layout-cell u-right-cell u-size-20 u-image-3"
                    data-image-width={626}
                    data-image-height={939}
                  >
                    <div className="u-container-layout u-valign-middle u-container-layout-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="u-align-center u-clearfix u-image u-section-3"
          id="carousel_7484"
          data-image-width={1980}
          data-image-height={1076}
        >
          <div className="u-clearfix u-sheet u-sheet-1">
            <div className="u-expanded-width u-list u-list-1">
              <div className="u-repeater u-repeater-1">
                <div
                  className="u-align-left u-container-style u-list-item u-palette-2-base u-repeater-item u-list-item-1"
                  style={{
                    background: "linear-gradient(to right, #ff9966, #ff5e62)",
                  }}
                >
                  <div className="u-container-layout u-similar-container u-container-layout-1">
                    <span className="u-icon u-icon-circle u-text-palette-2-base u-white u-icon-1">
                      <svg
                        className="u-svg-link"
                        preserveAspectRatio="xMidYMin slice"
                        viewBox="0 0 512 512"
                        style={{}}
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="#svg-2e49"
                        />
                      </svg>
                      <svg
                        className="u-svg-content"
                        viewBox="0 0 512 512"
                        x="0px"
                        y="0px"
                        id="svg-2e49"
                        // style={{ enableBackground: "new 0 0 512 512" }}
                      >
                        <g>
                          <g>
                            <path d="M469.717,129.996h-9.91c-4.002,0-7.871,0.571-11.542,1.615c-3.741-19.515-20.93-34.309-41.519-34.309h-9.909    c-23.315,0-42.284,18.969-42.284,42.283v68.248H157.446v-76.607c0-23.315-18.969-42.283-42.283-42.283h-9.909    c-20.589,0-37.778,14.794-41.518,34.309c-3.672-1.044-7.541-1.615-11.543-1.615h-9.909C18.969,121.637,0,140.604,0,163.92V339.72    c0,23.315,18.969,42.283,42.283,42.283h9.909c4.002,0,7.871-0.571,11.543-1.615c3.741,19.515,20.93,34.309,41.518,34.309h9.909    c23.315,0,42.283-18.969,42.283-42.283v-61.402h197.107v69.762c0,23.315,18.969,42.283,42.284,42.283h9.909    c20.589,0,37.779-14.795,41.519-34.309c3.671,1.044,7.541,1.615,11.542,1.615h9.91c23.314,0,42.283-18.969,42.283-42.283V172.279    C512,148.964,493.031,129.996,469.717,129.996z M62.971,339.72c0,5.944-4.835,10.78-10.779,10.78h-9.909    c-5.944,0-10.779-4.836-10.779-10.78V163.92c0-5.944,4.835-10.779,10.779-10.779h9.909c5.944,0,10.779,4.835,10.779,10.779V339.72    z M125.942,372.415c0,5.944-4.835,10.779-10.779,10.779h-9.909c-5.944,0-10.779-4.835-10.779-10.779V131.224    c0-5.944,4.836-10.779,10.779-10.779h9.909c5.944,0,10.779,4.835,10.779,10.779V372.415z M354.554,279.509H157.446v-40.173    h197.107V279.509z M417.525,380.775c0,5.944-4.835,10.779-10.78,10.779h-9.909c-5.944,0-10.78-4.835-10.78-10.779V139.584    c0-5.944,4.835-10.779,10.78-10.779h9.909c5.944,0,10.78,4.835,10.78,10.779V380.775z M480.496,348.079    c0,5.944-4.835,10.779-10.779,10.779h-9.91c-5.943,0-10.779-4.835-10.779-10.779V172.279c0-5.944,4.835-10.779,10.779-10.779h9.91    c5.943,0,10.779,4.835,10.779,10.779V348.079z" />
                          </g>
                        </g>
                      </svg>
                    </span>
                    <h5 className="u-text u-text-1">
                      Get Personalized Recommendations
                    </h5>
                    <p className="u-text u-text-2">
                      Our AI algorithms analyze your fitness level, health data,
                      dietary preferences, and goals to provide customized
                      workout plans and meal suggestions that align with your
                      objectives.
                    </p>
                  </div>
                </div>
                <div
                  className="u-align-left u-container-style u-list-item u-palette-2-base u-repeater-item u-list-item-2"
                  style={{
                    background: "linear-gradient(to right, #ff9966, #ff5e62)",
                  }}
                >
                  <div className="u-container-layout u-similar-container u-container-layout-2">
                    <span className="u-icon u-icon-circle u-text-palette-2-base u-white u-icon-2">
                      <svg
                        className="u-svg-link"
                        preserveAspectRatio="xMidYMin slice"
                        viewBox="0 0 512 512"
                        style={{}}
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="#svg-5c82"
                        />
                      </svg>
                      <svg
                        className="u-svg-content"
                        viewBox="0 0 512 512"
                        x="0px"
                        y="0px"
                        id="svg-5c82"
                        // style={{ enableBackground: "new 0 0 512 512" }}
                      >
                        <g>
                          <g>
                            <g>
                              <path d="M387.568,97.168l12.912-27.552C410.669,47.82,415.966,24.06,416,0h-32c-0.03,19.353-4.289,38.466-12.48,56l-13.44,28.656     l-0.848,2.208c-11.903,39.662-10.9,82.08,2.864,121.136H151.904c13.76-39.051,14.763-81.463,2.864-121.12L140.48,56     C132.289,38.466,128.03,19.353,128,0H96c0.034,24.06,5.331,47.82,15.52,69.616l12.912,27.552     c11.72,39.814,7.877,82.593-10.752,119.68C83.582,283.107,66.706,354.604,64,427.328V512h32v-84.672     c0.846-32.501,5.137-64.82,12.8-96.416l99.2,61.952V512h32V400h32v112h32V392.864l99.2-61.952     c7.663,31.596,11.954,63.915,12.8,96.416V512h32v-84.672c-2.681-72.719-19.529-144.216-49.6-210.48     C379.744,179.771,375.872,136.992,387.568,97.168z M283.424,368h-54.848l-111.328-69.584c5.58-19.938,12.557-39.458,20.88-58.416     h235.744c8.296,18.96,15.246,38.48,20.8,58.416L283.424,368z" />
                              <rect x={240} y={144} width={32} height={32} />
                              <polygon points="53.888,160 104,160 104,128 53.888,128 69.312,104.88 42.688,87.12 4.768,144 42.688,200.88 69.312,183.12         " />
                              <polygon points="469.312,87.12 442.688,104.88 458.112,128 408,128 408,160 458.112,160 442.688,183.12 469.312,200.88      507.232,144    " />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <h5 className="u-text u-text-3">Lose fat</h5>
                    <p className="u-text u-text-4">
                      Benefit from people's experiences who went on a fat loss
                      journey and are now living a healthier lifestyle.
                    </p>
                  </div>
                </div>
                <div
                  className="u-align-left u-container-style u-list-item u-palette-2-base u-repeater-item u-list-item-3"
                  style={{
                    background: "linear-gradient(to right, #ff9966, #ff5e62)",
                  }}
                >
                  <div className="u-container-layout u-similar-container u-container-layout-3">
                    <span className="u-icon u-icon-circle u-text-palette-2-base u-white u-icon-3">
                      <svg
                        className="u-svg-link"
                        preserveAspectRatio="xMidYMin slice"
                        viewBox="0 0 508.16 508.16"
                        style={{}}
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="#svg-a9b0"
                        />
                      </svg>
                      <svg
                        className="u-svg-content"
                        viewBox="0 0 508.16 508.16"
                        id="svg-a9b0"
                      >
                        <g>
                          <path d="m434.393 318.198-42.427 42.426-21.213-21.213 19.393-19.394c17.546-17.546 17.546-46.094 0-63.64-8.143-8.144-18.657-12.501-29.341-13.085-1.244-22.751-19.362-41.208-42.429-42.451-.589-10.675-4.946-21.18-13.082-29.316h-.001c-8.143-8.145-18.657-12.502-29.341-13.086-.584-10.684-4.942-21.197-13.086-29.341-17.545-17.545-46.095-17.545-63.639 0l-19.394 19.394-42.426-42.427 42.426-42.426-63.639-63.639-106.066 106.065 63.64 63.64 42.427-42.427 42.426 42.427-21.214 21.213c-11.721-11.722-30.702-11.727-42.426.001l-31.82 31.819c-31.753 31.754-28.338 77.273-26.298 104.471.167 2.234.325 4.33.447 6.232l-26.227 26.227 148.493 148.492 37.162-37.161c21.533-.605 47.308-4.882 67.949-25.522l84.854-84.853 21.213 21.213-42.427 42.427 63.64 63.64 106.066-106.066zm-360.625-190.919-21.213-21.214 63.64-63.64 21.213 21.214zm231.526 107.885c5.863-5.863 15.35-5.862 21.213 0 5.849 5.849 5.849 15.365 0 21.214l-61.821 61.819c-5.863 5.862-15.349 5.862-21.212 0h-.001c-5.862-5.861-5.862-15.35 0-21.213zm-21.214-42.426c5.848 5.849 5.848 15.364 0 21.213l-61.821 61.82c-5.17 5.17-13.011 5.689-18.699 2.028.308-7.077-1.06-14.537-4.338-21.418l63.644-63.644c5.849-5.846 15.366-5.846 21.214.001zm-63.639-42.427c5.849-5.849 15.365-5.847 21.213 0 5.849 5.849 5.849 15.365 0 21.214l-61.82 61.819c-1.867-1.867-15.91-15.909-21.213-21.213zm23.033 273.953c-11.79 11.789-27.65 16.819-53.033 16.819h-6.213l-24.651 24.651-106.067-106.066 14.044-14.043v-6.214c0-21.018-10.271-68.368 16.82-95.46l31.819-31.819 53.036 53.034c5.725 5.731 5.936 15.274-.002 21.212-5.849 5.848-15.365 5.848-21.214 0l-31.819-31.819-21.213 21.213 31.819 31.819c18.092 18.095 48.008 17.572 65.374-1.841 5.269 2.534 11.015 4.018 16.979 4.342 1.246 22.873 19.55 41.193 42.45 42.428.914 16.557 10.769 31.076 25.514 38.1zm63.639-63.64c-5.848 5.848-15.364 5.849-21.213 0s-5.849-15.365 0-21.214l61.82-61.819c5.849-5.848 15.364-5.848 21.213 0 5.849 5.849 5.849 15.365 0 21.214zm63.64 63.64 63.64-63.64 21.213 21.213-63.64 63.641z" />
                        </g>
                      </svg>
                    </span>
                    <h5 className="u-text u-text-5"> Track Your Progress</h5>
                    <p className="u-text u-text-6">
                      Easily monitor your progress and achievements with
                      intuitive tracking features. Keep tabs on your workouts,
                      diet adherence, and overall health metrics to stay
                      motivated and accountable on your journey.
                    </p>
                  </div>
                </div>
                <div
                  className="u-align-left u-container-style u-list-item u-palette-2-base u-repeater-item u-list-item-4"
                  style={{
                    background: "linear-gradient(to right, #ff9966, #ff5e62)",
                  }}
                >
                  <div className="u-container-layout u-similar-container u-container-layout-4">
                    <span className="u-icon u-icon-circle u-text-palette-2-base u-white u-icon-4">
                      <svg
                        className="u-svg-link"
                        preserveAspectRatio="xMidYMin slice"
                        viewBox="0 0 510 510"
                        style={{}}
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="#svg-d539"
                        />
                      </svg>
                      <svg
                        className="u-svg-content"
                        viewBox="0 0 510 510"
                        id="svg-d539"
                      >
                        <g>
                          <path d="m405.78 190.426 19.938-46.996c29.847-70.354-22.686-143.43-96.662-143.43h-148.107c-35.323 0-68.053 17.584-87.552 47.038-19.5 29.454-22.905 66.452-9.109 98.97l19.887 44.77c-83.904 76.094-95.083 195.671-41.359 283.7 13.372 21.91 37.809 35.522 63.772 35.522h256.822c26.023 0 50.544-13.746 63.991-35.872 21.328-35.088 32.602-75.444 32.602-116.707 0-62.344-25.397-122.81-74.223-166.995zm-293.921-56.245c-9.948-23.544-7.562-49.263 6.553-70.583 14.136-21.352 36.93-33.598 62.537-33.598h148.107c53.352 0 90.169 51.917 69.044 101.713l-16.743 39.467c-8.068-5.496-16.462-10.427-25.123-14.797 1.739-3.918-5.91 13.314 15.06-33.92 5.865-13.929 4.376-29.762-3.984-42.354-8.361-12.591-22.376-20.109-37.49-20.109h-149.635c-15.114 0-29.129 7.518-37.489 20.109s-9.85 28.424-3.984 42.354l15.118 34.054c-8.739 4.434-17.217 9.442-25.371 15.033zm69.579 10.592-15.124-34.063c-1.93-4.682-1.432-9.781 1.374-14.007 2.829-4.26 7.384-6.703 12.497-6.703h149.635c10.714 0 17.938 10.84 13.872 20.709l-15.091 33.983c-22.274-7.687-45.856-11.868-70.056-12.242-26.619-.418-52.626 3.819-77.107 12.323zm240.327 313.774c-8.042 13.233-22.739 21.453-38.355 21.453h-256.822c-15.578 0-30.202-8.105-38.165-21.151-45.298-74.223-37.45-174.634 30.68-240.962 37.48-36.487 86.779-56.237 138.981-55.441 105.825 1.636 191.92 89.102 191.92 194.976-.001 35.765-9.765 70.733-28.239 101.125z" />
                          <path d="m255.003 192.421c-74.439 0-135 60.561-135 135s60.561 135 135 135 135-60.561 135-135-60.561-135-135-135zm0 240c-57.898 0-105-47.103-105-105s47.102-105 105-105 105 47.103 105 105-47.103 105-105 105z" />
                          <path d="m255.003 252.421c-24.814 0-45 20.187-45 45.001 0 11.517 4.354 22.032 11.495 30-7.142 7.967-11.495 18.483-11.495 30 0 24.813 20.186 44.999 45 44.999s45-20.187 45-45c0-11.517-4.354-22.032-11.495-30 7.142-7.968 11.495-18.483 11.495-30 0-24.813-20.187-45-45-45zm0 30c8.271 0 15 6.729 15 15.001 0 8.271-6.729 14.999-15 14.999s-15-6.729-15-15 6.728-15 15-15zm0 90c-8.271 0-15-6.729-15-15s6.729-15 15-15 15 6.729 15 15.001c0 8.27-6.729 14.999-15 14.999z" />
                        </g>
                      </svg>
                    </span>
                    <h5 className="u-text u-text-7"> Stay Connected</h5>
                    <p className="u-text u-text-8">
                      Connect with a community of like-minded individuals who
                      share your passion for health and fitness. Share your
                      successes, seek advice, and celebrate milestones together
                      in a supportive and encouraging environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="u-text u-text-body-alt-color u-text-9">
              Image from{" "}
              <a
                href="https://www.freepik.com/photos/people"
                className="u-border-1 u-border-white u-btn u-button-style u-none u-text-body-alt-color u-btn-1"
              >
                Freepik
              </a>
            </p>
          </div>
        </section>
        <section className="u-clearfix u-section-4" id="carousel_c61b">
          <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div className="u-align-center u-container-style u-layout-cell u-left-cell u-palette-3-light-2 u-size-30 u-layout-cell-1">
                  <div className="u-container-layout u-valign-middle u-container-layout-1">
                    <img
                      src={dietImage2}
                      alt=""
                      className="u-image u-image-default u-image-1"
                      data-image-width={800}
                      data-image-height={951}
                    />
                  </div>
                </div>
                <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-2">
                  <div className="u-container-layout u-valign-middle u-container-layout-2">
                    <h5 className="u-text u-text-1">Personalised diets</h5>
                    <p className="u-text u-text-2">
                      Discover personalized nutrition with FITX. Tailored to
                      your needs and goals, our customized diet plans optimize
                      your health journey. Say goodbye to generic diets and
                      hello to a personalized approach. Start today for a
                      healthier tomorrow!
                    </p>
                    <img
                      src={dietImage}
                      alt=""
                      className="u-image u-image-default u-image-2"
                      data-image-width={700}
                      data-image-height={875}
                    />
                    Images from
                    <a
                      href="https://www.freepik.com/photos/sport"
                      className="u-border-1 u-border-palette-2-base u-btn u-button-style u-none u-text-active-palette-2-base u-text-body-color u-text-hover-palette-2-base u-btn-1"
                    >
                      Freepik
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="flex justify-center">
          <p>
            <Link to={"/terms-of-service"}> Terms of Service </Link> |{" "}
            <Link to={"/privacy-policy"}>Privacy Policy </Link>
          </p>
        </footer>
        <section className=" flex justify-center text-xs">
          &copy; FITX 2024
        </section>
      </>
    </>
  );
}
