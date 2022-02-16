import CustomAccordion from "./Accordion";
import { faqData } from "./faqData";
const Faq = () => {
  return (
    <section
      id="faq"
      name="faq"
      className="wpb_row vc_row-fluid background-gradient-dark vc_custom_1531390699192 vc_row-has-fill"
    >
      <div className="container">
        <div className="row">
          <div className="text-white wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="title-wrap text-center">
                  <div className="back-title">faq</div>
                  <h3>Questions and Answers</h3>
                  <p>
                    <span style={{ color: "#7b5eea" }}>
                      Listed questions and answers, all supposed to be commonly
                      asked in some context, and pertaining to a particular
                      topic.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {faqData.map((el, i) => {
            return (
              <div
                className="wpb_column vc_column_container vc_col-sm-6"
                key={i}
              >
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div
                      id="accordion-id620235589f577"
                      className="accordion-style"
                    >
                      <CustomAccordion
                        key={i}
                        title={el.title}
                        desc={el.desc}
                        index={i + 1}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Faq;
