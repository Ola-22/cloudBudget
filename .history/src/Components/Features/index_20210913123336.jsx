import FeaturesCard from "./FeaturesCard";

export default function Features() {
  return (
    <div>
      <FeaturesCard
        src="/images/features1.png"
        title="Supports All Currencies and Cards"
      />
      <FeaturesCard src="/images/features2.png" />
      <FeaturesCard src="/images/features3.png" />
    </div>
  );
}
