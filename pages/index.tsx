import BestSeller from "../components/section/home/BestSeller";
import Client from "../components/section/home/Client";
import EditorPick from "../components/section/home/EditorPick";
import Featured from "../components/section/home/Featured";
import FeaturedPosts from "../components/section/home/FeaturedPosts";
import Hero from "../components/section/home/Hero";
import Services from "../components/section/home/Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <Client />
      <EditorPick />
      <BestSeller />
      <Featured />
      <Services />
      <FeaturedPosts />
    </div>
  );
};

export default Home;
