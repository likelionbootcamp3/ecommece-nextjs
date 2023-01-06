import BestSeller from "../components/section/home/BestSeller";
import Client from "../components/section/home/Client";
import EditorPick from "../components/section/home/EditorPick";
import Featured from "../components/section/home/Featured";
import Hero from "../components/section/home/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <Client />
      <EditorPick />
      <BestSeller />
      <Featured />
    </div>
  );
};

export default Home;
