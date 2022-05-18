import React, { useState, useEffect } from "react";

//Style
import ContactWrap from "./Contact-style";
import Tell from "../assets/images/Tell.png";
import Footer from "../containers/footer/Footer";
import FormInput from "../components/FormImput";

function Contact() {
  const [values, setValues] = useState({
    name: "",
    lastname: "",
    email: "",
    messaje: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      className: "col-6 form-inline form-control-static name",
      type: "text",
      placeholder: "Your name",
      errorMessage:
        "Name should be 3-16 characters and shouldn't include any special character!",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },

    {
      id: 2,
      name: "lastname",
      className: "col-6 form-inline form-control-static name fff",
      type: "text",
      placeholder: "Your lastname",
      errorMessage:
        "Lastname should be 3-16 characters and shouldn't include any special character!",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },

    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      required: true,
    },

    {
      id: 4,
      name: "messaje",
      type: "textarea",
      className: "text-area",
      placeholder: "Your messaje",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ContactWrap className="container">
        <div className="row">
          <div className="col">
            <img src={Tell} alt="" className="img-fluid" />
            <div className="tell-info">
              <h3>Tell us</h3>
              <p>
                Did u find any errors? Please contact us to fix it! Working
                toguether will be amazing for our comunity. <br />
                Any ideas in mind? Take it to the next step and lets improve
                ourselves and make it even better.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6 form-wrap">
            <form onSubmit={handleSubmit}>
              <h2>Contact</h2>
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
              <button className="btn boton">Send</button>
            </form>
          </div>
        </div>
      </ContactWrap>
      <Footer></Footer>
    </>
  );
}

export default Contact;
