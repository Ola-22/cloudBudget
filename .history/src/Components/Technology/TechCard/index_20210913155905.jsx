import "./style.scss";

export default function TechCard({ src, title, paragraph, background }) {
  return (
    <div>
      <img src={src} alt="" />
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </div>
  );
}
