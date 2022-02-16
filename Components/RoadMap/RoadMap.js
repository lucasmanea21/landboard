import CustomCarousel from "./Carousel";

const RoadMap = () => {
  return (
    <section
      id="roadmap"
      className="wpb_row vc_row-fluid vc_custom_1531390671911"
      name="roadmap"
    >
      <div
        className="background-parallax"
        style={{ backgroundImage: "url(assets/images/parallax-dark.jpg)" }}
        data-enllax-ratio=".5"
        data-enllax-type="background"
        data-enllax-direction="vertical"
      />

      <div className="container">
        <div className="row">
          <div className="text-white wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="title-wrap text-center">
                  <div className="back-title">roadmap</div>
                  <h3>
                    Building for
                    <br />
                    the long term.
                  </h3>
                  <p>
                    <span style={{ color: "#7b5eea" }}>
                      The $LAND token presale events are unique as they offer
                      tiered bonuses which include beta-access, access to the
                      DAO, reward pools, governance and more!
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div id="owl-roadmap" className="owl-carousel owl-theme dark">
                  <CustomCarousel />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner vc_custom_1528084318015">
              <div className="wpb_wrapper">
                <h5
                  style={{ color: "#ffffff", textAlign: "center" }}
                  className="vc_custom_heading vc_custom_1528084383395"
                >
                  How it works:
                </h5>
              </div>
            </div>
          </div> */}
          {/* <div className="wpb_column vc_column_container vc_col-sm-8 vc_col-lg-offset-2 vc_col-md-offset-2 vc_col-sm-offset-2">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="video-section video-shadow">
                  <figure className="vimeo">
                    <a href="https://player.vimeo.com/video/239566739">
                      <img src="assets/images/video-light.jpg" alt="image" />
                    </a>
                  </figure>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default RoadMap;
