import { useState } from "react";

function Contact() {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
  };

  return (
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registration-form">
              <h1 className="main-heading mb-3">Contact form</h1>
              <br />
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">username</label>
                  <input
                    type="text"
                    name="username"
                    value={contact.username}
                    onChange={handleInput}
                    placeholder="username"
                    autoComplete="off"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email">email</label>
                  <input
                    type="text"
                    name="email"
                    value={contact.email}
                    onChange={handleInput}
                    placeholder="email"
                    autoComplete="off"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message">message</label>
                  <textarea
                    name="message"
                    id="message"
                    value={contact.message}
                    onChange={handleInput}
                    cols="30"
                    rows="10"
                    autoComplete="off"
                    required
                  ></textarea>
                </div>
                <br />
                <button type="submit" className="btn btn-submit">
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>
        <section>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14569.849530505606!2d82.6401176338779!3d24.085229805090275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398f313c3387a2e9%3A0x56329a6fe6822e98!2sNavjeevan%20Vihar%2C%20Vindhyanagar%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1704955461528!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: '0' }}
            allowFullscreen
            loading="lazy"
          ></iframe>
        </section>
      </main>
    </section>
  );
}

export default Contact;
