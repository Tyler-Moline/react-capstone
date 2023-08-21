import { useState } from "react";
import { successfulToast } from "../../util/Toast";

export default function ContactUs() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setFirst("");
    setLast("");
    setEmail("");
    setMessage("");
    successfulToast("Thanks for your feedback!");
  };

  return (
    <div className="container contact-container">
      <div className="form-container">
        <h2>Please reach out to us!</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="first-name">
            <input
              type="text"
              value={first}
              placeholder="First Name"
              onChange={(e) => setFirst(e.target.value)}
            />
          </div>

          <div className="last-name">
            <input
              type="text"
              placeholder="Last Name"
              value={last}
              onChange={(e) => setLast(e.target.value)}
            />
          </div>

          <div className="email">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="message">
            <textarea
              name="Message"
              id=""
              cols="30"
              rows="5"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <div className="submit">
            <input type="submit"></input>
          </div>
        </form>
      </div>
    </div>
  );
}
