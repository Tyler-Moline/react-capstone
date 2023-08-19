export default function ContactUs() {
  let firstName = "First Name";
  let lastName = "Last Name";
  let email = "Email";
  let message = "Message";

  const clearForm = () => {
    // firstName = { firstName };
    // lastName = { lastName };
    // email = { email };
    // message = { message };
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Please reach out to us!</h2>
        <form action="/">
          <div className="first-name">
            <input type="text" placeholder={firstName} />
          </div>

          <div className="last-name">
            <input type="text" placeholder={lastName} />
          </div>

          <div className="email">
            <input type="email" placeholder={email} />
          </div>

          <div className="message">
            <textarea
              name="Message"
              id=""
              cols="30"
              rows="5"
              placeholder={message}
            ></textarea>
          </div>

          <div className="submit">
            <button onClick={clearForm}>send it</button>
          </div>
        </form>
      </div>
    </div>
  );
}
