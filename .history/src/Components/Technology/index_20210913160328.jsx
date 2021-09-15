import "./style.scss";
import TechCard from "./TechCard";

export default function Technology() {
  return (
    <div>
      <TechCard
        src="/images/tech1.png"
        title="Cloud Storage"
        paragraph="Access your account from anywhere in the world on any device"
        background="01.png"
      />
      <TechCard />
      <TechCard />
      <TechCard />
    </div>
  );
}
