import "./style.scss";

export default function TechCard({ src, title, paragraph, background }) {
  return (
    <div
      className="tech-card"
      style={{
        backgroundImage: `url(/images/${background}`,
        backgroundRepeat: "no-repeat",
        position: "relative",
        backgroundPosition: "center top",
      }}
    >
      <img src={src} alt="" />
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </div>
  );
}
