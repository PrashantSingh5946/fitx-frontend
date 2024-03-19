import Hero from "./homepageParts/Hero/Hero";
import Programs from "./homepageParts/Programs/Programs";
import Reasons from "./homepageParts/Reasons/Reasons";
import "./style.css"

const Homepage = () => {
  return (
    <div className="homepage overflow-y-auto">
          <Hero/>
          {/* <Programs/> */}
          {/* <Reasons/> */}
    </div>
  );
};

export default Homepage;
