import Banner from "../../../components/Banner";
import DevInfo from "../../../components/DevInfo";
import SuccessStory from "../../../components/SuccessStory";

const Home = () => {
  return (
    <div className=" mx-auto space-y-7">
      <Banner></Banner>
      <SuccessStory></SuccessStory>
      <DevInfo></DevInfo>
    </div>
  );
};

export default Home;
