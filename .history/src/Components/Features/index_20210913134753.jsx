import FeaturesCard from "./FeaturesCard";
import "./style.scss";

export default function Features() {
  return (
    <div
      className="features-main"
      style={{ backgroundColor: "#fafafa", paddingTop: "60px" }}
    >
      <h1 style={{ textAlign: "center" }}>Features</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          height: "660px",
          flexWrap: "wrap",
        }}
      >
        <FeaturesCard
          src="/images/features1.png"
          title="Supports All Currencies and Cards"
          paragraph="We support all popular currencies and is fully customizable to add"
          readmore="Read More"
        />
        <FeaturesCard
          src="/images/features2.png"
          title="Manage your expenses on the go"
          paragraph="You can access your account from anywhere in the world on any device"
          readmore="Read More"
        />
        <FeaturesCard
          src="/images/features3.png"
          title="Cloud Budget Management Software"
          paragraph="Our software is made so you can access and manage your budget"
          readmore="Read More"
        />
      </div>
    </div>
  );
}
