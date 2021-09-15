import "./style.scss";
import TechCard from "./TechCard";

export default function Technology() {
  return (
    <div>
      <TechCard src="/images/tech1.png" />
      <TechCard />
      <TechCard />
      <TechCard />
    </div>
  );
}
