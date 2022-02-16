const Contact = () => {
  return (
    <section
      id="contact"
      className="wpb_row vc_row-fluid vc_custom_1531390714342"
    >
      <div
        className="background-parallax"
        style={{ backgroundImage: "url(assets/images/parallax-dark-2.jpg)" }}
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
                  <div className="back-title">contact</div>
                  <h3>Always ready to work</h3>
                  <p>
                    <span style={{ color: "#7b5eea" }}>Get in touch.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="vc_row wpb_row vc_inner vc_row-fluid justify-content-center">
                  <div className="text-white wpb_column vc_column_container vc_col-sm-3">
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div className="contact-det text-center">
                          <img src="assets/svg/contact-1.svg" alt="" />
                          <h6>Phone</h6>
                          <p>+54 12 346 7826</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-white mt-4 mt-md-0 wpb_column vc_column_container vc_col-sm-3">
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div className="contact-det text-center">
                          <img src="assets/svg/contact-2.svg" alt="" />
                          <h6>Email</h6>
                          <p>office@coeus.ico</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-white mt-4 mt-md-0 wpb_column vc_column_container vc_col-sm-3">
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div className="contact-det text-center">
                          <img src="assets/svg/contact-3.svg" alt="" />
                          <h6>Address</h6>
                          <p>1093 Flushing Ave, NY</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div
                  role="form"
                  className="wpcf7"
                  id="wpcf7-f128-p190-o1"
                  lang="en-US"
                  dir="ltr"
                >
                  <div className="screen-reader-response">
                    <p role="status" aria-live="polite" aria-atomic="true" />
                    <ul />
                  </div>
                  <form
                    action="http://wpdemo.oceanthemes.net/coeus-dark/#wpcf7-f128-p190-o1"
                    method="post"
                    className="wpcf7-form init"
                    noValidate="novalidate"
                    data-status="init"
                  >
                    <div className="mt-5">
                      <div className="row justify-content-center">
                        <div className="col-md-8">
                          <div className="messages text-center" />
                        </div>
                      </div>
                      <div className="controls">
                        <div className="row justify-content-center">
                          <div className="col-md-4">
                            <div className="form-group text-center">
                              <span className="wpcf7-form-control-wrap first-name">
                                <input
                                  type="text"
                                  name="first-name"
                                  size={40}
                                  className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control text-center"
                                  id="form_name"
                                  aria-required="true"
                                  aria-invalid="false"
                                  placeholder="Enter your first name"
                                />
                              </span>
                              <div className="help-block with-errors" />
                            </div>
                          </div>
                          <div className="col-md-4 mt-3 mt-md-0">
                            <div className="form-group text-center">
                              <span className="wpcf7-form-control-wrap last-name">
                                <input
                                  type="text"
                                  name="last-name"
                                  size={40}
                                  className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control text-center"
                                  id="form_lastname"
                                  aria-required="true"
                                  aria-invalid="false"
                                  placeholder="Enter your last name *"
                                />
                              </span>
                              <div className="help-block with-errors" />
                            </div>
                          </div>
                        </div>
                        <div className="row justify-content-center">
                          <div className="col-md-4 mt-3">
                            <div className="form-group text-center">
                              <span className="wpcf7-form-control-wrap email">
                                <input
                                  type="email"
                                  name="email"
                                  size={40}
                                  className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control text-center"
                                  id="form_email"
                                  aria-required="true"
                                  aria-invalid="false"
                                  placeholder="Enter your email *"
                                />
                              </span>
                              <div className="help-block with-errors" />
                            </div>
                          </div>
                          <div className="col-md-4 mt-3">
                            <div className="form-group text-center">
                              <span className="wpcf7-form-control-wrap phone">
                                <input
                                  type="text"
                                  name="phone"
                                  size={40}
                                  className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control text-center"
                                  id="form_phone"
                                  aria-required="true"
                                  aria-invalid="false"
                                  placeholder="Enter your phone"
                                />
                              </span>
                              <div className="help-block with-errors" />
                            </div>
                          </div>
                        </div>
                        <div className="row justify-content-center">
                          <div className="col-md-8 mt-3">
                            <div className="form-group text-center">
                              <span className="wpcf7-form-control-wrap message">
                                <textarea
                                  name="message"
                                  cols={40}
                                  rows={4}
                                  className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required form-control text-center"
                                  id="form_message"
                                  aria-required="true"
                                  aria-invalid="false"
                                  placeholder="Your message *"
                                  defaultValue={""}
                                />
                              </span>
                              <div className="help-block with-errors textarea-error" />
                            </div>
                          </div>
                          <div className="col-md-8 mt-3 text-center">
                            <input
                              type="submit"
                              defaultValue="Send message"
                              className="wpcf7-form-control wpcf7-submit btn btn-primary btn-send text-center disabled"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wpcf7-response-output" aria-hidden="true" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
