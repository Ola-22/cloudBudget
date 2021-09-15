import "./style.css";
import Input from "./Input";

export default function Contact() {
  return (
    <div className="contact-main">
      <div>
        <h4>Contact</h4>
        <p>
          Questions or concerns? Just fill out the form below and our support
          team will get back to you within 24 hours
        </p>
      </div>
      <div>
        <div>
          <Input
            name="first_name"
            id="first_name"
            type="text"
            placeholder="First Name"
          />
          <Input
            name="last_name"
            id="last_name"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div>
          <Input
            name="phone"
            id="phone"
            type="text"
            placeholder="Phone Number"
          />
        </div>

        <select name="service" id="service">
          <option value="other">Select Service</option>
          <option value="other">other</option>
          <option value="other">other</option>
          <option value="other">other</option>
        </select>
        <button>Submit now</button>
      </div>
    </div>
  );
}
