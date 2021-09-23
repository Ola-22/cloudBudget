import "./style.css";
import { Carousel } from "3d-react-carousal";

export default function AppDownload() {
  let slides = [
    <img src="/images/Video_bg1.png" alt="1" />,
    <img src="/images/features1.png" alt="2" />,
    <img src="/images/features3.png" alt="3" />,
    <img src="/images/Video_bg1.png" alt="4" />,
    <img src="/images/features2.png" alt="5" />,
  ];
  return (
    <div className="download-main">
      <div>
        <h1>Stay focused on saving money</h1>
        <p>
          It is important to stay focused on saving money in any way you can. We
          help you monitor your spending habits so you can easily spot and cut
          any unnecessary expenses. Simply join today to get started!
        </p>
        <img src="/images/playstore.png" alt="" />
        <img src="/images/applestore.png" alt="" />
        <img src="/images/windows.png" alt="" />
      </div>
      <div>
        <Carousel slides={slides} interval={1000} />
      </div>
    </div>
  );
}
