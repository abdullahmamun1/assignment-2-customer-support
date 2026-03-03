import "./Banner.css";
import vector1 from "../../assets/vector1.png";

const Banner = () => {
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 text-center  my-20">
      <div className="status-banner first mx-5 md:mx-0 md:mr-5 my-2 md:my-0 py-10 rounded-xl">
        <img className="vector lef w-[220px]" src={vector1} alt="" />
        <img className="vector right w-[220px]" src={vector1} alt="" />
        <p className="text-white text-xl mb-2">In-Progress</p>
        <h1 className="text-white font-bold text-5xl">0</h1>
      </div>
      <div className="status-banner second mx-5 md:mx-0 my-2 md:my-0 py-10 rounded-xl">
        <img
          className="vector left w-[220px] md:w-[300px]"
          src={vector1}
          alt=""
        />
        <img
          className="vector right w-[220px] md:w-[300px]"
          src={vector1}
          alt=""
        />
        <p className="text-white text-xl mb-2">Resolved</p>
        <h1 className="text-white font-bold text-5xl">0</h1>
      </div>
    </div>
  );
};

export default Banner;
