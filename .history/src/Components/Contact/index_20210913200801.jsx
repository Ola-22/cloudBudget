import "./style.scss";
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
            name="text"
            id="name_first"
            type="email"
            // onChange={this.handleChange}
            // value={email}
            placeholder="Write your email"
          />
          <Input type="text" />
        </div>
        <Input type="text" />
        <Input type="text" />
        <button>Submit now</button>
      </div>
    </div>
  );
}
