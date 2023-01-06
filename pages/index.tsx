import BestSeller from "../components/section/home/BestSeller";
import Client from "../components/section/home/Client";
import EditorPick from "../components/section/home/EditorPick";
import Hero from "../components/section/home/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <Client />
      <EditorPick />
      <BestSeller />
    </div>
  );
};

export default Home;
