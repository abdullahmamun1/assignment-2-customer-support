import "./Banner.css";
import vector1 from "../../assets/vector1.png";

const Banner = () => {
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 text-center h-[200px] my-20">
      <div className="status-banner first pt-15 rounded-xl">
        <img className="vector left" src={vector1} alt="" />
        <img className="vector right" src={vector1} alt="" />
        <p className="text-white text-xl mb-2">In-Progress</p>
        <h1 className="text-white font-bold text-5xl">0</h1>
      </div>
      <div className="status-banner second pt-15 rounded-xl">
        <img className="vector left" src={vector1} alt="" />
        <img className="vector right" src={vector1} alt="" />
        <p className="text-white text-xl mb-2">Resolved</p>
        <h1 className="text-white font-bold text-5xl">0</h1>
      </div>
    </div>
  );
};

export default Banner;
