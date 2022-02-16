const Footer = () => {
  return (
    <div className="section-footer section ">
      <div
        className="background-parallax"
        style={{ backgroundImage: 'url("assets/images/parallax-dark-3.jpg")' }}
        data-enllax-ratio=".5"
        data-enllax-type="background"
        data-enllax-direction="vertical"
      />
      <div className="container footer-top">
        <div className="justify-content-between">
          <section className="wpb_row vc_row-fluid">
            <div
              className="row"
              style={{ display: "flex", justifyContent: "center" }}
            >
              {/* <div className="wpb_column vc_column_container vc_col-sm-4">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_text_column wpb_content_element"></div>
                  </div>
                </div>
              </div> */}
              <div
                className="mt-4 wpb_column vc_column_container vc_col-sm-5 vc_col-lg-offset-3 vc_col-md-offset-3 vc_col-sm-offset-3"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: 0,
                  margin: 0,
                }}
              >
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_text_column wpb_content_element">
                      <div className="wpb_wrapper">
                        <ul className="footer-list">
                          <li className="text-left">
                            <a href="#">concept</a>
                          </li>
                          <li className="text-left">
                            <a href="#">roadmap</a>
                          </li>
                          <li className="https://twitter.com/landboard_io">
                            <a href="#">Twitter</a>
                          </li>
                          <li className="https://t.me/landboardio">
                            <a href="#">Telegram</a>
                          </li>
                          <li className="https://gateway.pinata.cloud/ipfs/QmRe3cCFxdc8H4xSxsY1RaBsu9ndnFypcEpuCDac6C9EnL">
                            <a href="#">Litepaper</a>
                          </li>
                          <li className="https://landboard.io/presale">
                            <a href="#">Presale</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="section py-4 background-dark-blue footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 footer text-center text-lg-left">
              <p>© Copyright 2022 - Landboard</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
