import "./style.css";
import TechCard from "./TechCard";

export default function Technology() {
  return (
    <div className="tech-main">
      <h1>Technology</h1>
      <div>
        <TechCard
          src="/images/tech1.png"
          title="Cloud Storage"
          paragraph="Access your account from anywhere in the world on any device"
          background="01.png"
        />
        <TechCard
          src="/images/tech2.png"
          title="Secure"
          paragraph="All your information is stored on secure cloud servers"
          background="02.png"
        />
        <TechCard
          src="/images/tech3.png"
          title="PDF Download"
          paragraph="Download any of your reports in PDF format"
          background="03.png"
        />
        <TechCard
          src="/images/tech4.png"
          title="CSV Download"
          paragraph="All your information is stored on secure cloud servers"
          background="04.png"
        />
      </div>
    </div>
  );
}
