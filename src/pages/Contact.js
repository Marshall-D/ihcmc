import Side from "../components/Side";
import "../Styles/Home.css";
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react'



function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const handleSubmit = (e) =>{
    e.preventDefault()
    emailjs.sendForm('service_ul3eoai', 'template_3d6v8bg', formRef.current, 'l8K1D98SrRhOhmExh')
  .then((result) => {
      console.log(result.text);
      setDone(true)
  }, (error) => {
      console.log(error.text);
  });
}
  return (
    <div className="container_wrapper_2">
      <div className="container_wrapper_1">
        <div className="container_wrapper">
          <div className="sidebar">
            {" "}
            <div className="content">
              <div className="content_inner">
                <div>
                  <div className="main_content_bg"></div>
                  <section className="quick_edit_container">
                    <div>
                      <div>
                        <div className="hgroup_outer">
                          <hgroup>
                            <div className="outer_title">
                              <h1 className="btt" style={{ fontSize: "1.6em" }}>
                                Contact Us{" "}
                              </h1>{" "}
                            </div>
                          </hgroup>
                        </div>
                      </div>
                      <div>
                        <div></div>
                        <div>
                          <div></div>
                          <div></div>
                        </div>
                      </div>
                    </div>

                    <div className="content_body">
                      <div className="content_body_inner">
                        <div className="">
                          <div>
                            <div>
                              <p>
                                For general inquiry about the&nbsp;International
                                Healthcare and Medical Conference, complete the
                                form below.
                                <br />
                                We will usually get back to you via email within
                                24 hrs.
                                <br />
                                For urgent inquiry do contact the
                                organizers&nbsp;via WhatsApp :&nbsp;+1 587 760
                                3549
                              </p>
                            </div>
                            <div></div>
                          </div>

                          <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            accept-charset="UTF-8"
                            action="contact/send_message"
                            method="post"
                          >
                            <div
                              style={{
                                margin: "0",
                                padding: "0",
                                display: "inline",
                              }}
                            >
                              <input name="utf8" type="hidden" value="✓" />
                              <input
                                name="authenticity_token"
                                type="hidden"
                                value="VjUZZbwfJvrkUsseVGkA73MKTdyc3RC9Ve7v8icFf8s="
                              />
                            </div>

                            <table className="table">
                              <tbody>
                                <tr className="table_tr">
                                  <td className="col_1">
                                    <label className="col_label"> Email:</label>
                                  </td>
                                  <td>
                                    <span>
                                      <input
                                        className="email_input"
                                        id="submission_from"
                                        name="user_name"
                                        size="30"
                                        type="text"
                                      />
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="col_1">
                                    <label className="col_label">
                                      Subject:
                                    </label>
                                  </td>
                                  <td className="col2">
                                    <span>
                                      <input
                                        className="email_input"
                                        id="submission_subject"
                                        name="user_subject"
                                        size="30"
                                        type="text"
                                      />
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <label className="col_label">
                                      Comments:
                                    </label>
                                  </td>
                                  <td>
                                    <span>
                                      <textarea
                                        className="email_input"
                                        cols="40"
                                        id="submission_message"
                                        name="message"
                                        rows="20"
                                      ></textarea>
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td colspan="2">
                                    <div>
                                      <span>
                                        <input
                                          className="col_input"
                                          name="commit"
                                          type="submit"
                                          value="Submit"
                                        />
                                      </span>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            {done && "Thanks for reaching out ..."}
                          </form>
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <Side />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;