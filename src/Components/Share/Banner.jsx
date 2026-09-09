import { backgroundImage } from "../../assets";

const Banner = ({InProgress="In-Progress",number=0,backgroundColor = "linear-gradient(to right, #422AD5, #9B5DEB)",}) => {
  return (
    <div style={{ background: backgroundColor }} className={`relative w-full overflow-hidden rounded  py-16 my-2 md:my-0`}>
      {/* Left Background Image */}
      <div
        className="absolute inset-y-0 left-0 w-1/2 bg-no-repeat bg-left"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />

      {/* Right Background Image */}
      <div
        className="absolute inset-y-0 right-0 w-1/2 scale-x-[-1] bg-no-repeat bg-left"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <p className="text-2xl">{InProgress}</p>
        <h2 className="mt-2 text-6xl font-bold">{number}</h2>
      </div>
    </div>
  );
};

export default Banner;
