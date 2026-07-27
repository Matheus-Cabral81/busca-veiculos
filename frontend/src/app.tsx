import { Hero } from "./components/hero";
import { HowItWorks } from "./components/how-it-works";
import NavBar from "./components/nav-bar";
import { SourceStrip } from "./components/sources-trip";
import { c } from "./lib/theme";

export default function App() {
  return (
    <div style={{ background: c.porcelain, minHeight: "100vh" }}>
      <NavBar />
      <Hero />
      <SourceStrip />
      <HowItWorks />
    </div>
  );
}
