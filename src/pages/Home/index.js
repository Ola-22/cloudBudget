import {
  Navbar,
  MainContent,
  VideoSection,
  Features,
  Technology,
  AppDownload,
  Contact,
  Footer,
} from "../../components/component-path";

export default function Home() {
  return (
    <div>
      <VideoSection />
      <Features />
      <Technology />
      <AppDownload />
      <Contact />
    </div>
  );
}
