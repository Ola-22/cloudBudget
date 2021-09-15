import "./style.scss";

export default function FeaturesCard({ src, title, paragraph, readmore }) {
  return (
    <div className="features-card">
      <img src={src} alt="" />
    </div>
  );
}
