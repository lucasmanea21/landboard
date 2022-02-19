import Particles from "react-tsparticles";
import particlesConfig from "./particlesConfig.json";
import Typewriter from "typewriter-effect";
const HeroBanner = () => {
  return (
    <section
      className="wpb_row vc_row-fluid height-auto-lg hide-over vc_custom_1528973329724 vc_row-has-fill full-height"
      id="hero"
      name="hero"
    >
      <div className="hero-center-wrap relative-on-lg">
        <div className="container">
          <div className="row">
            <div className="text-center text-lg-left parallax-fade-top align-self-center z-bigger text-white wpb_column vc_column_container vc_col-sm-6">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <h2
                    style={{
                      color: "#ffffff",
                      lineHeight: 1,
                      textAlign: "left",
                      display: "flex",
                      flexDirection: "column",
                    }}
                    className="vc_custom_heading"
                  >
                    <Typewriter
                      onInit={(typewriter) => {
                        typewriter
                          .typeString("Romania")
                          .pauseFor(2500)
                          .deleteAll()
                          .typeString("The world")
                          .start();
                      }}
                    />
                    is your billboard
                  </h2>
                  <div className="wpb_text_column wpb_content_element vc_custom_1531478287739 font-weight-normal text-white">
                    <div className="wpb_wrapper">
                      <p>
                        Landboard is the first metaverse application built on
                        the Elrond blockchain, aiming to provide the metaverse
                        experience through location-based NFTs.
                      </p>
                    </div>
                  </div>
                  <a
                    className="btn btn-primary js-tilt primary ml-lg-0"
                    href="https://landboard.io/assets/litepaper.pdf"
                    data-gal="m_PageScroll2id"
                    data-tilt-perspective={300}
                    data-tilt-speed={700}
                    data-tilt-max={24}
                    target="_self"
                  >
                    <span>Litepaper</span>
                  </a>
                  <a
                    className="btn btn-primary js-tilt primary"
                    href="https://presale.landboard.io/"
                    data-gal="m_PageScroll2id"
                    data-tilt-perspective={300}
                    data-tilt-speed={700}
                    data-tilt-max={24}
                    target="_self"
                  >
                    <span>Presale App</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="header-img wpb_column vc_column_container vc_col-sm-6">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="img-wrap">
                    <img src="assets/images/world.png" alt="" style={{}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ocean dark">
        <div className="wave" />
        <div className="wave" />
      </div>
      <div className="min-height" style={{ position: "relative" }}>
        <Particles
          id="tsparticles"
          options={particlesConfig}
          style={{ position: "unset" }}
          height="100vh"
          // init={particlesInit}
          // loaded={particlesLoaded}
        />
      </div>

      {/* <div id="particles-js-dark" className="min-height" /> */}
    </section>
  );
};
export default HeroBanner;
