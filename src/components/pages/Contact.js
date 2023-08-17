export default function ContactUs() {
  return (
    <div className="container">
      <div className="form-container">
        <form action="/">
          <div className="first-name">
            <label htmlFor="">First Name:</label>
            <input type="text" />
          </div>

          <div className="last-name">
            <label htmlFor="">Last Name:</label>
            <input type="text" />
          </div>

          <div className="email">
            <label htmlFor="">Email:</label>
            <input type="email" />
          </div>

          <div className="message">
            <label htmlFor="">Message:</label>
            <textarea name="Message" id="" cols="30" rows="10"></textarea>
          </div>

          <div className="submit">
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
