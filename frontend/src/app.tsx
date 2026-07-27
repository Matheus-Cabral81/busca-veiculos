import { Hero } from "./components/hero";
import NavBar from "./components/nav-bar";
import { c } from "./lib/theme";

export default function App() {
  return (
    <div style={{ background: c.porcelain, minHeight: "100vh" }}>
      <NavBar />
      <Hero />
    </div>
  );
}
