import "./style.css";

export default function FeaturesCard({ src, title, paragraph, readmore }) {
  return (
    <div className="features-card">
      <img src={src} alt="" />
      <div>
        <h3>{title}</h3>
        <p>{paragraph}</p>
        <a href="#">{readmore}</a>
      </div>
    </div>
  );
}
