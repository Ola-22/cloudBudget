import "./style.scss";

export default function Footer() {
  return (
    <div className="footer-main">
      <div>
        <h3>Address</h3>
        <p>
          Pipang Ltd, Griva Digeni, 81-83 Jacovides Tower, 1st Floor 1090
          Picosia USA
        </p>
      </div>
      <div>
        <h3>Services</h3>
        <ul>
          <li>Overview</li>
          <li>Features</li>
          <li>Technology</li>
          <li>Terms & Conditions</li>
          <li>Privecy</li>
        </ul>
      </div>
      <div>
        <h3>Get in Touch</h3>
        <ul>
          <li>info@cloudbudget.com</li>
          <li>+1 844-721-7120</li>
        </ul>
        <div>
          <img src="/images/facebook.png" alt="" />
          <img src="/images/linkedin.png" alt="" />
          <img src="/images/twitter.png" alt="" />
        </div>
      </div>
      <div>
        <h3>We Support</h3>
        <img src="/images/secure.png" alt="" />
      </div>
    </div>
  );
}
