import "./style.scss";

export default function TechCard({ src, title, paragraph, background }) {
  return (
    <div style={{ backgroundImage: `url(/images/${background}` }}>
      <img src={src} alt="" />
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </div>
  );
}
